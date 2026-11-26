// Gera o CSS isolado de cada tela do /quiz-mia, reproduzindo o que o CDN do Tailwind v3 fazia no Stitch:
//   CSS do <head> da tela  →  Tailwind v3 (preflight + utilitários) com a config DAQUELA tela  →  CSS do <body>
// O conteúdo varrido é o próprio T<cod>.tsx (classes acrescentadas na fiação também entram).
// Tudo sai prefixado com [data-tela="<cod>"]; html/body/:root viram o próprio contêiner da tela.
// Saída: app/quiz-mia/_telas/telas.css (versionado; a Vercel não roda isto).
// Uso: node css.mjs
import fs from "node:fs";
import path from "node:path";
import postcss from "postcss";
import tailwindcss from "tailwindcss";
import forms from "@tailwindcss/forms";
import containerQueries from "@tailwindcss/container-queries";
import { CLASSE_CSS, desescapa } from "./comum.mjs";

const AQUI = path.dirname(new URL(import.meta.url).pathname);
const TELAS = path.resolve(AQUI, "../../app/quiz-mia/_telas");
const PLUG = { forms, "container-queries": containerQueries };

function prefixa(css, cod) {
  const P = `[data-tela="${cod}"]`;
  const raiz = postcss.parse(css);
  raiz.walkAtRules("import", (r) => r.remove());
  raiz.walkAtRules("font-face", (r) => r.remove());
  raiz.walkAtRules("keyframes", (r) => {
    const novo = `${r.params}--t${cod}`;
    raiz.walkDecls(/^(animation|animation-name)$/, (d) => {
      d.value = d.value.replace(new RegExp(`(^|[\\s,])${r.params}(?=$|[\\s,])`, "g"), `$1${novo}`);
    });
    r.params = novo;
  });
  raiz.walkRules((regra) => {
    if (regra.parent && regra.parent.type === "atrule" && /keyframes$/.test(regra.parent.name)) return;
    regra.selectors = regra.selectors.flatMap((s0) => {
      const s = s0.trim();
      // html/:root → o contêiner [data-tela]; body → o filho [data-body]
      const m = s.match(/^((?:html|body|:root|:host)\b(?:\s*>?\s*(?:html|body)\b)*)(.*)$/);
      if (m && m[1]) {
        const temBody = /body/.test(m[1]);
        const base = temBody ? `${P} > [data-body]` : P;
        const resto = m[2];
        if (!resto) return [base];
        if (/^[.:#[]/.test(resto) && !resto.startsWith("::")) return [`${base}${resto}`];
        if (resto.startsWith("::")) return [`${base}${resto}`];
        return [`${base}${resto}`];
      }
      if (s === "*" || /^\*?::?(before|after|backdrop|placeholder|selection|marker|file-selector-button)/.test(s)) {
        const sem = s.replace(/^\*/, "");
        return [`${P}${sem}`, `${P} ${s}`];
      }
      // classes que no Stitch estavam no próprio <html> ficam no contêiner: a regra também vale para ele
      if (/^\.q-[^\s>+~]*$/.test(s)) return [`${P} ${s}`, `${P}${s}`];
      return [`${P} ${s}`];
    });
  });
  // ajustes de prancheta → celular de verdade
  raiz.walkDecls((d) => {
    if (d.prop === "min-height" && /max\(\s*884px\s*,\s*100dvh\s*\)/.test(d.value)) d.value = "100dvh";
    if (d.prop === "min-height" && /max\(\s*844px\s*,\s*100dvh\s*\)/.test(d.value)) d.value = "100dvh";
    // a prancheta tinha 390 px; no celular de verdade (360 a 430) a largura fixa vira "até 390"
    if (d.prop === "width" && d.value === "390px") {
      d.value = "100%";
      d.cloneAfter({ prop: "max-width", value: "390px" });
    }
  });
  // o Tailwind v4 do site registra --tw-* com @property (tipos <color>, <length>…) e invalida os valores do v3
  return raiz.toString().replace(/--tw-/g, "--q-tw-");
}

const cabecas = [];
const corpos = [];
const twPorTela = [];
for (const f of fs.readdirSync(path.join(AQUI, "telas")).filter((x) => x.endsWith(".json")).sort()) {
  const t = JSON.parse(fs.readFileSync(path.join(AQUI, "telas", f), "utf8"));
  const tsx = path.join(TELAS, `T${t.cod}.tsx`);
  if (!fs.existsSync(tsx)) continue;
  const fonte = fs.readFileSync(tsx, "utf8");
  // classes do Tailwind no JSX levam "q-" (ver extrai.mjs); o Tailwind v3 compila sem o prefixo
  const usadas = new Set([...fonte.matchAll(/(?<=^|[\s"`{])q-([^\s"`}]+)/g)].map((m) => m[1]));
  let tw = "";
  if (t.temTailwind) {
    const conf = {
      ...t.config,
      content: [{ raw: [...usadas].join(" "), extension: "html" }],
      plugins: t.plugins.map((p) => PLUG[p]).filter(Boolean),
    };
    tw = (await postcss([tailwindcss(conf)]).process("@tailwind base;\n@tailwind components;\n@tailwind utilities;\n", { from: undefined })).css;
  }
  const renomeia = (css) => {
    const raiz = postcss.parse(css);
    raiz.walkComments((c) => c.remove());
    raiz.walkRules((regra) => {
      regra.selector = regra.selector.replace(CLASSE_CSS, (m0, nome) => (usadas.has(desescapa(nome)) ? `.q-${nome}` : m0));
    });
    return prefixa(raiz.toString(), t.cod);
  };
  // ordem do documento original: CSS do <head> → Tailwind (o CDN injeta no fim do <head>) → CSS do <body>
  cabecas.push(renomeia(t.cssHead));
  twPorTela.push([t.cod, renomeia(tw)]);
  corpos.push(renomeia(t.cssBody));
}

// O Tailwind de cada tela repete muita regra igual (preflight, flex, p-4…). Regras idênticas viram uma só, com
// :is([data-tela="a"],[data-tela="b"]…) — mesma especificidade — na posição da primeira ocorrência. Como o
// Tailwind gera tudo numa ordem global fixa, a ordem relativa dentro de cada tela se mantém (conferido com compara.py).
const chaves = new Map(); // chave → { chave, telas, i, saem:Set, entram }
const primeiras = [];
const seqs = [];
for (const [cod, css] of twPorTela) {
  const raiz = postcss.parse(css);
  const seq = [];
  for (const no of raiz.nodes) {
    const P = `[data-tela="${cod}"]`;
    const chave = no.toString().split(P).join("§").split(`--t${cod}`).join("--t§");
    let e = chaves.get(chave);
    if (!e) {
      e = { chave, telas: [], i: primeiras.length, saem: new Set(), entram: 0 };
      chaves.set(chave, e);
      primeiras.push(e);
    }
    if (!e.telas.includes(cod)) e.telas.push(cod);
    seq.push(e);
  }
  seqs.push(seq);
}
// ordem topológica: em cada tela, uma regra vem depois da anterior (Kahn; empate = quem apareceu primeiro)
for (const seq of seqs) for (let k = 1; k < seq.length; k++) if (seq[k - 1] !== seq[k] && !seq[k - 1].saem.has(seq[k])) { seq[k - 1].saem.add(seq[k]); seq[k].entram++; }
const prontos = primeiras.filter((e) => e.entram === 0);
const ordem = [];
while (prontos.length) {
  prontos.sort((x, y) => x.i - y.i);
  const e = prontos.shift();
  ordem.push(e);
  for (const d of e.saem) if (--d.entram === 0) prontos.push(d);
}
if (ordem.length !== primeiras.length) throw new Error(`ordem do CSS com ciclo: ${primeiras.length - ordem.length} regras`);
const juntado = ordem
  .map((e) => {
    const alvo = e.telas.length === 1 ? `[data-tela="${e.telas[0]}"]` : `:is(${e.telas.map((c) => `[data-tela="${c}"]`).join(",")})`;
    return e.chave.split("§").join(alvo).split("--t" + alvo).join("--tq" + (e.telas.length === 1 ? e.telas[0] : ""));
  })
  .join("\n");

function minifica(css) {
  const raiz = postcss.parse(css);
  raiz.walkComments((c) => c.remove());
  raiz.walk((n) => {
    n.raws.before = "";
    n.raws.after = "";
    if (n.type === "decl") n.raws.between = ":";
    if (n.type === "rule") { n.raws.between = ""; n.raws.semicolon = false; n.selector = n.selectors.join(","); }
    if (n.type === "atrule") { n.raws.between = ""; n.raws.afterName = " "; n.raws.semicolon = false; }
  });
  return raiz.toString();
}
const final = `/* GERADO por scripts/quiz-mia/css.mjs — não editar à mão. */\n${minifica([...cabecas, juntado, ...corpos].join("\n"))}\n`;
fs.writeFileSync(path.join(TELAS, "telas.css"), final);
console.log("telas.css", final.length);
