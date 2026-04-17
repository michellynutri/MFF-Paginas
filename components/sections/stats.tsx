"use client"

import { useEffect, useRef, useState } from "react"

export function StatsSection() {
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
    <section className="bg-branco py-20">
      <div ref={ref} className="scroll-reveal mx-auto max-w-5xl px-5" data-visible={visible}>
        <p className="font-sans text-xs font-medium uppercase tracking-wider text-verde-esc">
          VOCE NAO ESTA SOZINHA NESSA
        </p>

        <h2 className="mt-3 font-serif text-2xl font-bold leading-[1.2] text-marrom md:text-4xl">
          O Brasil e o epicentro desse problema
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {/* Stat 1 */}
          <div className="rounded-2xl border-l-4 border-l-verde-vita bg-creme p-7">
            <p className="font-serif text-[56px] font-black leading-none text-marrom">
              19%
            </p>
            <p className="mt-2 font-sans text-[15px] text-texto/80">
              dos brasileiros ja usaram Ozempic ou similares
            </p>
          </div>

          {/* Stat 2 */}
          <div className="stagger-1 rounded-2xl border-l-4 border-l-verde-vita bg-creme p-7">
            <p className="font-serif text-[56px] font-black leading-none text-marrom">
              2&ordm;
            </p>
            <p className="mt-2 font-sans text-[15px] text-texto/80">
              pais que mais pesquisa canetas emagrecedoras no mundo
            </p>
          </div>

          {/* Stat 3 */}
          <div className="stagger-2 rounded-2xl border-l-4 border-l-verde-vita bg-creme p-7">
            <p className="font-serif text-[56px] font-black leading-none text-marrom">
              70%
            </p>
            <p className="mt-2 font-sans text-[15px] text-texto/80">
              das usuarias recuperam o peso ao parar — por falta do protocolo de transicao
            </p>
          </div>
        </div>

        {/* Box posicionamento */}
        <div className="mx-auto mt-14 max-w-2xl rounded-2xl bg-verde-esc p-8 text-center">
          <p className="font-sans text-[17px] font-medium leading-[1.65] text-white">
            Ate hoje: zero protocolos acessiveis de nutricao especifica para canetas existem no Brasil. A Blindagem e a primeira resposta clinica e estruturada para esse vacuo.
          </p>
        </div>
      </div>
    </section>
  )
}
