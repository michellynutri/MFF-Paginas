import type { Metadata } from "next"
import { headers } from "next/headers"
import { redirect } from "next/navigation"

// Link curto do comercial (social selling da Aline) para o checkout do MIA+.
// As UTMs ficam aqui: para trocar a atribuição, basta editar o destino.
const CHECKOUT = "https://payfast.greenn.com.br/161840/offer/s939DB"
const UTMS = {
  utm_source: "comercial",
  utm_medium: "social_selling",
  utm_campaign: "mia_plus",
  utm_content: "aline",
}

// Quem monta a pré-visualização do link (WhatsApp, Instagram, Telegram…) não é
// redirecionado: recebe esta página, com título e imagem do MIA+. Sem isso a
// prévia saía com o título padrão do site (evento Blindagem) ou com o da Greenn.
const ROBO_DE_PREVIA =
  /whatsapp|facebookexternalhit|facebot|meta-externalagent|telegrambot|twitterbot|slackbot|linkedinbot|discordbot|skypeuripreview|pinterest|googlebot|bingbot/i

const TITULO = "MIA+ | Michelly Silveira"
const DESCRICAO =
  "Seu plano alimentar com acompanhamento de nutricionista, no aplicativo da Michelly Silveira."

export const metadata: Metadata = {
  title: TITULO,
  description: DESCRICAO,
  robots: { index: false, follow: false },
  openGraph: {
    title: TITULO,
    description: DESCRICAO,
    url: "https://www.metodometabolicofeminino.com.br/mia-sc",
    siteName: "Michelly Silveira",
    images: [
      {
        url: "https://www.metodometabolicofeminino.com.br/images/mia/og-mia.png",
        width: 512,
        height: 512,
        alt: "MIA+",
      },
    ],
    type: "website",
  },
}

type Props = { searchParams: Promise<Record<string, string | string[] | undefined>> }

export default async function Page({ searchParams }: Props) {
  // Mantém o que vier na URL (fbclid etc.); as UTMs do comercial prevalecem.
  const destino = new URL(CHECKOUT)
  for (const [k, v] of Object.entries(await searchParams)) {
    const valor = Array.isArray(v) ? v[0] : v
    if (valor) destino.searchParams.set(k, valor)
  }
  for (const [k, v] of Object.entries(UTMS)) destino.searchParams.set(k, v)

  const ua = (await headers()).get("user-agent") ?? ""
  if (!ROBO_DE_PREVIA.test(ua)) redirect(destino.toString())

  // Só robôs chegam aqui; o refresh é rede de segurança se uma pessoa cair.
  return (
    <main className="flex min-h-[100svh] items-center justify-center bg-[#F9F9F9] p-6 text-center">
      <meta httpEquiv="refresh" content={`0;url=${destino.toString()}`} />
      <a href={destino.toString()} className="underline">
        Continuar para a inscrição no MIA+
      </a>
    </main>
  )
}
