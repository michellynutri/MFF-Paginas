"use client"

import { useEffect, useState } from "react"
import { CheckCircle, Mail, MessageCircle, Calendar, ArrowRight } from "lucide-react"
import { Logo } from "@/components/logo"

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ObrigadoBlindagem() {
  const [utmParams, setUtmParams] = useState("")
  
  useEffect(() => {
    // Recupera UTMs do localStorage (salvas pelo formulário de captura)
    const storedUtms = localStorage.getItem("blindagem_utms")
    if (storedUtms) {
      try {
        const utmData = JSON.parse(storedUtms)
        const params = new URLSearchParams()
        
        if (utmData.utm_source) params.set("utm_source", utmData.utm_source)
        if (utmData.utm_medium) params.set("utm_medium", utmData.utm_medium)
        if (utmData.utm_campaign) params.set("utm_campaign", utmData.utm_campaign)
        if (utmData.utm_content) params.set("utm_content", utmData.utm_content)
        if (utmData.utm_term) params.set("utm_term", utmData.utm_term)
        if (utmData.variante) params.set("variante", utmData.variante)
        
        const queryString = params.toString()
        if (queryString) {
          setUtmParams(`?${queryString}`)
          
          // Atualiza a URL do navegador sem recarregar a página
          const newUrl = `${window.location.pathname}?${queryString}`
          window.history.replaceState({}, "", newUrl)
        }
      } catch (e) {
        // Ignora erros de parse
      }
    }
  }, [])
  
  // URL base do WhatsApp
  const whatsappBaseUrl = "https://api.pluglead.com/group-manager/group-manager/36826ccc-77a3-430f-85bb-f4ea8d4bab83/redirect/a3442b38-8982-4b3f-abf2-41cf01acc11a"
  
  return (
    <main>

      {/* ── Hero de Confirmação ─────────────────────────────────────────── */}
      <section className="bg-creme py-12 lg:py-20">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <div className="mb-8 flex justify-center">
            <Logo />
          </div>

          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-verde-vita/20">
            <CheckCircle className="h-8 w-8 text-verde-esc" />
          </div>

          <h1 className="font-serif text-3xl font-black italic leading-[1.15] text-marrom md:text-5xl">
            Sua vaga está garantida.
          </h1>

          <p className="mx-auto mt-6 max-w-xl font-sans text-[17px] leading-[1.7] text-texto">
            Você acaba de tomar a decisão que a maioria das mulheres usando caneta ainda não tomou: buscar o protocolo nutricional certo para aumentar os seus resultados e evitar o efeito colateral antes de se agravar — ou antes mesmo que ele comece.
          </p>

          <div className="mt-8 flex justify-center">
            <a
              href="https://api.pluglead.com/group-manager/group-manager/36826ccc-77a3-430f-85bb-f4ea8d4bab83/redirect/a3442b38-8982-4b3f-abf2-41cf01acc11a"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[56px] items-center gap-3 rounded-full bg-[#25D366] px-10 py-5 font-sans text-base font-bold uppercase tracking-wide text-white shadow-btn transition-all hover:scale-[1.02] hover:brightness-105"
            >
              <MessageCircle className="h-5 w-5" />
              ENTRAR NO GRUPO DO WHATSAPP
            </a>
          </div>

        </div>
      </section>

      {/* ── Próximos Passos ─────────────────────────────────────────────── */}
      <section className="bg-branco py-20">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="text-center font-serif text-2xl font-bold leading-[1.2] text-marrom md:text-4xl">
            Agora tem dois passos importantes
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-center font-sans text-[15px] text-texto/70">
            Se você não seguir esses passos, você não receberá o acesso completo ao Protocolo
          </p>

          <div className="mt-12 flex flex-col gap-6">
            {/* Passo 1 */}
            <div className="flex gap-5 rounded-2xl border border-borda bg-creme p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-verde-esc font-serif text-xl font-bold text-white">
                1
              </div>
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <Mail className="h-5 w-5 text-verde-esc" />
                  <h3 className="font-sans text-[17px] font-semibold text-marrom">
                    Cheque a caixa de entrada do seu e-mail
                  </h3>
                </div>
                <p className="font-sans text-[15px] leading-[1.65] text-texto">
                  Confira seu e-mail agora. Enviei a confirmação da sua vaga. Se não aparecer na caixa de entrada, procura no spam e salva meu contato para não perder nada.
                </p>
              </div>
            </div>

            {/* Passo 2 */}
            <div className="flex gap-5 rounded-2xl border border-borda bg-creme p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-verde-esc font-serif text-xl font-bold text-white">
                2
              </div>
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-verde-esc" />
                  <h3 className="font-sans text-[17px] font-semibold text-marrom">
                    Entre no grupo exclusivo do Blindagem no WhatsApp
                  </h3>
                </div>
                <p className="font-sans text-[15px] leading-[1.65] text-texto">
                  É pelo grupo que você vai receber:
                </p>
                <ul className="mt-3 flex flex-col gap-2">
                  <li className="flex items-start gap-2 font-sans text-[15px] text-texto">
                    <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-verde-vita" />
                    Os 3 vídeos preparatórios nos dias 23, 24 e 25 de março
                  </li>
                  <li className="flex items-start gap-2 font-sans text-[15px] text-texto">
                    <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-verde-vita" />
                    O link do evento ao vivo no dia 26
                  </li>
                  <li className="flex items-start gap-2 font-sans text-[15px] text-texto">
                    <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-verde-vita" />
                    Lembretes para você não perder nada
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Botão Principal */}
          <div className="mt-10 flex justify-center">
            <a
              href="https://api.pluglead.com/group-manager/group-manager/36826ccc-77a3-430f-85bb-f4ea8d4bab83/redirect/a3442b38-8982-4b3f-abf2-41cf01acc11a"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[56px] items-center gap-3 rounded-full bg-[#25D366] px-10 py-5 font-sans text-base font-bold uppercase tracking-wide text-white shadow-btn transition-all hover:scale-[1.02] hover:brightness-105"
            >
              <MessageCircle className="h-5 w-5" />
              ENTRAR NO GRUPO AGORA
            </a>
          </div>

          {/* Lembrete do Evento */}
          <div className="mx-auto mt-10 flex max-w-md flex-col items-center gap-3 rounded-2xl border border-verde-esc/20 bg-verde-esc/5 p-6 text-center">
            <Calendar className="h-6 w-6 text-verde-esc" />
            <p className="font-sans text-[15px] font-semibold text-marrom">
              Evento ao vivo: 26 de março, 20h
            </p>
            <p className="font-sans text-sm text-texto/70">
              Marca na agenda. O evento não ficará gravado.
            </p>
          </div>
        </div>
      </section>

      {/* ── Assinatura ──────────────────────────────────────────────────── */}
      <section className="bg-creme py-12">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <p className="font-sans text-[17px] leading-relaxed text-texto">
            Até lá,
          </p>
          <p className="mt-2 font-serif text-2xl font-bold text-marrom">
            Michelly Silveira
          </p>
          <p className="mt-1 font-sans text-sm text-verde-esc">
            Nutricionista Clínica | Especialista em Saúde Feminina
          </p>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────────────── */}
      <footer className="bg-marrom py-8">
        <div className="mx-auto max-w-5xl px-5 text-center">
          <Logo white />
          <p className="mt-4 font-sans text-xs text-white/50">
            &copy; {new Date().getFullYear()} Blindagem. Todos os direitos reservados.
          </p>
        </div>
      </footer>

    </main>
  )
}
