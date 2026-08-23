import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import {
  CJC_COOKIE,
  SOS_COOKIE,
  SOS_COOKIE_MAX_AGE,
  SOS_VSL_COOKIE,
  isCjcVariant,
  isSosVariant,
  isSosVslVersion,
} from "@/lib/ab-canetas"

function carimbar(response: NextResponse, request: NextRequest, name: string, value: string) {
  if (request.cookies.get(name)?.value === value) return
  response.cookies.set(name, value, {
    maxAge: SOS_COOKIE_MAX_AGE,
    path: "/",
    sameSite: "lax",
  })
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

    // Versões do teste 50/50 da VSL (/sos-canetas-vsl-v01|v03).
    // Carimba duas coisas: a variante "vsl" (pro resto do funil continuar
    // enxergando essa pessoa como da campanha da VSL) e qual versão saiu no
    // sorteio, pra ela cair sempre na mesma daqui pra frente.
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

  return NextResponse.next()
}

export const config = {
  matcher: [
    "/",
    "/sos-canetas-a",
    "/sos-canetas-f",
    "/sos-canetas-vsl",
    "/sos-canetas-vsl-v01",
    "/sos-canetas-vsl-v03",
    "/canetas-do-jeito-certo-a",
    "/canetas-do-jeito-certo-b",
  ],
}
