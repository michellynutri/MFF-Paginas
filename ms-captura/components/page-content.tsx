import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { TrendingDown, AlertTriangle, RotateCcw, Leaf, Shield, Repeat, X } from "lucide-react"
import { CaptureForm } from "@/components/capture-form"
import { FloatingCTA } from "@/components/floating-cta"
import { Logo } from "@/components/logo"

interface PageContentProps {
  headline: string
  subheadline: string
}

export default function PageContent({ headline, subheadline }: PageContentProps) {
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

      {/* ── SEÇÃO 2: IDENTIFICAÇÃO ────────────────────────────────────────── */}
      <section id="identificacao" className="bg-branco py-20">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-center font-serif text-2xl font-bold leading-[1.2] text-marrom md:text-4xl">
            Você está nessa situação?
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border-t-4 border-t-red-600 bg-branco p-6 shadow-card transition-all hover:-translate-y-1">
              <div className="mb-4 h-3 w-3 rounded-full bg-red-600" />
              <p className="font-sans text-base leading-[1.7] text-texto">
                Está usando caneta há alguns meses, emagreceu — mas o cabelo está caindo no chuveiro em mechas, o intestino travou, a flacidez apareceu onde você esperava firmeza. Fica com a sensação de que está gastando uma fortuna e destruindo o corpo ao mesmo tempo.
              </p>
            </div>
            <div className="rounded-2xl border-t-4 border-t-amber-600 bg-branco p-6 shadow-card transition-all hover:-translate-y-1">
              <div className="mb-4 h-3 w-3 rounded-full bg-amber-600" />
              <p className="font-sans text-base leading-[1.7] text-texto">
                Quer usar caneta, seu médico já até indicou — mas você passou horas pesquisando na internet, viu relatos assustadores, e agora está mais confusa do que antes. Quer emagrecer, mas não quer trocar o sobrepeso por queda de cabelo ou dependência da medicação.
              </p>
            </div>
            <div className="rounded-2xl border-t-4 border-t-verde-vita bg-branco p-6 shadow-card transition-all hover:-translate-y-1">
              <div className="mb-4 h-3 w-3 rounded-full bg-verde-vita" />
              <p className="font-sans text-base leading-[1.7] text-texto">
                Começou a usar caneta há pouco tempo e está bem — mas vê o que acontece com outras mulheres depois de alguns meses e quer evitar cada um desses erros antes que seja tarde para prevenir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 3: O PROBLEMA ───────────────────────────────────────────── */}
      <section className="bg-creme py-20">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <p className="mb-3 font-sans text-xs font-medium uppercase tracking-wider text-verde-esc">
            A VERDADE QUE NENHUM MÉDICO TE CONTOU
          </p>
          <h2 className="font-serif text-2xl font-bold leading-[1.2] text-marrom md:text-4xl">
            As canetas funcionam.<br />Mas ninguém te deu o manual.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-sans text-[17px] leading-[1.7] text-texto">
            As canetas emagrecedoras foram lançadas em velocidade recorde — sem um protocolo nutricional que proteja o metabolismo feminino. O médico prescreve. Você compra. Você usa. Mas ninguém te ensina como alimentar seu corpo enquanto ele passa por essa transformação.
          </p>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <div className="flex flex-col items-center gap-4 rounded-2xl border border-borda bg-branco p-6 text-center shadow-sm transition-all hover:-translate-y-1">
              <div className="inline-block rounded-xl bg-creme p-3">
                <TrendingDown className="h-7 w-7 text-marrom" />
              </div>
              <h3 className="font-sans text-[17px] font-semibold text-marrom">Perda de massa magra</h3>
              <p className="font-sans text-[15px] leading-[1.6] text-texto/70">
                Você perde gordura e músculo juntos — e fica com a flacidez que não esperava
              </p>
            </div>
            <div className="flex flex-col items-center gap-4 rounded-2xl border border-borda bg-branco p-6 text-center shadow-sm transition-all hover:-translate-y-1">
              <div className="inline-block rounded-xl bg-creme p-3">
                <AlertTriangle className="h-7 w-7 text-marrom" />
              </div>
              <h3 className="font-sans text-[17px] font-semibold text-marrom">Deficiências nutricionais</h3>
              <p className="font-sans text-[15px] leading-[1.6] text-texto/70">
                Cabelo cai, energia some, hormônios desregulam. Tudo por falta de protocolo
              </p>
            </div>
            <div className="flex flex-col items-center gap-4 rounded-2xl border border-borda bg-branco p-6 text-center shadow-sm transition-all hover:-translate-y-1">
              <div className="inline-block rounded-xl bg-creme p-3">
                <RotateCcw className="h-7 w-7 text-marrom" />
              </div>
              <h3 className="font-sans text-[17px] font-semibold text-marrom">Efeito rebote garantido</h3>
              <p className="font-sans text-[15px] leading-[1.6] text-texto/70">
                Seu metabolismo não aprende. Quando você para a caneta, engorda tudo de volta
              </p>
            </div>
          </div>
          <p className="mx-auto mt-12 max-w-xl font-sans text-lg font-semibold italic text-verde-esc">
            Este evento é o manual que faltava.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 4: O QUE VOCÊ VAI APRENDER ──────────────────────────────── */}
      <section id="aprender" className="bg-verde-esc py-20">
        <div className="mx-auto max-w-5xl px-5">
          <p className="font-sans text-xs font-medium uppercase tracking-wider text-verde-vita/80">
            O QUE VOCÊ VAI APRENDER NO BLINDAGEM
          </p>
          <h2 className="mt-3 max-w-2xl font-serif text-2xl font-bold leading-[1.2] text-white md:text-4xl">
            Saia do evento sabendo exatamente o que fazer — não apenas o que está errado
          </h2>
          <div className="mt-10 flex flex-col gap-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
              <div className="mb-4 inline-block rounded-lg bg-verde-vita/10 p-2.5">
                <Leaf className="h-[22px] w-[22px] text-verde-vita" />
              </div>
              <h3 className="font-sans text-[17px] font-semibold text-white">Por que os efeitos colaterais acontecem</h3>
              <p className="mt-2 font-sans text-[15px] leading-[1.6] text-white/70">
                E como a nutrição reverte e previne cada um deles — sem sacrificar o cabelo, a massa magra e a saúde hormonal
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
              <div className="mb-4 inline-block rounded-lg bg-verde-vita/10 p-2.5">
                <Shield className="h-[22px] w-[22px] text-verde-vita" />
              </div>
              <h3 className="font-sans text-[17px] font-semibold text-white">O Protocolo de Inteligência Metabólica Feminina</h3>
              <p className="mt-2 font-sans text-[15px] leading-[1.6] text-white/70">
                Os 6 pilares que protegem seu corpo durante todo o ciclo — emagreça mais rápido e chegue no fim do tratamento mais saudável
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
              <div className="mb-4 inline-block rounded-lg bg-verde-vita/10 p-2.5">
                <Repeat className="h-[22px] w-[22px] text-verde-vita" />
              </div>
              <h3 className="font-sans text-[17px] font-semibold text-white">Como preparar a saída da caneta</h3>
              <p className="mt-2 font-sans text-[15px] leading-[1.6] text-white/70">
                Para que seu metabolismo aprenda a funcionar sozinho — e você nunca precise escolher entre dependência ou efeito rebote
              </p>
            </div>
          </div>
          <div className="mx-auto mt-14 max-w-lg rounded-2xl bg-branco p-5 shadow-card">
            <CaptureForm />
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 5: QUEM É MICHELLY ──────────────────────────────────────── */}
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
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 6: ESTATÍSTICAS ─────────────────────────────────────────── */}
      <section className="bg-branco py-20">
        <div className="mx-auto max-w-5xl px-5">
          <p className="font-sans text-xs font-medium uppercase tracking-wider text-verde-esc">
            VOCÊ NÃO ESTÁ SOZINHA NESSA
          </p>
          <h2 className="mt-3 font-serif text-2xl font-bold leading-[1.2] text-marrom md:text-4xl">
            O Brasil é o epicentro desse problema
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border-l-4 border-l-verde-vita bg-creme p-7">
              <p className="font-serif text-[56px] font-bold leading-none text-marrom">19%</p>
              <p className="mt-2 font-sans text-[15px] text-texto/80">dos brasileiros já usaram Ozempic ou similares</p>
            </div>
            <div className="rounded-2xl border-l-4 border-l-verde-vita bg-creme p-7">
              <p className="font-serif text-[56px] font-bold leading-none text-marrom">2&ordm;</p>
              <p className="mt-2 font-sans text-[15px] text-texto/80">país que mais pesquisa canetas emagrecedoras no mundo</p>
            </div>
            <div className="rounded-2xl border-l-4 border-l-verde-vita bg-creme p-7">
              <p className="font-serif text-[56px] font-bold leading-none text-marrom">70%</p>
              <p className="mt-2 font-sans text-[15px] text-texto/80">das usuárias recuperam o peso ao parar — por falta do protocolo de transição</p>
            </div>
          </div>
          <div className="mx-auto mt-14 max-w-2xl rounded-2xl bg-verde-esc p-8 text-center">
            <p className="font-sans text-[17px] font-medium leading-[1.65] text-white">
              Até hoje: zero protocolos acessíveis de nutrição específica para canetas existem no Brasil. A Blindagem é a primeira resposta clínica e estruturada para esse vácuo.
            </p>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 7: URGÊNCIA ─────────────────────────────────────────────── */}
      <section className="bg-marrom py-20">
        <div className="mx-auto max-w-3xl px-5">
          <p className="mb-3 font-sans text-xs font-medium uppercase tracking-wider text-verde-vita">
            POR QUE VOCÊ NÃO PODE PERDER ESSE EVENTO
          </p>
          <h2 className="mb-10 max-w-2xl font-serif text-2xl font-bold leading-[1.15] text-white md:text-[40px]">
            Cada semana sem o protocolo é mais uma semana de desequilíbrio que fica mais difícil de reverter.
          </h2>
          <div className="mb-10 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <X className="h-4 w-4 shrink-0 text-red-400" />
              <span className="font-sans text-[17px] text-white/90">Mais queda de cabelo</span>
            </div>
            <div className="flex items-center gap-3">
              <X className="h-4 w-4 shrink-0 text-red-400" />
              <span className="font-sans text-[17px] text-white/90">Mais massa magra perdida</span>
            </div>
            <div className="flex items-center gap-3">
              <X className="h-4 w-4 shrink-0 text-red-400" />
              <span className="font-sans text-[17px] text-white/90">Mais flacidez</span>
            </div>
            <div className="flex items-center gap-3">
              <X className="h-4 w-4 shrink-0 text-red-400" />
              <span className="font-sans text-[17px] text-white/90">Mais difícil de reverter depois</span>
            </div>
          </div>
          <hr className="mb-10 border-white/20" />
          <p className="mb-10 text-center font-sans text-[17px] font-semibold text-white">
            O evento não fica gravado. As vagas são limitadas.
          </p>
          <div className="flex justify-center">
            <a
              href="#inscricao"
              className="inline-flex min-h-[52px] items-center gap-2 rounded-full bg-verde-vita px-12 py-5 font-sans text-base font-bold uppercase tracking-wide text-texto shadow-vita transition-all hover:scale-[1.02] hover:brightness-105"
            >
              &#8594; GARANTIR MINHA VAGA — 26 DE MARÇO, 20H
            </a>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 8: FAQ ──────────────────────────────────────────────────── */}
      <section id="faq" className="bg-creme py-20">
        <div className="mx-auto max-w-2xl px-5">
          <h2 className="text-center font-serif text-2xl font-bold leading-[1.2] text-marrom md:text-4xl">
            Perguntas frequentes
          </h2>
          <Accordion type="single" collapsible className="mt-10">
            <AccordionItem value="faq-0" className="border-b border-borda">
              <AccordionTrigger className="py-5 font-sans text-[17px] font-semibold text-marrom hover:no-underline">
                É realmente grátis?
              </AccordionTrigger>
              <AccordionContent className="pb-5 font-sans text-base leading-[1.65] text-texto">
                Sim. 100% gratuito. Sem surpresas.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-1" className="border-b border-borda">
              <AccordionTrigger className="py-5 font-sans text-[17px] font-semibold text-marrom hover:no-underline">
                O evento fica gravado?
              </AccordionTrigger>
              <AccordionContent className="pb-5 font-sans text-base leading-[1.65] text-texto">
                Não. O ao vivo acontece uma única vez. Quem não assistiu ao vivo perde o conteúdo.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-2" className="border-b border-borda">
              <AccordionTrigger className="py-5 font-sans text-[17px] font-semibold text-marrom hover:no-underline">
                Quanto tempo dura?
              </AccordionTrigger>
              <AccordionContent className="pb-5 font-sans text-base leading-[1.65] text-texto">
                90 a 120 minutos.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-3" className="border-b border-borda">
              <AccordionTrigger className="py-5 font-sans text-[17px] font-semibold text-marrom hover:no-underline">
                Vou receber algo antes do evento?
              </AccordionTrigger>
              <AccordionContent className="pb-5 font-sans text-base leading-[1.65] text-texto">
                Sim. Nos dias anteriores você vai receber 3 vídeos preparatórios com conteúdo da Michelly diretamente no seu e-mail e no grupo de WhatsApp.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-4" className="border-b border-borda">
              <AccordionTrigger className="py-5 font-sans text-[17px] font-semibold text-marrom hover:no-underline">
                Para quem é esse evento?
              </AccordionTrigger>
              <AccordionContent className="pb-5 font-sans text-base leading-[1.65] text-texto">
                Para mulheres que usam, querem usar ou começaram a usar canetas emagrecedoras e querem entender como a nutrição protege o corpo, potencializa os resultados e garante a manutenção depois que o tratamento acaba.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-5" className="border-b border-borda">
              <AccordionTrigger className="py-5 font-sans text-[17px] font-semibold text-marrom hover:no-underline">
                Preciso entender de nutrição para acompanhar?
              </AccordionTrigger>
              <AccordionContent className="pb-5 font-sans text-base leading-[1.65] text-texto">
                Não. O conteúdo é clínico, mas aplicável. Você sai com clareza do que fazer — não com teoria.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* ── SEÇÃO 9: CTA FINAL ────────────────────────────────────────────── */}
      <section id="inscricao" className="border-t-4 border-t-verde-vita bg-creme py-24">
        <div className="mx-auto flex max-w-xl flex-col items-center px-5 text-center">
          <div className="mb-10">
            <Logo />
          </div>
          <h2 className="font-serif text-[34px] font-bold text-marrom">Garanta sua vaga agora</h2>
          <div className="mt-4 mb-10 flex flex-wrap justify-center gap-3">
            <span className="inline-flex items-center rounded-full border border-verde-esc/20 bg-verde-esc/10 px-4 py-2 font-sans text-sm font-medium text-verde-esc">26 de Março</span>
            <span className="inline-flex items-center rounded-full border border-verde-esc/20 bg-verde-esc/10 px-4 py-2 font-sans text-sm font-medium text-verde-esc">20h</span>
            <span className="inline-flex items-center rounded-full border border-verde-esc/20 bg-verde-esc/10 px-4 py-2 font-sans text-sm font-medium text-verde-esc">Online</span>
            <span className="inline-flex items-center rounded-full border border-verde-esc/20 bg-verde-esc/10 px-4 py-2 font-sans text-sm font-medium text-verde-esc">Gratuito</span>
          </div>
          <div className="w-full rounded-2xl border border-borda bg-branco p-5 shadow-card">
            <CaptureForm />
          </div>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────────���─────────── */}
      <footer className="bg-marrom py-8 text-center">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-3 px-5">
          <Logo white small />
          <p className="font-sans text-[13px] text-white/50">
            &copy; 2026 Michelly Silveira | Todos os direitos reservados
          </p>
        </div>
      </footer>

      {/* ── Floating CTA (mobile) ─────────────────────────────────────────── */}
      <FloatingCTA />

    </main>
  )
}
