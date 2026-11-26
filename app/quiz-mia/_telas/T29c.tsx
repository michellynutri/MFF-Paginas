// Tela 29c — convertida de scripts/quiz-mia/stitch/29c.html (Stitch, projeto "MIA · Quiz de vendas").
import type { TelaProps } from "../_quiz/tipos";
import { cupom } from "../_quiz/regras";
import { primeiroNome } from "../_quiz/ui";

// Raspadinha revelada (prancheta 29c).
export default function T29c({ q }: TelaProps) {
  return (
    <div data-tela="29c">
      <div data-body className="q-bg-[#F9FAF7] q-text-[#203E35] q-flex q-justify-center q-min-h-screen">
        <div className="q-w-full q-max-w-[390px] q-min-h-screen q-bg-[#F9FAF7] q-flex q-flex-col q-justify-between q-px-6 q-pt-10 q-pb-8 q-relative">
          <div className="q-flex q-flex-col q-items-center q-w-full">
            <div className="q-flex q-justify-center q-mb-9">
              <div className="mia-sphere" />
            </div>
            <div className="q-text-center q-w-full q-max-w-[340px] q-mb-8">
              <h1 className="q-font-serif q-text-[28px] q-leading-[1.2] q-font-semibold q-text-[#203E35] q-mb-2 q-tracking-tight">
                {`${primeiroNome(q.r.nome) || "Ana"}, quem chega até aqui libera um desconto.`}
              </h1>
              <p className="q-text-[15px] q-text-[#56654D] q-font-normal q-leading-relaxed">
                {" Raspe para ver o seu. "}
              </p>
            </div>
            <div className="q-w-[330px] q-h-[200px] q-rounded-[20px] q-bg-white q-border q-border-[#203E35]/[0.06] q-shadow-[0_10px_30px_rgba(32,62,53,0.08)] q-flex q-flex-col q-items-center q-justify-center q-text-center q-px-6 q-relative q-mb-6">
              <span className="q-text-[14px] q-text-[#56654D] q-font-normal q-mb-1.5">
                {" Você liberou "}
              </span>
              <h2 className="q-font-sans q-font-semibold q-text-[34px] q-leading-tight q-text-[#203E35] q-tracking-tight q-mb-1.5">
                {" até 62% de desconto "}
              </h2>
              <span className="q-text-[14px] q-text-[#56654D] q-font-normal">
                {" no seu plano da MIA "}
              </span>
            </div>
            <div className="q-inline-flex q-items-center q-justify-center q-px-4 q-py-2 q-rounded-full q-bg-[#FBF1DC] q-border-[1.5px] q-border-dashed q-border-[#D9A441]">
              <span className="q-font-mono q-font-semibold q-text-[13px] q-text-[#8A6418] q-tracking-wide">
                {`cupom ${cupom(q.r.nome)} aplicado`}
              </span>
            </div>
          </div>
          <div className="q-w-full q-pt-8">
            <button type="button" onClick={q.proxima} className="q-w-full q-h-[52px] q-bg-[#203E35] q-hover:bg-[#18312a] q-active:scale-[0.99] q-transition-all q-text-white q-font-sans q-font-semibold q-text-[16px] q-rounded-full q-flex q-items-center q-justify-center q-shadow-[0_4px_16px_rgba(32,62,53,0.2)]">
              {" Ver o meu plano com desconto "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
