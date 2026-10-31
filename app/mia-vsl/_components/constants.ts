// Página de vendas do MIA (21/10/2026) — modelo da página da Thaize Tavares
// (thaizetavares.com.br/aula-gratuita-fechamento): faixa preta no topo com
// "ESTE VÍDEO SAI DO AR HOJE, dd/mm" e a VSL logo abaixo. Nada mais na página:
// o botão de compra é configurado DENTRO do vídeo, no painel da Vturb.

// VSL MMF+MIA (edição v8, 45:09, app real nos mockups e depoimentos sem nome,
// entregue 30/10/2026). Preencher com o id do player (embed 9:16; trocas:
// 21/10 6ad7b963… → 6ad91d58…; 31/10 → 6ae53672…). Vazio = palco com aviso.
export const VTURB_VIDEO_MIA: string = "6ae53672ced384a606ec1fe7";
export const VTURB_ACCOUNT_ID = "9209a5ac-0a42-43b5-9c1f-7d310e9d3d33";

// Vai pro checkout como ?variante=mia-vsl (botão da Vturb passa pelo
// VturbCheckoutUtm, que leva UTMs + variante na mesma aba).
export const VARIANTE = "mia-vsl";
