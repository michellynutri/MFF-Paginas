# MFF-Paginas

Monorepo com as páginas do funil da cliente Michelly Silveira.

## Estrutura

- `ms-captura/` — Funil do evento Blindagem Metabólico (captura, CPLs, variantes bv01-bv11, obrigado)
- `ms-vendas/` — Página de vendas do Método Metabólico Feminino

## Como rodar localmente

Cada projeto é independente. Para rodar um deles:

```bash
cd ms-captura   # ou ms-vendas
pnpm install
pnpm dev
```

## Deploy

Cada subpasta deve ser importada como um projeto separado no Vercel, usando "Root Directory" = ms-captura ou ms-vendas.
