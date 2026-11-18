/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Slug antiga da oferta de e-mail pras alunas (renomeada em 2026-09-11).
      { source: "/obg-mmf-arquivada-01", destination: "/alunos-metodo-mmf", permanent: false },
      // Link curto do comercial (social selling da Aline) para o checkout do MIA+.
      // As UTMs ficam aqui: para trocar a atribuição, basta editar o destino.
      {
        source: "/mia-sc",
        destination:
          "https://payfast.greenn.com.br/161840/offer/s939DB?utm_source=comercial&utm_medium=social_selling&utm_campaign=mia_plus&utm_content=aline",
        permanent: false,
      },
    ]
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Otimização ligada: as fotos das LPs são JPGs grandes servidos crus antes
    // disso (a do hero da /canetas-do-jeito-certo tinha 94 KiB). Com AVIF/WebP
    // + srcset o celular baixa a versão do tamanho da tela dele.
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    // Injeta o CSS da rota direto no HTML. Os 3 <link rel=stylesheet> eram os
    // únicos bloqueios de renderização da página e custavam ~800 ms no 4G lento.
    inlineCss: true,
  },
}

export default nextConfig
