// Tela 16 — convertida de scripts/quiz-mia/stitch/16.html (Stitch, projeto "MIA · Quiz de vendas").
import type { TelaProps } from "../_quiz/tipos";
import { pontos } from "../_quiz/ui";

// foto de cada alimento (mesmas fotos do app da MIA; arroz e feijão e frutas geradas no mesmo estilo)
const OPCOES: { nome: string; foto: string }[] = [
  { nome: "Ovos", foto: "ovos" },
  { nome: "Frango", foto: "frango" },
  { nome: "Carne", foto: "carne" },
  { nome: "Peixe", foto: "peixe" },
  { nome: "Queijo", foto: "queijo" },
  { nome: "Arroz e feijão", foto: "arroz-feijao" },
  { nome: "Legumes", foto: "legumes" },
  { nome: "Frutas", foto: "frutas" },
];

const Foto = ({ nome }: { nome: string }) => (
  <img
    src={`/images/quiz-mia/alimentos/${nome}.webp`}
    alt=""
    width={48}
    height={48}
    style={{ width: 48, height: 48, borderRadius: 9999, objectFit: "cover", boxShadow: "0 1px 3px rgba(32,62,53,.12)" }}
  />
);

export default function T16({ q }: TelaProps) {
  const p = pontos(q);
  const n = (q.r.gosta ?? []).length;
  return (
    <div data-tela="16" className="q-h-full">
      <div data-body className="q-bg-surface q-text-on-surface q-antialiased q-flex q-flex-col q-min-h-screen q-selection:bg-secondary-fixed q-selection:text-on-secondary-fixed">
        <main className="q-flex-1 q-flex q-flex-col q-w-full q-max-w-[520px] q-mx-auto q-bg-surface pt-safe pb-safe">
          <div className="q-flex q-flex-col q-w-full q-max-w-[390px] q-mx-auto q-px-5 q-pb-8 q-relative q-select-none">
            <div className="q-flex q-items-center q-justify-between q-pt-2 q-pb-4">
              <button aria-label="Voltar" onClick={q.voltar} className="q-w-10 q-h-10 q--ml-2 q-flex q-items-center q-justify-center q-text-primary-container q-active:opacity-60 q-transition-opacity" type="button">
                <span className="material-symbols-outlined q-text-[24px]">
                  {"arrow_back_ios_new"}
                </span>
              </button>
              <div className="q-w-7 q-h-7 q-rounded-full q-shadow-sm q-relative q-overflow-hidden" style={{ background: "radial-gradient(circle at 35% 30%, #b8d4c5 0%, #46645a 55%, #1b352c 100%)", boxShadow: "0 2px 6px rgba(32, 62, 53, 0.25)" }}>
                <div className="q-absolute q-inset-0 q-rounded-full q-bg-gradient-to-tr q-from-transparent q-via-white/20 q-to-white/40 q-opacity-70 q-pointer-events-none" />
              </div>
              <div className="q-w-10 q-h-10 q--mr-2" />
            </div>
            <div className="q-grid q-grid-cols-4 q-gap-1.5 q-w-full q-mb-2">
              <div className="q-h-1 q-bg-[#E5E7EB] q-rounded-full q-overflow-hidden">
                <div className="q-h-full q-bg-secondary q-w-full q-rounded-full" />
              </div>
              <div className="q-h-1 q-bg-[#E5E7EB] q-rounded-full q-overflow-hidden">
                <div className="q-h-full q-bg-secondary q-w-full q-rounded-full" />
              </div>
              <div className="q-h-1 q-bg-[#E5E7EB] q-rounded-full q-overflow-hidden">
                <div className="q-h-full q-bg-secondary q-w-[32%] q-rounded-full" />
              </div>
              <div className="q-h-1 q-bg-[#E5E7EB] q-rounded-full q-overflow-hidden">
                <div className="q-h-full q-bg-secondary q-w-0 q-rounded-full" />
              </div>
            </div>
            <div className="q-flex q-items-center q-justify-between q-mb-6">
              <span className="q-font-['Geist',sans-serif] q-text-[12px] q-font-medium q-text-[#56654D] q-tracking-normal">
                {"O que cabe no seu dia"}
              </span>
              <div className="q-flex q-items-center q-gap-1.5">
                <span className="q-font-['Geist',sans-serif] q-text-[12px] q-font-medium q-text-[#56654D]">
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
            <div className="q-flex q-flex-col q-gap-1.5 q-mt-5 q-mb-6">
              <h1 className="q-font-['Geist',sans-serif] q-text-[24px] q-font-semibold q-text-[#203E35] q-leading-[1.25] q-tracking-[-0.02em]">
                {" O que não pode faltar no seu prato? "}
              </h1>
              <p className="q-font-['Geist',sans-serif] q-text-[14px] q-text-[#56654D] q-leading-[1.45]">
                {" O seu plano é montado com o que você gosta de comer. "}
              </p>
            </div>
            <div className="q-grid q-grid-cols-2 q-gap-3 q-mb-24" id="food-grid">
              {OPCOES.map((o, i) => {
                const marcado = (q.r.gosta ?? []).includes(i);
                return marcado ? (
                  <div key={i} aria-checked="true" tabIndex={0} onClick={() => q.alterna("gosta", i)} className="food-tile q-cursor-pointer q-p-3 q-rounded-[14px] q-flex q-flex-col q-justify-between q-transition-all q-bg-[#FBF1DC] q-shadow-sm q-relative" data-selected="true" role="checkbox" style={{ boxShadow: "inset 0 0 0 2px #203E35", height: 104 }}>
                    <div className="q-flex q-items-start q-justify-between q-w-full">
                      <Foto nome={o.foto} />
                      <div className="checkbox-indicator q-w-[22px] q-h-[22px] q-rounded-[6px] q-bg-secondary q-flex q-items-center q-justify-center q-transition-colors">
                        <span className="material-symbols-outlined q-text-[15px] q-text-white q-select-none">
                          {"check"}
                        </span>
                      </div>
                    </div>
                    <span className="q-font-option-label q-text-option-label q-text-primary-container q-font-medium">
                      {o.nome}
                    </span>
                  </div>
                ) : (
                  <div key={i} aria-checked="false" tabIndex={0} onClick={() => q.alterna("gosta", i)} className="food-tile q-cursor-pointer q-p-3 q-rounded-[14px] q-flex q-flex-col q-justify-between q-transition-all q-bg-surface-container-lowest q-shadow-sm q-relative" data-selected="false" role="checkbox" style={{ boxShadow: "inset 0 0 0 1px #E5E7EB", height: 104 }}>
                    <div className="q-flex q-items-start q-justify-between q-w-full">
                      <Foto nome={o.foto} />
                      <div className="checkbox-indicator q-w-[22px] q-h-[22px] q-rounded-[6px] q-bg-surface-container-lowest q-transition-colors" style={{ boxShadow: "inset 0 0 0 1.5px #c1c8c4" }} />
                    </div>
                    <span className="q-font-option-label q-text-option-label q-text-primary-container q-font-medium">
                      {o.nome}
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="q-fixed q-bottom-0 q-left-0 q-right-0 q-z-30 q-pointer-events-none">
              <div className="q-max-w-[390px] q-mx-auto q-px-5 q-pb-6 q-pt-6 q-pointer-events-auto q-bg-gradient-to-t q-from-surface q-via-surface/95 q-to-transparent">
                <button className="q-w-full q-h-12 q-bg-primary-container q-text-on-primary q-font-button-label q-text-button-label q-rounded-full q-flex q-items-center q-justify-center q-shadow-md q-active:opacity-90 q-active:scale-[0.99] q-transition-all q-disabled:opacity-40 q-disabled:cursor-not-allowed" id="cta-button" type="button" disabled={n === 0} onClick={q.proxima}>
                  {n ? ` Continuar · ${n} ${n > 1 ? "marcados" : "marcado"} ` : " Continuar "}
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
