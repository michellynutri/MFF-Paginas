"use client"

import { useEffect, useRef, useState } from "react"

export function MichellySection() {
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
    <section id="michelly" className="bg-creme py-20">
      <div
        ref={ref}
        className="scroll-reveal mx-auto grid max-w-5xl gap-12 px-5 lg:grid-cols-[40%_60%] lg:items-center"
        data-visible={visible}
      >
        {/* Coluna foto */}
        <div className="relative mx-auto w-full max-w-sm lg:mx-0">
          <div
            className="aspect-[3/4] w-full overflow-hidden rounded-2xl bg-verde-esc/15"
            role="img"
            aria-label="Foto da nutricionista Michelly Silveira"
          />
          <div className="absolute bottom-4 left-4 rounded-xl bg-marrom px-4 py-3 shadow-md">
            <span className="block font-serif text-[22px] font-bold text-white">13 anos</span>
            <span className="mt-0.5 block font-sans text-xs text-white/70">de consultorio</span>
          </div>
        </div>

        {/* Coluna bio */}
        <div>
          <p className="mb-2 font-sans text-xs font-medium uppercase tracking-wider text-verde-esc">
            QUEM VAI TE GUIAR NESSE EVENTO
          </p>

          <h2 className="mb-1 font-serif text-4xl font-bold text-marrom">
            Michelly Silveira
          </h2>

          <p className="mb-5 font-sans text-[15px] font-medium text-verde-esc">
            Nutricionista Clinica | @michellynutri
          </p>

          <hr className="mb-6 h-0.5 w-12 border-0 bg-borda" />

          <p className="mb-4 font-sans text-[17px] leading-[1.7] text-texto">
            Eu nao virei nutricionista por acaso. Eu virei porque eu precisei — eu tive obesidade e sei o que e lutar contra o proprio corpo.
          </p>

          <p className="mb-6 font-sans text-[17px] leading-[1.7] text-texto">
            Sao 13 anos de consultorio especializado em saude feminina. Quando as canetas chegaram, eu vi um padrao se repetir toda semana: mulheres emagrecendo na balanca e se destruindo no processo — nao por falta de esforco, mas por falta de protocolo nutricional.
          </p>

          <blockquote className="border-l-4 border-verde-vita pl-5 font-sans text-[17px] font-medium italic leading-[1.6] text-verde-esc">
            &ldquo;E a primeira vez que o Protocolo de Inteligencia Metabolica Feminina sai do consultorio.&rdquo;
          </blockquote>
        </div>
      </div>
    </section>
  )
}
