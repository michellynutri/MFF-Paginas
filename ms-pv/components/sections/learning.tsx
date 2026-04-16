"use client"

import { useEffect, useRef, useState } from "react"
import { Leaf, Shield, Repeat } from "lucide-react"
import { CaptureForm } from "@/components/capture-form"

export function LearningSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="aprender" className="bg-verde-esc py-20">
      <div ref={ref} className="scroll-reveal mx-auto max-w-5xl px-5" data-visible={visible}>
        <p className="font-sans text-xs font-medium uppercase tracking-wider text-verde-vita/80">
          O QUE VOCE VAI APRENDER NO BLINDAGEM
        </p>

        <h2 className="mt-3 max-w-2xl font-serif text-2xl font-bold leading-[1.2] text-white md:text-4xl">
          Saia do evento sabendo exatamente o que fazer — nao apenas o que esta errado
        </h2>

        <div className="mt-10 flex flex-col gap-5">
          {/* Card 1 */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
            <div className="mb-4 inline-block rounded-lg bg-verde-vita/10 p-2.5">
              <Leaf className="h-[22px] w-[22px] text-verde-vita" />
            </div>
            <h3 className="font-sans text-[17px] font-semibold text-white">
              Por que os efeitos colaterais acontecem
            </h3>
            <p className="mt-2 font-sans text-[15px] leading-[1.6] text-white/70">
              E como a nutricao reverte e previne cada um deles — sem sacrificar o cabelo, a massa magra e a saude hormonal
            </p>
          </div>

          {/* Card 2 */}
          <div className="stagger-1 rounded-2xl border border-white/10 bg-white/5 p-7">
            <div className="mb-4 inline-block rounded-lg bg-verde-vita/10 p-2.5">
              <Shield className="h-[22px] w-[22px] text-verde-vita" />
            </div>
            <h3 className="font-sans text-[17px] font-semibold text-white">
              O Protocolo de Inteligencia Metabolica Feminina
            </h3>
            <p className="mt-2 font-sans text-[15px] leading-[1.6] text-white/70">
              Os 6 pilares que protegem seu corpo durante todo o ciclo — emagreca mais rapido e chegue no fim do tratamento mais saudavel
            </p>
          </div>

          {/* Card 3 */}
          <div className="stagger-2 rounded-2xl border border-white/10 bg-white/5 p-7">
            <div className="mb-4 inline-block rounded-lg bg-verde-vita/10 p-2.5">
              <Repeat className="h-[22px] w-[22px] text-verde-vita" />
            </div>
            <h3 className="font-sans text-[17px] font-semibold text-white">
              Como preparar a saida da caneta
            </h3>
            <p className="mt-2 font-sans text-[15px] leading-[1.6] text-white/70">
              Para que seu metabolismo aprenda a funcionar sozinho — e voce nunca precise escolher entre dependencia ou efeito rebote
            </p>
          </div>
        </div>

        {/* Form repeat */}
        <div className="mx-auto mt-14 max-w-lg rounded-2xl bg-branco p-8 shadow-card">
          <CaptureForm
            formId="form-learning"
            buttonText="QUERO GARANTIR MINHA VAGA GRATUITA"
          />
        </div>
      </div>
    </section>
  )
}
