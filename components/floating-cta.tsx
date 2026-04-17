"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export function FloatingCTA() {
  const [mounted, setMounted] = useState(false)
  const [show, setShow] = useState(false)

  useEffect(() => {
    setMounted(true)
    function handleScroll() {
      setShow(window.scrollY > 600)
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Não renderiza nada no servidor para evitar hydration mismatch
  if (!mounted) return null

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50 bg-marrom shadow-float transition-transform duration-300 md:hidden",
        show ? "translate-y-0" : "translate-y-full"
      )}
    >
      <a
        href="#hero"
        className="flex min-h-12 w-full items-center justify-center gap-2 px-6 py-4 font-sans text-base font-semibold text-white"
        aria-label="Garantir vaga gratuita"
      >
        {'→'} Garantir vaga gratuita
      </a>
    </div>
  )
}
