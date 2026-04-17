import { Logo } from "@/components/logo"
import { CaptureForm } from "@/components/capture-form"

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-creme py-12 lg:py-20"
    >
      <div className="relative mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-[1fr_400px] lg:items-start">
        {/* Coluna esquerda — copy */}
        <div className="flex flex-col">
          {/* Logo */}
          <div className="animate-fade-up mb-10">
            <Logo />
          </div>

          {/* H1 headline */}
          <h1 className="animate-fade-up animate-delay-100 font-serif text-4xl font-black italic leading-[1.1] tracking-tight text-marrom lg:text-[58px]">
            Voce esta investindo<br />
            milhares de reais<br />
            na caneta.
          </h1>

          {/* Subheadline */}
          <p className="animate-fade-up animate-delay-200 mt-5 max-w-lg font-sans text-lg font-normal leading-relaxed text-verde-esc">
            Mas ninguem te ensinou como a nutricao protege seu corpo — e garante que voce nao engorde tudo de volta quando parar.
          </p>

          {/* Linha de evento */}
          <p className="animate-fade-up animate-delay-250 mt-3 font-sans text-[15px] font-medium text-texto/70">
            Evento gratuito e ao vivo com a nutricionista Michelly Silveira
          </p>

          {/* Badge de data — ABAIXO da linha de evento */}
          <div className="animate-fade-up animate-delay-300 mt-5">
            <span className="inline-flex items-center rounded-full border-[1.5px] border-verde-esc bg-transparent px-4 py-2 font-sans text-[13px] font-semibold uppercase tracking-wider text-verde-esc">
              26 DE MARCO  &middot;  20H  &middot;  GRATUITO
            </span>
          </div>

          {/* Mobile form */}
          <div className="animate-fade-up animate-delay-400 mt-10 rounded-2xl border border-borda bg-branco p-8 shadow-card lg:hidden">
            <CaptureForm formId="form-hero-mobile" />
          </div>
        </div>

        {/* Coluna direita — formulario (desktop only) */}
        <div className="animate-fade-up animate-delay-400 sticky top-8 hidden rounded-2xl border border-borda bg-branco p-8 shadow-card lg:block">
          <CaptureForm formId="form-hero-desktop" />
        </div>
      </div>
    </section>
  )
}
