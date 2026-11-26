# /quiz-mia: o quiz de vendas da MIA, tela a tela igual ao Stitch

As telas foram desenhadas no Google Stitch (projeto "MIA · Quiz de vendas", id 5419878655325934968).
Cada prancheta do Stitch é um HTML com Tailwind v3 via CDN, e cada uma tem a sua própria config
(cores, fontes e tamanhos com o mesmo nome valem coisas diferentes de uma tela para outra). Para ficar
igual, cada tela vira um componente com o CSS isolado dela.

## Peças

- `stitch/<cod>.html`: HTML original de cada prancheta (fonte da verdade do visual).
- `extrai.mjs`: converte o `<body>` de cada prancheta em `app/quiz-mia/_telas/T<cod>.tsx` e guarda a
  config do Tailwind e o CSS próprio da tela em `telas/<cod>.json`. Só cria o TSX se ele não existir
  (`--force` sobrescreve e PERDE a fiação feita à mão).
- `css.mjs`: gera `app/quiz-mia/_telas/telas.css` (versionado). Para cada tela: CSS do `<head>` + Tailwind v3
  com a config daquela tela, varrendo o próprio `T<cod>.tsx` + CSS do `<body>`, tudo prefixado com
  `[data-tela="<cod>"]`. Rode `node css.mjs` depois de mexer em classes de qualquer tela.
- `compara.py`: abre o HTML do Stitch e a prévia `/quiz-mia?ver=<cod>` a 390 px e compara pixel a pixel.
  Saída em `_compara/<cod>.png` (Stitch | site | diferença) e a % de pixels diferentes.
  Uso: `python compara.py 07a 07b` (servidor local em http://localhost:3311).

## Regras para editar uma tela (`app/quiz-mia/_telas/T<cod>.tsx`)

1. **Não mexa no visual.** O markup veio do Stitch; a prévia `?ver=<cod>` precisa continuar batendo com a
   prancheta (meta: abaixo de 0,5% em `compara.py`, salvo onde a prancheta mostra um estado que a lógica
   reproduz de outro jeito — explique quando for o caso).
2. **Classes do Tailwind levam o prefixo `q-`** (`q-flex`, `q-hover:bg-x`, `q--mt-1`). Classe sem `q-` não é
   Tailwind (é CSS próprio da tela, ex. `orb-logo`, `material-symbols-outlined`). Toda classe que você
   acrescentar precisa existir no Tailwind v3 com a config daquela tela (veja `telas/<cod>.json`) e estar
   escrita por inteiro no código (nada de montar nome de classe com string), senão o `css.mjs` não a gera.
3. Para repetir opções use um array + `.map`, copiando exatamente o markup da opção da prancheta. Para o
   estado marcado, use o markup marcado da própria prancheta quando ela tiver um; senão, o da prancheta 01b
   (fundo `#FBF1DC`, borda 2px `#203E35`, texto semibold, marcador dourado `#D9A441` com check branco),
   adaptado aos tamanhos daquela tela.
4. Textos dinâmicos vêm de `q` (ver `_quiz/tipos.ts`) e das funções de `_quiz/regras.ts`; nome com
   `primeiroNome(q.r.nome)` de `_quiz/ui.ts`. Os três pontos de "alertas" no topo usam `pontos(q)` de
   `_quiz/ui.ts` (devolve o `style` de cada ponto): troque a classe de cor do ponto por `style={pontos(q)[i]}`.
5. Botão voltar: `onClick={q.voltar}`. Botão principal: `onClick={q.proxima}` (ou a ação da tela).
   Resposta única: `onClick={() => q.escolhe("chave", i)}` (avança sozinho em 380 ms). Se a tela mostra um
   aviso depois da resposta, passe a espera: `q.escolhe("chave", i, 2200)` e mostre o aviso só quando a
   resposta existir (`q.r.chave !== undefined`). Várias respostas: `q.alterna("chave", i, indiceDoNenhum)`,
   botão "Continuar · N marcado(s)" desabilitado sem nenhuma marcada.
6. `q.previa` é true na prévia: animações e contagens devem parar no estado da prancheta.
7. Use `<button type="button">` para o que é clicável (se a prancheta usa `div`, troque por `button` só se
   o visual não mudar; senão mantenha a `div` com `role="button"`, `tabIndex={0}` e `onClick`).
8. Não apague nem renomeie arquivos; não rode `extrai.mjs --force`.

## Prévias

`app/quiz-mia/_quiz/previas.ts` diz, para cada prancheta, qual tela e quais respostas a reproduzem
(ex.: `14b` = tela 14 com 1 alerta grave). `/quiz-mia?ver=<cod>` só funciona fora da produção.

## Vídeo do app na oferta (tela 30)

`app/quiz-mia/_quiz/VideoApp.tsx` mostra `public/videos/quiz-mia/app-mia.mp4` (16 s, em loop, sem som) num celular
em CSS, com as abas Início · Meu plano · Registrar · Chat acendendo no tempo do vídeo. O vídeo é feito em
`motion/` (Remotion, `src/AppMia.tsx`) a partir de capturas do app real:

1. Rodar o app da MIA localmente com o banco de homologação (código da branch `homolog`, porta 3010).
2. `motion/captura/abas3.cjs` (aluna de teste do nível MIA): marca o café, soma água e fotografa as abas.
   `motion/captura/conversa3.cjs`: a pergunta do chat + "pensando" + a resposta da Mia. A resposta é TEXTO DE
   DEMONSTRAÇÃO desenhado com o markup do app (o chat com IA está desligado na homologação); valide com a Michelly.
3. As comidas do plano ficam desfocadas (o plano alimentar nunca aparece legível).
4. `cd motion && npx remotion render src/index.ts AppMia out/app-mia.mp4 --codec=h264 --crf=26` e copiar para
   `public/videos/quiz-mia/`. Se mudar os tempos das cenas, ajuste `ABAS[].ate` no VideoApp.tsx.

## Banco de dados (respostas e leads)

`_quiz/coleta.ts` manda o estado do quiz para `COLETA_URL` (config.ts) → n8n "QUIZ MIA — Coleta" → Supabase do CRM
(`tnfmwaxueuzylbjmuvwo`, o mesmo do painel de tráfego), tabela `quiz_mia_sessoes`. Migration e workflow ficam em
`~/n8n/ads-dashboard` (`sql/014_quiz_mia.sql`, `build/workflows_def.py` → `wf_quiz`).

- Envia ao chegar nas telas 02, 10, 20, 25, 28 e 30, quando a aba some (pagehide/visibilitychange) e no clique do checkout.
- Nome e e-mail só vão depois do aceite da tela 27. A prévia `?ver=` não envia nada.
- localhost, `*.vercel.app` e `?teste` gravam com `is_test = true` (fora do funil).
- Funil: `select quiz_mia_f_funil('2026-12-01', '2026-12-07')` (passos 1–32, leads, oferta, checkout, vendas por e-mail).
