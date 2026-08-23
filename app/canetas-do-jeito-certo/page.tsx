import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import type { Metadata } from "next";
import {
  CJC_COOKIE,
  isCjcVariant,
  randomCjcVariant,
} from "@/lib/ab-canetas";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Canetas do Jeito Certo",
  robots: "noindex, follow",
};

type SearchParams = { [key: string]: string | string[] | undefined };

// Teste 50/50 da Canetas do Jeito Certo. Esta rota não tem mais página: é só o
// sorteador. A página que morava aqui virou a /canetas-do-jeito-certo-a.
//  - Quem já caiu numa variante (cookie carimbado pelo middleware) volta pra
//    mesma — trocar a página no meio do teste sujaria o resultado e
//    confundiria quem já tinha visto a oferta.
//  - Quem chega novo entra no sorteio de metade pra cada.
// O link divulgado continua sendo /canetas-do-jeito-certo; as UTMs da campanha
// são repassadas inteiras, e a variante sorteada chega ao checkout em
// ?variante=<a|b> — o <Cta> a lê do próprio pathname da página de destino.
export default async function CanetasDoJeitoCertoRedirector({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const resolved = await searchParams;
  const cookieStore = await cookies();
  const seen = cookieStore.get(CJC_COOKIE)?.value;
  const variant = isCjcVariant(seen) ? seen : randomCjcVariant();

  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(resolved)) {
    if (key === "variante") continue;
    if (typeof value === "string") {
      params.append(key, value);
    } else if (Array.isArray(value)) {
      for (const v of value) params.append(key, v);
    }
  }
  params.set("variante", variant);

  redirect(`/canetas-do-jeito-certo-${variant}?${params.toString()}`);
}
