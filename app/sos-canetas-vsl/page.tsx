import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import type { Metadata } from "next";
import {
  SOS_VSL_COOKIE,
  isSosVslVersion,
  randomSosVslVersion,
} from "@/lib/ab-canetas";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Manual S.O.S. Canetas",
  robots: "noindex, follow",
};

type SearchParams = { [key: string]: string | string[] | undefined };

// Teste 33/33/33 da VSL. Esta rota não tem mais página: é só o sorteador.
// A página que morava aqui virou a /sos-canetas-vsl-v03.
//  - Quem já caiu numa versão (cookie carimbado pelo middleware) volta pra
//    mesma — trocar de VSL no meio do teste sujaria o resultado e confundiria
//    quem já começou a assistir.
//  - Quem chega novo entra no sorteio de 1/3 pra cada.
// O link divulgado continua sendo /sos-canetas-vsl; as UTMs da campanha são
// repassadas inteiras e a versão sorteada vai em ?variante=vsl-vXX.
export default async function SosCanetasVslRedirector({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const resolved = await searchParams;
  const cookieStore = await cookies();
  const seen = cookieStore.get(SOS_VSL_COOKIE)?.value;
  const version = isSosVslVersion(seen) ? seen : randomSosVslVersion();

  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(resolved)) {
    if (key === "variante") continue;
    if (typeof value === "string") {
      params.append(key, value);
    } else if (Array.isArray(value)) {
      for (const v of value) params.append(key, v);
    }
  }
  params.set("variante", `vsl-${version}`);

  redirect(`/sos-canetas-vsl-${version}?${params.toString()}`);
}
