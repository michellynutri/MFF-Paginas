"use client"

import { useEffect, useRef, useState } from "react"
import { X } from "lucide-react"

export function UrgencySection() {
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
    <section className="bg-marrom py-20">
      <div
        ref={ref}
        className="scroll-reveal mx-auto max-w-3xl px-5"
        data-visible={visible}
      >
        <p className="mb-3 font-sans text-xs font-medium uppercase tracking-wider text-verde-vita">
          POR QUE VOCE NAO PODE PERDER ESSE EVENTO
        </p>

        <h2 className="mb-10 max-w-2xl font-serif text-2xl font-bold leading-[1.15] text-white md:text-[40px]">
          Cada semana sem o protocolo e mais uma semana de desequilibrio que fica mais dificil de reverter.
        </h2>

        {/* Lista de custos — inline, sem map */}
        <div className="mb-10 flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <X className="h-4 w-4 shrink-0 text-red-500" />
            <span className="font-sans text-[17px] text-white/90">Mais queda de cabelo</span>
          </div>
          <div className="flex items-center gap-3">
            <X className="h-4 w-4 shrink-0 text-red-500" />
            <span className="font-sans text-[17px] text-white/90">Mais massa magra perdida</span>
          </div>
          <div className="flex items-center gap-3">
            <X className="h-4 w-4 shrink-0 text-red-500" />
            <span className="font-sans text-[17px] text-white/90">Mais flacidez</span>
          </div>
          <div className="flex items-center gap-3">
            <X className="h-4 w-4 shrink-0 text-red-500" />
            <span className="font-sans text-[17px] text-white/90">Mais dificil de reverter depois</span>
          </div>
        </div>

        <hr className="mb-10 border-white/20" />

        <p className="mb-10 text-center font-sans text-[17px] font-semibold text-white">
          O evento nao fica gravado. As vagas sao limitadas.
        </p>

        {/* BOTAO CTA — VERDE VITA ALTA VISIBILIDADE */}
        <div className="flex justify-center">
          <a
            href="#inscricao"
            className="inline-flex min-h-[52px] items-center gap-2 rounded-full bg-verde-vita px-12 py-5 font-sans text-base font-bold uppercase tracking-wide text-texto shadow-vita transition-all duration-200 hover:scale-[1.02] hover:brightness-105"
            aria-label="Garantir minha vaga — 26 de Marco, 20h"
          >
            {'→'} GARANTIR MINHA VAGA — 26 DE MARCO, 20H
          </a>
        </div>
      </div>
    </section>
  )
}
