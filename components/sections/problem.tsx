"use client"

import { useEffect, useRef, useState } from "react"
import { TrendingDown, AlertTriangle, RotateCcw } from "lucide-react"

export function ProblemSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="bg-creme py-20">
      <div ref={ref} className="scroll-reveal mx-auto max-w-3xl px-5 text-center" data-visible={visible}>
        <p className="mb-3 font-sans text-xs font-medium uppercase tracking-wider text-verde-esc">
          A VERDADE QUE NENHUM MEDICO TE CONTOU
        </p>

        <h2 className="font-serif text-2xl font-bold leading-[1.2] text-marrom md:text-4xl">
          As canetas funcionam.<br />
          Mas ninguem te deu o manual.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl font-sans text-[17px] leading-[1.7] text-texto">
          As canetas emagrecedoras foram lancadas em velocidade recorde — sem um protocolo nutricional que proteja o metabolismo feminino durante o tratamento. O medico prescreve. Voce compra. Voce usa. Mas ninguem te ensina como alimentar seu corpo enquanto ele passa por essa transformacao.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {/* Card 1 */}
          <div className="flex flex-col items-center gap-4 rounded-2xl border border-borda bg-branco p-6 text-center shadow-sm transition-all duration-200 hover:-translate-y-1">
            <div className="inline-block rounded-xl bg-creme p-3">
              <TrendingDown className="h-7 w-7 text-marrom" />
            </div>
            <h3 className="font-sans text-[17px] font-semibold text-marrom">
              Perda de massa magra
            </h3>
            <p className="font-sans text-[15px] leading-[1.6] text-texto/70">
              Voce perde gordura e musculo juntos — e fica com a flacidez que nao esperava
            </p>
          </div>

          {/* Card 2 */}
          <div className="stagger-1 flex flex-col items-center gap-4 rounded-2xl border border-borda bg-branco p-6 text-center shadow-sm transition-all duration-200 hover:-translate-y-1">
            <div className="inline-block rounded-xl bg-creme p-3">
              <AlertTriangle className="h-7 w-7 text-marrom" />
            </div>
            <h3 className="font-sans text-[17px] font-semibold text-marrom">
              Deficiencias nutricionais
            </h3>
            <p className="font-sans text-[15px] leading-[1.6] text-texto/70">
              Cabelo cai, energia some, hormonios desregulam. Tudo por falta de protocolo
            </p>
          </div>

          {/* Card 3 */}
          <div className="stagger-2 flex flex-col items-center gap-4 rounded-2xl border border-borda bg-branco p-6 text-center shadow-sm transition-all duration-200 hover:-translate-y-1">
            <div className="inline-block rounded-xl bg-creme p-3">
              <RotateCcw className="h-7 w-7 text-marrom" />
            </div>
            <h3 className="font-sans text-[17px] font-semibold text-marrom">
              Efeito rebote garantido
            </h3>
            <p className="font-sans text-[15px] leading-[1.6] text-texto/70">
              Seu metabolismo nao aprende. Quando voce para a caneta, engorda tudo de volta
            </p>
          </div>
        </div>

        <p className="mx-auto mt-12 max-w-xl font-sans text-lg font-semibold italic text-verde-esc">
          Este evento e o manual que faltava.
        </p>
      </div>
    </section>
  )
}
