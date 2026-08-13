import { Cta } from "./Cta";
import { Glow } from "./Glow";
import { PRECO } from "./constants";

export function Oferta() {
  return (
    <section
      id="ingresso"
      className="relative overflow-hidden bg-cjc-noite-esc py-16 md:py-24 px-6 md:px-20 scroll-mt-6"
    >
      <Glow className="top-[-140px] left-1/2 -translate-x-1/2 w-[560px] h-[460px]" />

      <div className="max-w-[620px] mx-auto relative">
        <div className="rounded-3xl border border-cjc-menta/25 bg-cjc-superficie p-8 md:p-12 text-center shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
          <h2 className="font-cjc-display text-[27px] md:text-[36px] leading-[1.12] font-semibold text-cjc-texto mb-8">
            Sua vaga na sessão{" "}
            <em className="italic text-cjc-menta">Canetas do Jeito Certo</em>
          </h2>

          <div className="font-cjc-display text-[56px] md:text-[76px] leading-none font-semibold text-cjc-menta mb-9">
            {PRECO}
          </div>

          <Cta
            to="checkout"
            variant="menta-grande"
            dataCta="cjc-oferta"
            className="w-full"
          >
            GARANTIR MINHA VAGA
          </Cta>

          <p className="font-sans text-[12px] md:text-[13px] text-cjc-texto-fraco mt-5 leading-[1.6]">
            Confirmação imediata por e-mail e WhatsApp · Garantia de satisfação
          </p>
        </div>
      </div>
    </section>
  );
}
