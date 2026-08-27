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

// Sorteador da VSL. Esta rota não tem mais página: só decide pra qual versão
// mandar. A página que morava aqui virou a /sos-canetas-vsl-v03.
//  - Quem já caiu numa versão (cookie carimbado pelo middleware) volta pra
//    mesma — trocar de VSL no meio do teste sujaria o resultado e confundiria
//    quem já começou a assistir.
//  - Quem chega novo entra no sorteio entre as versões de SOS_VSL_VERSIONS.
// Desde 27/08/2026 sobrou uma versão só na lista: a v03 (a página original).
// Com uma versão só, o sorteio não sorteia nada — manda todo mundo pra v03.
// Quem tiver no cookie uma versão que saiu da lista (v01, v02, v04) também vai
// pra lá na visita seguinte. Pôr/tirar versão é mexer em SOS_VSL_VERSIONS (e no
// matcher do middleware).
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
