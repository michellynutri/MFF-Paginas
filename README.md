# MFF-Paginas

Monorepo com as páginas do funil da cliente Michelly Silveira.

## Estrutura

- `ms-pv/` — Página de vendas (Next.js)
- `ms-lp/` — Landing page de captura (Next.js)

## Como rodar localmente

Cada projeto é independente. Para rodar um deles:

```bash
cd ms-pv   # ou ms-lp
npm install
npm run dev
```

## Deploy

Cada subpasta deve ser importada como um projeto separado no Vercel, usando "Root Directory" = ms-pv ou ms-lp.
