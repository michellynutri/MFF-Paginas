"use client"

import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"

export function CaptureForm() {
  const ref = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    if (!ref.current) return
    
    // Captura a variante da página (ex: bv01, bv02, etc.)
    const variant = pathname.replace("/", "") || "home"
    
    // Captura UTMs da URL atual
    const urlParams = new URLSearchParams(window.location.search)
    const utmSource = urlParams.get("utm_source") || ""
    const utmMedium = urlParams.get("utm_medium") || ""
    const utmCampaign = urlParams.get("utm_campaign") || ""
    const utmContent = urlParams.get("utm_content") || ""
    const utmTerm = urlParams.get("utm_term") || ""
    
    // Armazena UTMs no localStorage para passar para página de obrigado
    const utmData = {
      utm_source: utmSource,
      utm_medium: utmMedium,
      utm_campaign: utmCampaign,
      utm_content: utmContent,
      utm_term: utmTerm,
      variante: variant
    }
    localStorage.setItem("blindagem_utms", JSON.stringify(utmData))
    
    // Cria um campo hidden para a variante
    const hiddenInput = document.createElement("input")
    hiddenInput.type = "hidden"
    hiddenInput.name = "fields[variante]"
    hiddenInput.value = variant
    
    // Campo hidden para UTM source
    const utmSourceInput = document.createElement("input")
    utmSourceInput.type = "hidden"
    utmSourceInput.name = "fields[utm_source]"
    utmSourceInput.value = utmSource
    
    // Campo hidden para UTM medium
    const utmMediumInput = document.createElement("input")
    utmMediumInput.type = "hidden"
    utmMediumInput.name = "fields[utm_medium]"
    utmMediumInput.value = utmMedium
    
    // Campo hidden para UTM campaign
    const utmCampaignInput = document.createElement("input")
    utmCampaignInput.type = "hidden"
    utmCampaignInput.name = "fields[utm_campaign]"
    utmCampaignInput.value = utmCampaign
    
    // Campo hidden para UTM content
    const utmContentInput = document.createElement("input")
    utmContentInput.type = "hidden"
    utmContentInput.name = "fields[utm_content]"
    utmContentInput.value = utmContent
    
    // Campo hidden para UTM term
    const utmTermInput = document.createElement("input")
    utmTermInput.type = "hidden"
    utmTermInput.name = "fields[utm_term]"
    utmTermInput.value = utmTerm
    
    const script = document.createElement("script")
    script.src = "https://michelly-silveira-nutricionista.kit.com/715a4bce10/index.js"
    script.setAttribute("data-uid", "715a4bce10")
    script.async = true
    
    // Adiciona o script primeiro
    ref.current.appendChild(script)
    
    // Quando o formulário do Kit carregar, injeta os campos hidden
    const observer = new MutationObserver((mutations, obs) => {
      const form = ref.current?.querySelector("form")
      if (form) {
        form.appendChild(hiddenInput)
        form.appendChild(utmSourceInput)
        form.appendChild(utmMediumInput)
        form.appendChild(utmCampaignInput)
        form.appendChild(utmContentInput)
        form.appendChild(utmTermInput)
        obs.disconnect()
      }
    })
    
    observer.observe(ref.current, { childList: true, subtree: true })
    
    return () => observer.disconnect()
  }, [pathname])

  return (
    <div className="w-full">
      <p className="mb-2 text-center font-sans text-sm text-texto/70">
        Insira suas informações para participar
      </p>
      <div ref={ref} />
    </div>
  )
}
