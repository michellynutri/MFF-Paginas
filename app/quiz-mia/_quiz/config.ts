// Links de checkout dos três planos (Greenn). AINDA NÃO EXISTEM: as ofertas novas de 4, 8 e 12 semanas
// precisam ser criadas na Greenn (preço da promoção e preço cheio de R$ 129/mês). Até lá o botão só registra o evento.
// Ordem: [4 semanas, 8 semanas, 12 semanas].
export const CHECKOUT: Record<"promo" | "cheio", [string, string, string]> = {
  promo: ["", "", ""],
  cheio: ["", "", ""],
};

/** duração da promoção depois que a pessoa chega na oferta */
export const PROMO_MINUTOS = 15;

/** Coleta das respostas: n8n (workflow "QUIZ MIA — Coleta", repo ~/n8n/ads-dashboard) → Supabase do CRM, tabela quiz_mia_sessoes */
export const COLETA_URL = "https://n8n.criation.io/webhook/quiz-mia";
export const VERSAO_QUIZ = "v1";
