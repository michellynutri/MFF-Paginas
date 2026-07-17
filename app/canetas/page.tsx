import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import type { Metadata } from "next";
import {
  SOS_COOKIE,
  isSosVariant,
  randomSosVariant,
} from "@/lib/ab-canetas";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Manual S.O.S. Canetas",
  robots: "noindex, follow",
};

type SearchParams = { [key: string]: string | string[] | undefined };

// Link da bio + ManyChat. Se a pessoa já viu uma variante do funil (cookie
// gravado pelo middleware), devolve a MESMA página — a última que ela viu.
// Se não tem cookie (orgânico / novo dispositivo), sorteia entre a/f/vsl; o
// middleware então carimba a variante sorteada, travando a pessoa a partir daí.
export default async function CanetasRedirector({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const resolved = await searchParams;
  const cookieStore = await cookies();
  const seen = cookieStore.get(SOS_COOKIE)?.value;
  const variant = isSosVariant(seen) ? seen : randomSosVariant();

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

  redirect(`/sos-canetas-${variant}?${params.toString()}`);
}
