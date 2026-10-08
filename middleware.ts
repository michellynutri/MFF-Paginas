import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import {
  CJC_COOKIE,
  MMF_VSL_COOKIE,
  SOS_COOKIE,
  SOS_COOKIE_MAX_AGE,
  SOS_VSL_COOKIE,
  isCjcVariant,
  isMmfVslHeadlineNoSorteio,
  isMmfVslHeadlineValida,
  isSosVariant,
  isSosVslVersion,
  randomMmfVslHeadline,
} from "@/lib/ab-canetas"

function carimbar(response: NextResponse, request: NextRequest, name: string, value: string) {
  if (request.cookies.get(name)?.value === value) return
  response.cookies.set(name, value, {
    maxAge: SOS_COOKIE_MAX_AGE,
    path: "/",
    sameSite: "lax",
  })
}

// UTMs que o link da bio ganha quando chega "limpo" (ver bloco no fim do
// middleware). Pra trocar a campanha, basta editar aqui.
const UTM_PADRAO_BIO: Record<string, Record<string, string>> = {
  "/mmf-bio": { utm_source: "instagram", utm_medium: "bio", utm_campaign: "mmf" },
  "/sos-canetas-bio": { utm_source: "instagram", utm_medium: "bio", utm_campaign: "sos" },
}

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl

  // Redireciona a rota raiz para /vendas
  if (pathname === "/") {
    const url = new URL("/vendas" + search, request.url)
    return NextResponse.redirect(url)
  }

  // Memória do teste A/B/C: ao abrir uma variante do funil (a/f/vsl, de
  // qualquer origem), grava num cookie a última que a pessoa viu. O link
  // /canetas usa esse cookie pra devolver a pessoa à mesma página.
  // Não altera o roteamento pago da /sos-canetas (segue a/f) — só carimba.
  const prefix = "/sos-canetas-"
  if (pathname.startsWith(prefix)) {
    const seen = pathname.slice(prefix.length)

    // Toda versão da VSL precisa chegar com ?variante=vsl-vXX na URL — é daí
    // que pixel/GA/UTMify leem a variação. Quem vem pelo sorteador
    // (/sos-canetas-vsl) já chega com ele; quem vem por link direto (v05, fora
    // do sorteio) não chegava. Aqui completa o parâmetro, mantendo as UTMs.
    if (/^vsl-v\d+$/.test(seen) && request.nextUrl.searchParams.get("variante") !== seen) {
      const url = request.nextUrl.clone()
      url.searchParams.set("variante", seen)
      return NextResponse.redirect(url)
    }

    // Versões da VSL que estão em circulação (hoje só a v03 —
    // ver SOS_VSL_VERSIONS). Carimba duas coisas: a
    // variante "vsl" (pro resto do funil continuar enxergando essa pessoa como
    // da campanha da VSL) e qual versão saiu no sorteio, pra ela cair sempre na
    // mesma daqui pra frente.
    const versaoVsl = seen.startsWith("vsl-") ? seen.slice(4) : null
    if (isSosVslVersion(versaoVsl)) {
      const response = NextResponse.next()
      carimbar(response, request, SOS_COOKIE, "vsl")
      carimbar(response, request, SOS_VSL_COOKIE, versaoVsl)
      return response
    }

    if (isSosVariant(seen)) {
      const response = NextResponse.next()
      carimbar(response, request, SOS_COOKIE, seen)
      return response
    }
  }

  // Memória do teste 50/50 da Canetas do Jeito Certo. Mesma ideia do bloco
  // acima: ao abrir uma variante (de qualquer origem — sorteio, link direto,
  // retargeting), carimba qual foi. O sorteador da /canetas-do-jeito-certo lê
  // esse cookie e devolve a pessoa sempre pra mesma página.
  const prefixoCjc = "/canetas-do-jeito-certo-"
  if (pathname.startsWith(prefixoCjc)) {
    const variante = pathname.slice(prefixoCjc.length)
    if (isCjcVariant(variante)) {
      const response = NextResponse.next()
      carimbar(response, request, CJC_COOKIE, variante)
      return response
    }
  }

  // Teste de headline da /mmf-vsl (ver MMF_VSL_HEADLINES). Sem ?h= válido,
  // sorteia (ou devolve a do cookie); com ?h= mas sem a variante certa,
  // completa. Nos dois casos redireciona mantendo as UTMs.
  if (pathname === "/mmf-vsl") {
    const params = request.nextUrl.searchParams
    const pedida = params.get("h")
    const visto = request.cookies.get(MMF_VSL_COOKIE)?.value
    const h = isMmfVslHeadlineValida(pedida)
      ? pedida
      : isMmfVslHeadlineNoSorteio(visto)
        ? visto
        : randomMmfVslHeadline()
    const variante = `mmf-vsl-h${h}`

    if (pedida !== h || params.get("variante") !== variante) {
      const url = request.nextUrl.clone()
      url.searchParams.set("h", h)
      url.searchParams.set("variante", variante)
      const response = NextResponse.redirect(url)
      carimbar(response, request, MMF_VSL_COOKIE, h)
      return response
    }

    // URL certa: serve o HTML estático de /mmf-vsl/hN (ver app/mmf-vsl/[h])
    // sem mudar a URL do navegador.
    const destino = request.nextUrl.clone()
    destino.pathname = `/mmf-vsl/h${h}`
    const response = NextResponse.rewrite(destino)
    carimbar(response, request, MMF_VSL_COOKIE, h)
    return response
  }

  // /mmf-vsl/hN é só o endereço interno do HTML estático: quem chega nele
  // direto vai pra URL pública equivalente (o bloco acima completa a variante).
  const hDireto = pathname.match(/^\/mmf-vsl\/h(\d)$/)?.[1]
  if (hDireto) {
    const url = request.nextUrl.clone()
    url.pathname = "/mmf-vsl"
    url.searchParams.set("h", hDireto)
    return NextResponse.redirect(url)
  }

  // Links da bio do Instagram (/mmf-bio, /sos-canetas-bio): quem chega sem
  // nenhuma utm_* na URL é mandado pra mesma página com as UTMs padrão da bio,
  // pra chegar no checkout (e na UTMify) como instagram/bio em vez de "direto".
  // Com qualquer UTM já na URL (anúncio apontando pra bio, link encurtado com
  // campanha), não mexe. Outros parâmetros (fbclid etc.) são mantidos.
  const utmBio = UTM_PADRAO_BIO[pathname]
  if (utmBio) {
    const params = request.nextUrl.searchParams
    const temUtm = Array.from(params.keys()).some((k) => k.startsWith("utm_"))
    if (!temUtm) {
      const url = request.nextUrl.clone()
      Object.entries(utmBio).forEach(([k, v]) => url.searchParams.set(k, v))
      return NextResponse.redirect(url)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    "/",
    "/mmf-vsl",
    "/mmf-vsl/:h",
    "/mmf-bio",
    "/sos-canetas-bio",
    "/sos-canetas-a",
    "/sos-canetas-f",
    "/sos-canetas-vsl",
    "/sos-canetas-vsl-v03",
    "/sos-canetas-vsl-v05",
    "/canetas-do-jeito-certo-a",
    "/canetas-do-jeito-certo-b",
    "/canetas-do-jeito-certo-c",
    "/canetas-do-jeito-certo-d",
  ],
}
