import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { SOS_COOKIE, SOS_COOKIE_MAX_AGE, isSosVariant } from "@/lib/ab-canetas"

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
    if (isSosVariant(seen)) {
      const response = NextResponse.next()
      if (request.cookies.get(SOS_COOKIE)?.value !== seen) {
        response.cookies.set(SOS_COOKIE, seen, {
          maxAge: SOS_COOKIE_MAX_AGE,
          path: "/",
          sameSite: "lax",
        })
      }
      return response
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/", "/sos-canetas-a", "/sos-canetas-f", "/sos-canetas-vsl"],
}
