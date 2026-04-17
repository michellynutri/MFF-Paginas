import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const VARIANTS = ["/bv01", "/bv09", "/bv10", "/bv11"]

export function middleware(request: NextRequest) {
  // Só redireciona a rota raiz exata
  if (request.nextUrl.pathname !== "/") {
    return NextResponse.next()
  }

  // Captura os query parameters (UTMs, etc.)
  const searchParams = request.nextUrl.search

  // Se já tem cookie de variante, mantém a mesma
  const existing = request.cookies.get("ab_variant")?.value
  if (existing && VARIANTS.includes(existing)) {
    const url = new URL(existing + searchParams, request.url)
    return NextResponse.redirect(url)
  }

  // Sorteia nova variante
  const variant = VARIANTS[Math.floor(Math.random() * VARIANTS.length)]

  const url = new URL(variant + searchParams, request.url)
  const response = NextResponse.redirect(url)

  // Salva a variante no cookie por 30 dias para consistência
  response.cookies.set("ab_variant", variant, {
    maxAge: 60 * 60 * 24 * 30,
    path: "/",
    httpOnly: true,
    sameSite: "lax",
  })

  return response
}

export const config = {
  matcher: ["/"],
}
