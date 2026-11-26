// Motion da oferta do quiz (tela 30): a aluna usando o app de verdade, aba por aba.
// Telas capturadas do app real (servidor local, banco de homologação, aluna de teste do nível MIA) em 1170 px de
// largura (390 css × 3). Comidas do plano desfocadas (regra: o plano alimentar nunca aparece legível).
// A resposta da Mia no chat é TEXTO DE DEMONSTRAÇÃO desenhado com o markup do app (falta a validação da Michelly).
import { AbsoluteFill, Easing, Img, interpolate, Sequence, staticFile, useCurrentFrame } from "remotion";

export const LARG = 720; // vídeo: 390 css × 1,846
export const ALT = 1558; // 844 css × 1,846
export const FPS = 30;
const K = LARG / 1170; // px da captura → px do vídeo
const NAV_H = 225 * K; // barra de abas
const VIS = ALT - NAV_H; // área da página acima da barra

// cenas (em quadros)
export const CENAS = {
  inicio: [0, 108],
  plano: [108, 216],
  registrar: [216, 300],
  chat: [300, 486],
} as const;
export const DURACAO = 486;

const suave = Easing.bezier(0.45, 0, 0.2, 1);
const NAV_X = { inicio: 39, plano: 117, registrar: 195, chat: 273 }; // centro de cada aba (css)
const css = (v: number) => (v * LARG) / 390;

/** toque do dedo: círculo que cresce e some */
function Toque({ x, y, em }: { x: number; y: number; em: number }) {
  const f = useCurrentFrame() - em;
  if (f < 0 || f > 16) return null;
  const s = interpolate(f, [0, 16], [0.5, 1.6]);
  const o = interpolate(f, [0, 3, 16], [0, 0.55, 0]);
  return (
    <div
      style={{
        position: "absolute", left: css(x) - 36, top: css(y) - 36, width: 72, height: 72, borderRadius: 999,
        background: "rgba(32,62,53,.28)", border: "3px solid rgba(255,255,255,.9)", transform: `scale(${s})`, opacity: o,
      }}
    />
  );
}

/** página inteira rolando (y em px da captura) + barra de abas da própria aba por cima */
function Rola({ img, nav, keys }: { img: string; nav: string; keys: [number, number][] }) {
  const f = useCurrentFrame();
  const y = interpolate(f, keys.map((k) => k[0]), keys.map((k) => k[1]), { easing: suave, extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <AbsoluteFill style={{ background: "#F6F5F1", overflow: "hidden" }}>
      <div style={{ position: "absolute", left: 0, top: 0, width: LARG, height: VIS, overflow: "hidden" }}>
        <Img src={staticFile(img)} style={{ position: "absolute", left: 0, top: -y * K, width: LARG }} />
      </div>
      <Img src={staticFile(nav)} style={{ position: "absolute", left: 0, bottom: 0, width: LARG, height: NAV_H }} />
    </AbsoluteFill>
  );
}

/** troca de tela por opacidade (dentro de uma cena) */
function Quadro({ img, de, ate, fade = 6 }: { img: string; de: number; ate: number; fade?: number }) {
  const f = useCurrentFrame();
  if (f < de - fade || f > ate) return null;
  const o = fade > 0 ? interpolate(f, [de - fade, de], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) : 1;
  return <Img src={staticFile(img)} style={{ position: "absolute", inset: 0, width: LARG, height: ALT, opacity: o }} />;
}

/** cena com entrada em fade curto (troca de aba) */
function Cena({ de, ate, children }: { de: number; ate: number; children: React.ReactNode }) {
  return (
    <Sequence from={de} durationInFrames={ate - de + 6} layout="none">
      <Entra>{children}</Entra>
    </Sequence>
  );
}
function Entra({ children }: { children: React.ReactNode }) {
  const f = useCurrentFrame();
  const o = interpolate(f, [0, 6], [0, 1], { extrapolateRight: "clamp" });
  return <AbsoluteFill style={{ opacity: o }}>{children}</AbsoluteFill>;
}

export const AppMia: React.FC = () => {
  const [, i1] = CENAS.inicio;
  const [, p1] = CENAS.plano;
  const [, r1] = CENAS.registrar;
  const [c0] = CENAS.chat;
  const navY = 805;
  return (
    <AbsoluteFill style={{ background: "#F6F5F1" }}>
      {/* Início: o resumo do dia e a próxima refeição */}
      <Cena de={0} ate={i1}>
        <Rola img="inicio.png" nav="nav_inicio.png" keys={[[14, 0], [64, 980]]} />
      </Cena>
      {/* Meu plano: as calorias e as refeições do dia */}
      <Cena de={i1} ate={p1}>
        <Rola img="plano.png" nav="nav_plano.png" keys={[[14, 0], [44, 0], [92, 1180]]} />
      </Cena>
      {/* Registrar: um registro de cada vez */}
      <Cena de={p1} ate={r1}>
        <Rola img="registrar.png" nav="nav_registrar.png" keys={[[18, 0], [70, 420]]} />
      </Cena>
      {/* Chat: a pergunta e a resposta da Mia */}
      <Cena de={c0} ate={DURACAO}>
        <AbsoluteFill>
          <Quadro img="chat0.png" de={0} ate={30} fade={0} />
          <Quadro img="chat1.png" de={30} ate={64} fade={8} />
          <Quadro img="chat2.png" de={64} ate={92} fade={3} />
          <Quadro img="chat3.png" de={92} ate={128} fade={5} />
          <Quadro img="chat4.png" de={128} ate={200} fade={10} />
        </AbsoluteFill>
        <Toque x={345} y={727} em={56} />
      </Cena>
      {/* toques na barra de abas, antes de cada troca */}
      <Toque x={NAV_X.plano} y={navY} em={i1 - 12} />
      <Toque x={NAV_X.registrar} y={navY} em={p1 - 12} />
      <Toque x={NAV_X.chat} y={navY} em={r1 - 12} />
    </AbsoluteFill>
  );
};
