import { X, Check } from "lucide-react"
import { CaptureForm } from "@/components/capture-form"
import { FloatingCTA } from "@/components/floating-cta"
import { Logo } from "@/components/logo"

interface PageContentV2Props {
  headline: string
  subheadline: string
}

export default function PageContentV2({ headline, subheadline }: PageContentV2Props) {
  return (
    <main className="min-h-screen bg-creme">

      {/* ── SEÇÃO 1: HERO ─────────────────────────────────────────────────── */}
      <section id="hero" className="relative overflow-hidden bg-creme py-12 lg:py-20">
        <div className="relative mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-[1fr_400px] lg:items-start">
          <div className="flex flex-col">
            <div className="animate-fade-up mb-10">
              <Logo />
            </div>
            <h1 className="animate-fade-up animate-delay-100 font-serif text-4xl font-bold italic leading-[1.1] tracking-tight text-marrom lg:text-[58px]">
              {headline}
            </h1>
            <p className="animate-fade-up animate-delay-200 mt-5 max-w-lg font-sans text-lg leading-relaxed text-verde-esc">
              {subheadline}
            </p>
            <p className="animate-fade-up animate-delay-250 mt-3 font-sans text-[15px] font-medium text-texto/70">
              Evento gratuito e ao vivo com a nutricionista Michelly Silveira
            </p>
            <div className="animate-fade-up animate-delay-300 mt-5">
              <span className="inline-flex items-center rounded-full border-[1.5px] border-verde-esc px-4 py-2 font-sans text-[13px] font-semibold uppercase tracking-wider text-verde-esc">
                26 DE MARÇO &middot; 20H &middot; GRATUITO
              </span>
            </div>
            <div className="animate-fade-up animate-delay-400 mt-10 lg:hidden">
              <CaptureForm />
            </div>
          </div>
          <div className="animate-fade-up animate-delay-400 sticky top-8 hidden lg:block">
            <CaptureForm />
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 2: PRA QUEM É / NÃO É ────────────────────────────────────── */}
      <section id="identificacao" className="bg-branco py-20">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-center font-serif text-2xl font-bold leading-[1.2] text-marrom md:text-4xl">
            Esse evento é pra você que...
          </h2>
          
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {/* Coluna: PRA QUEM É */}
            <div className="rounded-2xl border border-verde-vita/30 bg-verde-vita/5 p-8">
              <div className="mb-6 flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-verde-vita" />
                  <p className="font-sans text-base leading-[1.7] text-texto">
                    Quer emagrecer e ainda sair do tratamento mais saudável do que entrou
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-verde-vita" />
                  <p className="font-sans text-base leading-[1.7] text-texto">
                    Quer ter disposição e energia de verdade — não só ver o número na balança cair
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-verde-vita" />
                  <p className="font-sans text-base leading-[1.7] text-texto">
                    Quer preservar o músculo e chegar no fim com o corpo que sempre imaginou
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-verde-vita" />
                  <p className="font-sans text-base leading-[1.7] text-texto">
                    Quer usar a menor dose possível e ainda ter resultados melhores
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-verde-vita" />
                  <p className="font-sans text-base leading-[1.7] text-texto">
                    Quer um protocolo claro, sem achismos, feito por quem entende do corpo feminino
                  </p>
                </div>
              </div>
            </div>

            {/* Coluna: NÃO É PRA QUEM */}
            <div className="rounded-2xl border border-red-200 bg-red-50/50 p-8">
              <h3 className="mb-6 font-sans text-sm font-semibold uppercase tracking-wider text-red-600">
                Mas não é pra você que...
              </h3>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <X className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                  <p className="font-sans text-base leading-[1.7] text-texto">
                    Acha que só a caneta já resolve tudo
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <X className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                  <p className="font-sans text-base leading-[1.7] text-texto">
                    Quer resultado sem nenhuma mudança de hábito
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <X className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                  <p className="font-sans text-base leading-[1.7] text-texto">
                    Está procurando uma solução mágica e imediata
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <X className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                  <p className="font-sans text-base leading-[1.7] text-texto">
                    Não está disposta a aprender como o próprio corpo funciona
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Botão CTA */}
          <div className="mt-12 flex justify-center">
            <a
              href="#hero"
              className="inline-flex min-h-[52px] items-center gap-2 rounded-full bg-verde-vita px-12 py-4 font-sans text-base font-bold uppercase tracking-wide text-texto shadow-vita transition-all hover:scale-[1.02] hover:brightness-105"
            >
              Quero me inscrever agora
            </a>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 3: QUEM É MICHELLY ──────────────────────────────────────── */}
      <section id="michelly" className="bg-creme py-20">
        <div className="mx-auto grid max-w-5xl gap-12 px-5 lg:grid-cols-[40%_60%] lg:items-center">
          <div className="relative mx-auto w-full max-w-sm lg:mx-0">
            <img
              src="/images/michelly.jpg"
              alt="Foto da nutricionista Michelly Silveira"
              className="aspect-[3/4] w-full rounded-2xl object-cover object-top"
            />
            <div className="absolute bottom-4 left-4 rounded-xl bg-marrom px-4 py-3 shadow-md">
              <span className="block font-serif text-[22px] font-bold text-white">13 anos</span>
              <span className="mt-0.5 block font-sans text-xs text-white/70">de consultório</span>
            </div>
          </div>
          <div>
            <p className="mb-2 font-sans text-xs font-medium uppercase tracking-wider text-verde-esc">
              QUEM VAI TE GUIAR NESSE EVENTO
            </p>
            <h2 className="mb-1 font-serif text-4xl font-bold text-marrom">Michelly Silveira</h2>
            <p className="mb-5 font-sans text-[15px] font-medium text-verde-esc">Nutricionista Clínica | @michellynutri</p>
            <hr className="mb-6 h-0.5 w-12 border-0 bg-borda" />
            <p className="mb-4 font-sans text-[17px] leading-[1.7] text-texto">
              Eu não virei nutricionista por acaso. Eu virei porque eu precisei — eu tive obesidade e sei o que é lutar contra o próprio corpo.
            </p>
            <p className="mb-6 font-sans text-[17px] leading-[1.7] text-texto">
              São 13 anos de consultório especializado em saúde feminina. Quando as canetas chegaram, eu vi um padrão se repetir toda semana: mulheres emagrecendo na balança e se destruindo no processo — não por falta de esforço, mas por falta de protocolo nutricional.
            </p>
            <blockquote className="border-l-4 border-verde-vita pl-5 font-sans text-[17px] font-medium italic leading-[1.6] text-verde-esc">
              &ldquo;É a primeira vez que o Protocolo de Inteligência Metabólica Feminina sai do consultório.&rdquo;
            </blockquote>
            
            {/* Botão CTA */}
            <div className="mt-8">
              <a
                href="#hero"
                className="inline-flex min-h-[52px] items-center gap-2 rounded-full bg-verde-vita px-12 py-4 font-sans text-base font-bold uppercase tracking-wide text-texto shadow-vita transition-all hover:scale-[1.02] hover:brightness-105"
              >
                Quero me inscrever agora
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── RODAPÉ ────────────────────────────────────────────────────────── */}
      <footer className="bg-marrom py-8">
        <div className="mx-auto max-w-6xl px-5 text-center">
          <Logo white small />
          <p className="mt-3 font-sans text-xs leading-relaxed text-white/60">
            Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho de uma estratégia não deve ser interpretada como uma garantia de resultados.
          </p>
          <p className="mt-2 font-sans text-xs text-white/50">
            &copy; {new Date().getFullYear()} Blindagem. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* ── FLOATING CTA ──────────────────────────────────────────────────── */}
      <FloatingCTA />
    </main>
  )
}
