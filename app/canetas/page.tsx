import { redirect } from "next/navigation";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Manual S.O.S. Canetas",
  robots: "noindex, follow",
};

type SearchParams = { [key: string]: string | string[] | undefined };

// Link da bio + ManyChat. Até 22/09/2026 devolvia a pessoa à última variante
// que ela viu (cookie) ou sorteava entre a/f/vsl. Desde 23/09/2026 a A e a F
// saíram de todo sorteio: todo mundo vai pra VSL v03 — inclusive quem tem
// "a" ou "f" no cookie —, com as UTMs repassadas e ?variante=vsl-v03.
export default async function CanetasRedirector({
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
