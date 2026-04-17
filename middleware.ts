import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Redireciona a rota raiz para /vendas
  if (request.nextUrl.pathname === "/") {
    const searchParams = request.nextUrl.search
    const url = new URL("/vendas" + searchParams, request.url)
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/"],
}
