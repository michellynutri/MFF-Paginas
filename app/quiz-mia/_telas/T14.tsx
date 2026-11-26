// Tela 14 — convertida de scripts/quiz-mia/stitch/14.html (Stitch, projeto "MIA · Quiz de vendas").
import { ROTULO, fechoParcial, tituloParcial } from "../_quiz/regras";
import type { Status, TelaProps } from "../_quiz/tipos";
import { pontos } from "../_quiz/ui";

// Cores de cada cartão pelo nível: grave como na prancheta 14; atenção e sob controle como na 14c.
const COR_CARTAO: Record<Status, { barra: string; seloFundo: string; selo: string; apareceu: string; seNada: string }> = {
  grave: { barra: "#A1312A", seloFundo: "#FDF2F0", selo: "#A1312A", apareceu: "#414845", seNada: "#A1312A" },
  atencao: { barra: "#D9A441", seloFundo: "rgb(253, 243, 222)", selo: "rgb(140, 98, 20)", apareceu: "rgb(86, 101, 77)", seNada: "rgb(140, 98, 20)" },
  ok: { barra: "#2F6B45", seloFundo: "rgb(231, 240, 233)", selo: "rgb(32, 92, 56)", apareceu: "rgb(86, 101, 77)", seNada: "rgb(86, 101, 77)" },
  "?": { barra: "#DDE3DA", seloFundo: "#F2F2F0", selo: "#56654D", apareceu: "rgb(86, 101, 77)", seNada: "rgb(86, 101, 77)" },
};

