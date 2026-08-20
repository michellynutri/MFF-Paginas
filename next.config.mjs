/** @type {import('next').NextConfig} */
const nextConfig = {
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
