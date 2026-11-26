// Lê as telas do Stitch (stitch/<cod>.html) e gera:
//   telas/<cod>.json   → config do Tailwind v3 daquela tela, plugins do CDN e o CSS próprio dela
//   ../../app/quiz-mia/_telas/T<cod>.tsx → o <body> convertido em JSX (só se ainda não existir;
//                                          --force sobrescreve, e aí perde a fiação feita à mão)
// Uso: node extrai.mjs [--force] [cod ...]
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { parseDocument } from "htmlparser2";
import postcss from "postcss";
import tailwindcss from "tailwindcss";
import forms from "@tailwindcss/forms";
import containerQueries from "@tailwindcss/container-queries";
import { CLASSE_CSS, desescapa } from "./comum.mjs";

const PLUG = { forms, "container-queries": containerQueries };
// Classes do Tailwind ganham o prefixo "q-" no JSX (e no CSS gerado): assim o Tailwind v4 do resto do site,
// que é global, nunca acerta um elemento do quiz (ex.: space-y-3 do v4 somava margem ao space-y-3 do v3).
let CLASSES_TW = new Set();
const prefixaClasses = (v) => v.split(/\s+/).filter(Boolean).map((t) => (CLASSES_TW.has(t) ? "q-" + t : t)).join(" ");
export async function classesTailwind(config, plugins, raw) {
  const conf = { ...config, content: [{ raw, extension: "html" }], plugins: plugins.map((p) => PLUG[p]).filter(Boolean) };
  const r = await postcss([tailwindcss(conf)]).process("@tailwind base;@tailwind components;@tailwind utilities;", { from: undefined });
  const out = new Set();
  r.root.walkRules((regra) => {
    for (const m of regra.selector.matchAll(CLASSE_CSS)) out.add(desescapa(m[1]));
  });
  return out;
}

const AQUI = path.dirname(new URL(import.meta.url).pathname);
const SAIDA_TSX = path.resolve(AQUI, "../../app/quiz-mia/_telas");
const FOTO_LOCAL = "/images/quiz-mia/michelly.jpg";
const args = process.argv.slice(2);
const force = args.includes("--force");
const so = args.filter((a) => !a.startsWith("--"));
fs.mkdirSync(path.join(AQUI, "telas"), { recursive: true });
fs.mkdirSync(SAIDA_TSX, { recursive: true });

