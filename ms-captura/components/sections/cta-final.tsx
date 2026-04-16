import { Logo } from "@/components/logo"
import { CaptureForm } from "@/components/capture-form"

export function CTAFinalSection() {
  return (
    <section
      id="inscricao"
      className="border-t-4 border-t-verde-vita bg-creme py-24"
    >
      <div className="mx-auto flex max-w-xl flex-col items-center px-5 text-center">
        {/* Logo */}
        <div className="mb-10">
          <Logo />
        </div>

        <h2 className="font-serif text-[34px] font-bold text-marrom">
          Garanta sua vaga agora
        </h2>

        {/* Pills de info — inline */}
        <div className="mt-4 mb-10 flex flex-wrap justify-center gap-3">
          <span className="inline-flex items-center rounded-full border border-verde-esc/20 bg-verde-esc/10 px-4 py-2 font-sans text-sm font-medium text-verde-esc">
            26 de Marco
          </span>
          <span className="inline-flex items-center rounded-full border border-verde-esc/20 bg-verde-esc/10 px-4 py-2 font-sans text-sm font-medium text-verde-esc">
            20h
          </span>
          <span className="inline-flex items-center rounded-full border border-verde-esc/20 bg-verde-esc/10 px-4 py-2 font-sans text-sm font-medium text-verde-esc">
            Online
          </span>
          <span className="inline-flex items-center rounded-full border border-verde-esc/20 bg-verde-esc/10 px-4 py-2 font-sans text-sm font-medium text-verde-esc">
            Gratuito
          </span>
        </div>

        {/* Form card */}
        <div className="w-full rounded-2xl border border-borda bg-branco p-8 shadow-card">
          <CaptureForm
            formId="form-final"
            buttonText="QUERO MINHA VAGA NO BLINDAGEM METABOLICO"
          />
        </div>
      </div>
    </section>
  )
}
