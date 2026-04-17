import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQSection() {
  return (
    <section id="faq" className="bg-creme py-20">
      <div className="mx-auto max-w-2xl px-5">
        <h2 className="text-center font-serif text-2xl font-bold leading-[1.2] text-marrom md:text-4xl">
          Perguntas frequentes
        </h2>

        <Accordion type="single" collapsible className="mt-10">
          <AccordionItem value="faq-0" className="border-b border-borda">
            <AccordionTrigger className="py-5 font-sans text-[17px] font-semibold text-marrom hover:no-underline">
              E realmente gratis?
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
              Nao. O ao vivo acontece uma unica vez nesse formato. Quem se inscreveu e nao assistiu ao vivo perde o conteudo.
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
              Sim. Nos dias anteriores ao ao vivo, voce vai receber 3 videos preparatorios com conteudo da Michelly diretamente no seu e-mail e no grupo de WhatsApp.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="faq-4" className="border-b border-borda">
            <AccordionTrigger className="py-5 font-sans text-[17px] font-semibold text-marrom hover:no-underline">
              Para quem e esse evento?
            </AccordionTrigger>
            <AccordionContent className="pb-5 font-sans text-base leading-[1.65] text-texto">
              Para mulheres que usam, querem usar ou comecaram a usar canetas emagrecedoras e querem entender como a nutricao protege o corpo, potencializa os resultados e garante a manutencao depois que o tratamento acaba.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="faq-5" className="border-b border-borda">
            <AccordionTrigger className="py-5 font-sans text-[17px] font-semibold text-marrom hover:no-underline">
              Preciso entender de nutricao para acompanhar?
            </AccordionTrigger>
            <AccordionContent className="pb-5 font-sans text-base leading-[1.65] text-texto">
              Nao. O conteudo e clinico, mas aplicavel. Voce sai com clareza do que fazer — nao com teoria.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}
