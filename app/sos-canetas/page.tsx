import { redirect } from "next/navigation";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Manual S.O.S. Canetas",
  robots: "noindex, follow",
};

type SearchParams = { [key: string]: string | string[] | undefined };

// Link da campanha paga (e, na prática, também da bio).
// Desde 23/09/2026 não sorteia mais nada: a A e a F saíram de todo sorteio e
// todo mundo vai pra VSL v03, com as UTMs repassadas e ?variante=vsl-v03.
// As páginas /sos-canetas-a e /sos-canetas-f continuam de pé nas rotas delas,
// só não recebem mais tráfego daqui.
export default async function SosCanetasRedirector({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const resolved = await searchParams;

  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(resolved)) {
    if (key === "variante") continue;
    if (typeof value === "string") {
      params.append(key, value);
    } else if (Array.isArray(value)) {
      for (const v of value) params.append(key, v);
    }
  }
  params.set("variante", "vsl-v03");

  redirect(`/sos-canetas-vsl-v03?${params.toString()}`);
}
