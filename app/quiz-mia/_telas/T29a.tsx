// Tela 29a — convertida de scripts/quiz-mia/stitch/29a.html (Stitch, projeto "MIA · Quiz de vendas").
import { useEffect, useRef } from "react";
import type { PointerEvent } from "react";
import type { TelaProps } from "../_quiz/tipos";
import { cupom } from "../_quiz/regras";
import { primeiroNome } from "../_quiz/ui";

// Raspadinha (pranchetas 29a intacta e 29b pela metade). Debaixo da camada dourada está o prêmio desenhado
// na 29b; o dedo apaga a camada (máscara num canvas). Raspou metade ou tocou em "Revelar sem raspar" →
// grava `raspou` e o quiz mostra a prancheta 29c (T29c).
export default function T29a({ q }: TelaProps) {
  const metade = q.previa && q.previaExtra === "metade";
  const cartao = useRef<HTMLDivElement>(null);
  const capa = useRef<HTMLDivElement>(null);
  const tela = useRef<HTMLCanvasElement | null>(null);
  const riscando = useRef(false);
  const ultimo = useRef<[number, number] | null>(null);
  const quadro = useRef(0);
  const movs = useRef(0);
  const feito = useRef(false);

  useEffect(() => {
    if (q.previa) return;
    const c = document.createElement("canvas");
    c.width = 330;
    c.height = 200;
    const cx = c.getContext("2d", { willReadFrequently: true });
    if (!cx) return;
    cx.fillStyle = "#000";
    cx.fillRect(0, 0, c.width, c.height);
    tela.current = c;
    return () => cancelAnimationFrame(quadro.current);
  }, [q.previa]);

  const revela = () => {
    if (feito.current) return;
    feito.current = true;
    if (typeof navigator !== "undefined") navigator.vibrate?.([12, 40, 12]);
    q.set({ raspou: true });
  };

  const aplica = () => {
    quadro.current = 0;
    const c = tela.current, el = capa.current;
    if (!c || !el) return;
    const url = `url(${c.toDataURL()})`;
    el.style.setProperty("mask-image", url);
    el.style.setProperty("-webkit-mask-image", url);
    el.style.setProperty("mask-size", "100% 100%");
    el.style.setProperty("-webkit-mask-size", "100% 100%");
  };

  const risca = (e: PointerEvent<HTMLDivElement>) => {
    const c = tela.current, box = cartao.current;
    if (!c || !box || feito.current) return;
    const cx = c.getContext("2d", { willReadFrequently: true });
    if (!cx) return;
    const b = box.getBoundingClientRect();
    const x = ((e.clientX - b.left) / b.width) * c.width;
    const y = ((e.clientY - b.top) / b.height) * c.height;
    cx.globalCompositeOperation = "destination-out";
    cx.lineCap = "round";
    cx.lineJoin = "round";
    cx.lineWidth = 46;
    cx.beginPath();
    const [x0, y0] = ultimo.current || [x, y];
    cx.moveTo(x0, y0);
    cx.lineTo(x + 0.01, y);
    cx.stroke();
    ultimo.current = [x, y];
    if (!quadro.current) quadro.current = requestAnimationFrame(aplica);
    if (++movs.current % 6 === 0) {
      const d = cx.getImageData(0, 0, c.width, c.height).data;
      let vazio = 0, total = 0;
      for (let p = 3; p < d.length; p += 4 * 53) { total++; if (d[p] === 0) vazio++; }
      if (vazio / total > 0.5) revela();
    }
  };
  const desce = (e: PointerEvent<HTMLDivElement>) => {
    riscando.current = true;
    ultimo.current = null;
    e.currentTarget.setPointerCapture(e.pointerId);
    risca(e);
  };
  const move = (e: PointerEvent<HTMLDivElement>) => { if (riscando.current) risca(e); };
  const sobe = () => { riscando.current = false; ultimo.current = null; };

  return (
    <div data-tela="29a">
      <div data-body className="q-bg-surface q-font-body-md q-text-on-surface q-antialiased q-min-h-screen q-flex q-flex-col q-justify-between q-selection:bg-primary-fixed q-selection:text-on-primary-fixed">
        <main className="q-flex-1 q-flex q-flex-col q-relative q-w-full q-max-w-[520px] q-mx-auto q-bg-surface">
          <div className="q-flex q-flex-col q-w-full q-px-margin q-pb-10 q-select-none">
            <div className="q-flex q-justify-center q-items-center q-pt-8 q-pb-7">
              <div className="q-relative q-w-8 q-h-8 q-rounded-full q-shadow-sm q-flex q-items-center q-justify-center" style={{ background: "radial-gradient(circle at 35% 30%, #E2EDE7 0%, #76A58F 38%, #2D5847 72%, #18372C 100%)", boxShadow: "0 4px 14px rgba(32, 62, 53, 0.22), 0 0 16px rgba(217, 164, 65, 0.28)" }}>
                <div className="q-absolute q-top-1 q-left-2 q-w-2 q-h-1.5 q-rounded-full q-opacity-70" style={{ background: "radial-gradient(circle, #FFFFFF 0%, rgba(255,255,255,0) 80%)", transform: "rotate(-25deg)" }} />
                <div className="q-absolute q-inset-0 q-rounded-full" style={{ background: "radial-gradient(circle at 65% 75%, rgba(217, 164, 65, 0.22) 0%, transparent 60%)" }} />
              </div>
            </div>
            <div className="q-text-center q-px-2">
              <h1 className="q-font-display-lg-mobile q-text-display-lg-mobile q-text-primary-container q-tracking-tight" style={{ lineHeight: "1.25" }}>
                {`${primeiroNome(q.r.nome) || "Ana"}, quem chega até aqui libera um desconto.`}
              </h1>
              <p className="q-font-body-md q-text-body-md q-text-on-surface-variant q-mt-2 q-font-normal">
                {" Raspe para ver o seu. "}
              </p>
            </div>
            <div className="q-flex q-justify-center q-items-center q-mt-7">
              <div className="q-relative q-overflow-hidden q-cursor-pointer" id="scratchCard" ref={cartao} style={{ width: "330px", height: "200px", borderRadius: "20px", boxShadow: "0 10px 25px -5px rgba(32, 62, 53, 0.08), 0 8px 10px -6px rgba(32, 62, 53, 0.04)", touchAction: "none" }} onPointerDown={desce} onPointerMove={move} onPointerUp={sobe} onPointerCancel={sobe}>
                <div className="q-absolute q-inset-0 q-w-full q-h-full q-bg-surface-container-lowest q-flex q-items-center q-justify-start q-pl-7 q-pr-6" style={{ backgroundColor: "#FFFFFF" }}>
                  <div className="q-flex q-flex-col q-text-left q-select-none q-justify-center q-h-full q-py-4">
                    <span className="q-text-[13px] q-font-body-md q-font-medium q-tracking-normal" style={{ color: "#56654D" }}>
                      {"Você liberou"}
                    </span>
                    <div className="q-font-headline-lg q-font-semibold q-leading-[1.15] q-mt-1" style={{ fontFamily: "'EB Garamond', serif", fontSize: "30px", fontWeight: "600", color: "#203E35", lineHeight: "1.15" }}>
                      {"até 62%"}
                      <br />
                      <span style={{ fontSize: "26px", fontWeight: "600" }}>
                        {"de desconto"}
                      </span>
                    </div>
                    <span className="q-text-[14px] q-font-body-md q-mt-1 q-font-normal" style={{ color: "#56654D" }}>
                      {"no seu plano da MIA"}
                    </span>
                    <div className="q-mt-2.5 q-inline-flex q-items-center q-self-start">
                      <span className="q-rounded-full q-text-[12px] q-font-body-md q-font-medium q-tracking-wide q-flex q-items-center" style={{ padding: "3px 10px", border: "1px dashed #D9A441", backgroundColor: "rgba(217, 164, 65, 0.08)", color: "#8A6418" }}>
                        {`cupom ${cupom(q.r.nome)} aplicado`}
                      </span>
                    </div>
                  </div>
                </div>
                {/* camada dourada: some onde ela raspa (máscara desenhada num canvas) */}
                <div className="q-absolute q-inset-0 q-w-full q-h-full q-pointer-events-none" ref={capa} style={metade ? { clipPath: "polygon(42% 0%, 100% 0%, 100% 100%, 54% 100%, 49% 82%, 53% 66%, 45% 50%, 48% 34%, 44% 18%)" } : undefined}>
                  <div className="q-absolute q-inset-0 q-w-full q-h-full" style={{ backgroundColor: "#D9A441", backgroundImage: "repeating-linear-gradient(135deg, rgba(255, 255, 255, 0.09) 0px, rgba(255, 255, 255, 0.09) 1px, transparent 1px, transparent 7px), repeating-linear-gradient(45deg, rgba(120, 80, 15, 0.05) 0px, rgba(120, 80, 15, 0.05) 1px, transparent 1px, transparent 7px)" }} />
                  <div className="q-absolute q-inset-0 q-w-full q-h-full q-pointer-events-none" style={{ background: "radial-gradient(circle at 50% 50%, rgba(255, 235, 178, 0.28) 0%, rgba(175, 126, 32, 0.16) 100%)" }} />
                  <div className="q-relative q-z-10 q-w-full q-h-full q-flex q-items-center q-justify-center">
                    <div className="q-px-5 q-py-2.5 q-rounded-full q-flex q-items-center q-justify-center q-transition-transform q-active:scale-95 q-duration-200" style={{ background: "rgba(255, 255, 255, 0.22)", backdropFilter: "blur(2px)", boxShadow: "inset 0 1px 1px rgba(255, 255, 255, 0.4), 0 2px 6px rgba(122, 86, 25, 0.12)" }}>
                      <span className="q-font-button-label q-text-option-label q-uppercase q-font-semibold q-text-secondary" style={{ letterSpacing: "0.18em", color: "#8A6418" }}>
                        {" RASPE AQUI "}
                      </span>
                    </div>
                  </div>
                </div>
                {metade && (
                  <svg className="q-absolute q-inset-0 q-w-full q-h-full q-pointer-events-none q-z-20" fill="none" viewBox="0 0 330 200" xmlns="http://www.w3.org/2000/svg">
                    <path d="M 138 0 C 142 36, 148 42, 145 68 C 143 86, 158 100, 149 132 C 162 164, 160 178, 178 200" filter="blur(0.5px)" stroke="rgba(125, 87, 0, 0.35)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path d="M 139 0 C 143 36, 149 42, 146 68 C 144 86, 159 100, 150 132 C 163 164, 161 178, 179 200" stroke="rgba(255, 255, 255, 0.45)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
                    <circle cx="134" cy="28" fill="#D9A441" opacity="0.85" r="1.8" />
                    <rect fill="#BF8E2F" height="2.2" opacity="0.75" rx="0.6" transform="rotate(25 139 58)" width="2.2" x="139" y="58" />
                    <circle cx="141" cy="96" fill="#E5B858" opacity="0.9" r="1.4" />
                    <rect fill="#D9A441" height="1.8" opacity="0.8" rx="0.6" transform="rotate(-15 144 116)" width="3" x="144" y="116" />
                    <circle cx="154" cy="148" fill="#C99432" opacity="0.85" r="1.6" />
                    <circle cx="159" cy="172" fill="#D9A441" opacity="0.75" r="2" />
                    <rect fill="#BF8E2F" height="2" opacity="0.7" rx="0.5" transform="rotate(40 168 188)" width="2" x="168" y="188" />
                    <circle cx="130" cy="102" fill="#D9A441" opacity="0.6" r="1.1" />
                  </svg>
                )}
              </div>
            </div>
            <div className="q-flex q-justify-center q-items-center q-mt-6">
              <button onClick={revela} className="q-font-option-label q-text-caption q-font-medium q-transition-opacity q-active:opacity-70 q-focus:outline-none" style={{ color: "#426B56", textDecoration: "underline", textUnderlineOffset: "4px", textDecorationThickness: "1px" }} type="button">
                {" Revelar sem raspar "}
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
