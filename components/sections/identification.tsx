"use client"

import { useEffect, useRef, useState } from "react"

export function IdentificationSection() {
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
    <section id="identificacao" className="bg-branco py-20">
      <div ref={ref} className="scroll-reveal mx-auto max-w-6xl px-5" data-visible={visible}>
        <h2 className="text-center font-serif text-2xl font-bold leading-[1.2] text-marrom md:text-4xl">
          Voce esta nessa situacao?
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {/* Card VERMELHO */}
          <div className="rounded-2xl border-t-4 border-t-red-600 bg-branco p-6 shadow-card transition-all duration-200 hover:-translate-y-1">
            <div className="mb-4 h-3 w-3 rounded-full bg-red-600" />
            <p className="font-sans text-base leading-[1.7] text-texto">
              Esta usando caneta ha alguns meses, emagreceu — mas o cabelo esta caindo no chuveiro em mechas, o intestino travou, a flacidez apareceu onde voce esperava firmeza, e voce nao entende o que esta errado. Fica com a sensacao de que esta gastando uma fortuna e destruindo o corpo ao mesmo tempo.
            </p>
          </div>

          {/* Card AMBAR */}
          <div className="stagger-1 rounded-2xl border-t-4 border-t-amber-600 bg-branco p-6 shadow-card transition-all duration-200 hover:-translate-y-1">
            <div className="mb-4 h-3 w-3 rounded-full bg-amber-600" />
            <p className="font-sans text-base leading-[1.7] text-texto">
              Quer usar caneta, seu medico ja ate indicou — mas voce passou horas pesquisando na internet, viu relatos assustadores, e agora esta mais confusa do que antes. Quer emagrecer, mas nao quer trocar o sobrepeso por queda de cabelo, cara de doente ou dependencia da medicacao para sempre.
            </p>
          </div>

          {/* Card VERDE */}
          <div className="stagger-2 rounded-2xl border-t-4 border-t-verde-vita bg-branco p-6 shadow-card transition-all duration-200 hover:-translate-y-1">
            <div className="mb-4 h-3 w-3 rounded-full bg-verde-vita" />
            <p className="font-sans text-base leading-[1.7] text-texto">
              Comecou a usar caneta ha pouco tempo e esta bem — mas ve o que acontece com outras mulheres depois de alguns meses e quer evitar cada um desses erros. Quer fazer tudo certo desde o inicio, antes que seja tarde para prevenir.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