const VOID = new Set(["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "source", "track", "wbr"]);
const ATTR = {
  class: "className", for: "htmlFor", tabindex: "tabIndex", readonly: "readOnly", maxlength: "maxLength",
  minlength: "minLength", autocomplete: "autoComplete", inputmode: "inputMode", autofocus: "autoFocus",
  crossorigin: "crossOrigin", colspan: "colSpan", rowspan: "rowSpan", srcset: "srcSet", enterkeyhint: "enterKeyHint",
  "xlink:href": "xlinkHref", "xml:space": "xmlSpace", "xmlns:xlink": "xmlnsXlink", viewbox: "viewBox",
  preserveaspectratio: "preserveAspectRatio", gradientunits: "gradientUnits", gradienttransform: "gradientTransform",
  patternunits: "patternUnits", patterntransform: "patternTransform", stddeviation: "stdDeviation",
  spellcheck: "spellCheck", contenteditable: "contentEditable", datetime: "dateTime",
};
const BOOL = new Set(["checked", "disabled", "readonly", "required", "hidden", "autofocus", "selected", "multiple", "open", "novalidate"]);
const camel = (s) => s.replace(/-([a-z])/g, (_, c) => c.toUpperCase());

function estiloObj(css) {
  const out = [];
  for (const dec of css.split(";")) {
    const i = dec.indexOf(":");
    if (i < 0) continue;
    // o React descarta valor com !important; inline já vence as classes, então sai o !important
    const k = dec.slice(0, i).trim(), v = dec.slice(i + 1).trim().replace(/\s*!important$/, "");
    if (!k) continue;
    const key = k.startsWith("--") ? JSON.stringify(k) : camel(k.toLowerCase().replace(/^-ms-/, "ms-"));
    out.push(`${key}: ${JSON.stringify(v)}`);
  }
  return `{{ ${out.join(", ")} }}`;
}

function attrs(el) {
  const parts = [];
  for (const [k0, v0] of Object.entries(el.attribs || {})) {
    const k = k0.toLowerCase();
    let v = v0;
    if (k.startsWith("on")) continue; // eventos do Stitch (history.back etc.): a fiação é feita à mão
    if (k === "style") { parts.push(`style=${estiloObj(v)}`); continue; }
    if (k === "class") v = prefixaClasses(v);
    if ((k === "src" || k === "data-src") && /googleusercontent\.com\/aida/.test(v)) v = FOTO_LOCAL;
    let nome = ATTR[k] || (k.startsWith("data-") || k.startsWith("aria-") ? k : k.includes("-") || k.includes(":") ? camel(k.replace(":", "-")) : k);
    if (el.name === "input" || el.name === "textarea") {
      if (k === "value") nome = "defaultValue";
      if (k === "checked") nome = "defaultChecked";
    }
    if (BOOL.has(k) && (v === "" || v === k)) { parts.push(`${nome}`); continue; }
    if (/^(tabIndex|aria-value(now|min|max)|maxLength|minLength|rows|cols|colSpan|rowSpan|aria-level|aria-setsize|aria-posinset)$/.test(nome) && /^-?[0-9.]+$/.test(v)) { parts.push(`${nome}={${v}}`); continue; }
    parts.push(`${nome}=${JSON.stringify(v)}`);
  }
  return parts.length ? " " + parts.join(" ") : "";
}

// Espaço em branco entre elementos só aparece na tela quando os dois lados são "inline" (texto, span, a…).
// Nesses casos ele vira {" "}; nos outros (entre blocos, dentro de flex/grid) é descartado, como o navegador faz.
const INLINE = new Set(["a", "abbr", "b", "bdi", "bdo", "br", "cite", "code", "data", "dfn", "em", "i", "img", "input", "kbd", "label", "mark", "q", "s", "samp", "small", "span", "strong", "sub", "sup", "time", "u", "var", "svg", "button", "select", "textarea"]);
function texto(t, pre, no) {
  if (pre) return `{${JSON.stringify(t)}}`;
  const c = t.replace(/[ \t\n\r\f]+/g, " ");
  if (c === "") return "";
  if (c === " ") {
    const viz = (n, dir) => { let x = n[dir]; while (x && (x.type === "comment" || (x.type === "text" && !x.data.trim()))) x = x[dir]; return x; };
    const a = viz(no, "prev"), b = viz(no, "next");
    const inl = (x) => x && (x.type === "text" || (x.type === "tag" && INLINE.has(x.name)));
    if (!inl(a) || !inl(b)) return "";
  }
  return `{${JSON.stringify(c)}}`;
}

function jsx(no, ind, pre, coletaCss) {
  const pad = "  ".repeat(ind);
  if (no.type === "text") { const s = texto(no.data, pre, no); return s ? pad + s + "\n" : ""; }
  if (no.type === "comment") return "";
  if (no.type === "script") return "";
  if (no.type === "style") { coletaCss.push(no.children.map((c) => c.data).join("")); return ""; }
  if (no.type !== "tag") return "";
  const nome = no.name;
  const p = pre || nome === "pre" || nome === "textarea";
  if (VOID.has(nome)) return `${pad}<${nome}${attrs(no)} />\n`;
  const filhos = no.children.map((c) => jsx(c, ind + 1, p, coletaCss)).join("");
  if (!filhos.trim()) return `${pad}<${nome}${attrs(no)} />\n`;
  return `${pad}<${nome}${attrs(no)}>\n${filhos}${pad}</${nome}>\n`;
}

const achar = (nos, pred, out = []) => { for (const n of nos) { if (pred(n)) out.push(n); if (n.children) achar(n.children, pred, out); } return out; };

const arquivos = fs.readdirSync(path.join(AQUI, "stitch")).filter((f) => f.endsWith(".html")).sort();
// pranchetas que são só um estado de outra tela (01b = 01 marcada, 14b/14c = 14, 28b = 28, 29b = 29a, 30b = 30a)
const SO_REFERENCIA = new Set(["01b", "14b", "14c", "28b", "29b", "30b"]);
for (const f of arquivos) {
  const cod = f.replace(".html", "");
  if (SO_REFERENCIA.has(cod)) continue;
  if (so.length && !so.includes(cod)) continue;
  const html = fs.readFileSync(path.join(AQUI, "stitch", f), "utf8");
  const doc = parseDocument(html, { decodeEntities: true, recognizeSelfClosing: true });
  const head = achar(doc.children, (n) => n.name === "head")[0];
  const body = achar(doc.children, (n) => n.name === "body")[0];

  // config do Tailwind e plugins do CDN
  let config = {}, plugins = [], temTailwind = false;
  for (const s of achar(head ? head.children : [], (n) => n.type === "script")) {
    const src = s.attribs.src || "";
    if (src.includes("cdn.tailwindcss.com")) {
      temTailwind = true;
      const m = src.match(/plugins=([^&"]+)/);
      if (m) plugins = m[1].split(",");
    }
    const code = s.children.map((c) => c.data).join("");
    if (code.includes("tailwind.config")) {
      const ctx = { tailwind: {} };
      vm.runInNewContext(code, ctx);
      config = ctx.tailwind.config || {};
    }
  }
  const cssHead = achar(head ? head.children : [], (n) => n.type === "style").map((s) => s.children.map((c) => c.data).join("")).join("\n");
  const cssBody = [];
  const htmlNo = achar(doc.children, (n) => n.name === "html")[0];
  CLASSES_TW = temTailwind ? await classesTailwind(config, plugins, html) : new Set();
  const htmlCls = prefixaClasses(htmlNo?.attribs?.class || "");
  const bodyCls = prefixaClasses(body.attribs.class || "");
  const bodySty = body.attribs.style || "";
  const corpo = body.children.map((c) => jsx(c, 4, false, cssBody)).join("");
  fs.writeFileSync(path.join(AQUI, "telas", `${cod}.json`), JSON.stringify({ cod, temTailwind, plugins, config, cssHead, cssBody: cssBody.join("\n") }, null, 1));

  const destino = path.join(SAIDA_TSX, `T${cod}.tsx`);
  if (fs.existsSync(destino) && !force) { console.log("mantido (já existe)", cod); continue; }
  const sty = bodySty ? ` style=${estiloObj(bodySty)}` : "";
  const tsx = `// Tela ${cod} — convertida de scripts/quiz-mia/stitch/${cod}.html (Stitch, projeto "MIA · Quiz de vendas").
import type { TelaProps } from "../_quiz/tipos";

export default function T${cod}({ q }: TelaProps) {
  void q;
  return (
    <div data-tela="${cod}"${htmlCls ? ` className=${JSON.stringify(htmlCls)}` : ""}>
      <div data-body className=${JSON.stringify(bodyCls)}${sty}>
${corpo}      </div>
    </div>
  );
}
`;
  fs.writeFileSync(destino, tsx);
  console.log("gerado", cod, tsx.length);
}