export default function T14({ q }: TelaProps) {
  const p = pontos(q);
  return (
    <div data-tela="14" className="q-h-full">
      <div data-body className="q-bg-surface q-font-body-md q-text-body-md q-text-on-surface q-antialiased q-min-h-full q-flex q-flex-col q-justify-start q-items-center q-selection:bg-primary-fixed q-selection:text-on-primary-fixed">
        <main className="q-flex q-flex-col q-relative q-w-full q-max-w-[520px] q-min-h-screen q-px-margin pt-safe pb-safe q-bg-surface">
          <div className="q-flex q-flex-col q-w-full q-relative">
            <div className="q-w-full q-pt-2 q-pb-3">
              <div className="q-flex q-items-center q-justify-between q-mb-4">
                <button aria-label="Voltar" onClick={q.voltar} className="q-w-9 q-h-9 q-flex q-items-center q-justify-center q--ml-2 q-rounded-full q-active:bg-surface-container q-transition-colors q-text-primary-container" type="button">
                  <span className="material-symbols-outlined q-text-[24px]">
                    {"chevron_left"}
                  </span>
                </button>
                <div className="q-w-7 q-h-7 q-rounded-full q-shadow-sm q-relative q-overflow-hidden" style={{ background: "radial-gradient(circle at 35% 30%, #a2c2b0 0%, #7D9D8B 42%, #4A6B5B 82%, #203E35 100%)" }}>
                  <div className="q-absolute q-inset-0 q-rounded-full" style={{ background: "radial-gradient(circle at 30% 25%, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0) 60%)" }} />
                </div>
                <div className="q-w-9 q-h-9" />
              </div>
              <div className="q-grid q-grid-cols-4 q-gap-1 q-w-full">
                <div className="q-h-1 q-rounded-full q-bg-secondary-container" />
                <div className="q-h-1 q-rounded-full q-bg-secondary-container" />
                <div className="q-h-1 q-rounded-full q-bg-surface-container-highest" />
                <div className="q-h-1 q-rounded-full q-bg-surface-container-highest" />
              </div>
              <div className="q-flex q-items-center q-justify-between q-mt-2.5">
                <span style={{ fontFamily: "Geist, -apple-system, sans-serif", fontSize: "12px", fontWeight: "500", color: "rgb(86, 101, 77)", textTransform: "none" }}>
                  {"Os avisos do seu corpo"}
                </span>
                <div className="q-flex q-items-center q-gap-1.5">
                  <span className="q-font-mono-sm q-text-mono-sm q-text-on-surface-variant">
                    {"alertas"}
                  </span>
                  <div className="q-flex q-items-center q-gap-1">
                    <span className="q-w-2 q-h-2 q-rounded-full q-inline-block" style={p[0]} />
                    {" "}
                    <span className="q-w-2 q-h-2 q-rounded-full q-inline-block" style={p[1]} />
                    {" "}
                    <span className="q-w-2 q-h-2 q-rounded-full q-inline-block" style={p[2]} />
                  </div>
                </div>
              </div>
            </div>
            <div className="q-flex q-flex-col q-pt-3 q-pb-32">
              <span style={{ fontFamily: "Geist, -apple-system, sans-serif", fontSize: "12px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.12em", color: "rgb(138, 100, 24)" }}>
                {"O QUE AS SUAS RESPOSTAS MOSTRARAM"}
              </span>
              <h1 style={{ fontFamily: "\"EB Garamond\", serif", fontSize: "28px", fontWeight: "600", color: "rgb(32, 62, 53)", lineHeight: "1.15", marginTop: "8px", marginBottom: "12px" }}>
                {tituloParcial(q.alertas)}
              </h1>
              <p style={{ fontFamily: "Geist, -apple-system, sans-serif", fontSize: "16px", color: "rgb(86, 101, 77)", lineHeight: "1.5", marginTop: "0px", marginBottom: "20px" }}>
                {"Cada alerta é um ponto em que o corpo está ficando fraco. É por eles que a memória da gordura traz o peso de volta."}
              </p>
              <div className="q-flex q-flex-col q-gap-3.5">
                {q.alertas.map((a) => {
                  const c = COR_CARTAO[a.status];
                  return (
                    <article key={a.nome} className="q-bg-surface-container-lowest q-rounded-[14px] q-shadow-sm q-relative q-overflow-hidden q-p-4">
                      <div className="q-absolute q-inset-y-0 q-left-0 q-w-[3px]" style={{ backgroundColor: c.barra }} />
                      <div className="q-pl-1" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px", marginBottom: "8px" }}>
                        <h2 style={{ fontFamily: "'Geist', -apple-system, sans-serif", fontSize: "16px", fontWeight: "600", color: "#203E35", flex: "1", minWidth: "0", lineHeight: "1.3", margin: "0" }}>
                          {a.nome}
                        </h2>
                        <span style={{ whiteSpace: "nowrap", flexShrink: "0", fontFamily: "'Geist', -apple-system, sans-serif", fontSize: "12px", fontWeight: "500", padding: "3px 10px", borderRadius: "9999px", backgroundColor: c.seloFundo, color: c.selo }}>
                          {ROTULO[a.status]}
                        </span>
                      </div>
                      <div className="q-pl-1 q-space-y-1.5">
                        <p style={{ fontFamily: "'Geist', -apple-system, sans-serif", fontSize: "14px", lineHeight: "1.45", color: c.apareceu, margin: "0" }}>
                          <strong style={{ fontWeight: "600", color: "#203E35" }}>
                            {"O que apareceu:"}
                          </strong>
                          {" " + a.apareceu + " "}
                        </p>
                        {a.status !== "ok" && a.status !== "?" && (
                          <p style={{ fontFamily: "'Geist', -apple-system, sans-serif", fontSize: "14px", lineHeight: "1.45", color: c.seNada, margin: "0" }}>
                            <strong style={{ fontWeight: "600", color: c.seNada }}>
                              {"Se nada mudar:"}
                            </strong>
                            {" " + a.seNada + " "}
                          </p>
                        )}
                      </div>
                    </article>
                  );
                })}
              </div>
              <p style={{ fontFamily: "Geist, -apple-system, sans-serif", fontSize: "15px", fontWeight: "500", color: "rgb(32, 62, 53)", lineHeight: "1.45", marginTop: "24px", marginBottom: "0px" }}>
                {fechoParcial(q.alertas)}
              </p>
              <p className="q-font-caption q-text-caption q-text-on-surface-variant q-mt-4 q-text-center">
                {" Agora, clique em continuar e fale sobre a sua rotina, para o plano caber nela. "}
              </p>
            </div>
            <div className="q-fixed q-bottom-0 q-left-0 q-right-0 q-z-30 q-flex q-justify-center q-pointer-events-none pb-safe">
              <div className="q-w-full q-max-w-[520px] q-px-margin q-py-3.5 q-bg-surface/95 q-backdrop-blur-md q-pointer-events-auto">
                <button onClick={q.proxima} className="q-w-full q-h-[52px] q-rounded-full q-bg-primary-container q-text-on-primary q-font-button-label q-text-button-label q-flex q-items-center q-justify-center q-shadow-md q-active:scale-[0.99] q-transition-transform" type="button">
                  {" Continuar "}
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
