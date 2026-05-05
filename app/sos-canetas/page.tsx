import { redirect } from "next/navigation";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Manual S.O.S. Canetas",
  robots: "noindex, follow",
};

type SearchParams = { [key: string]: string | string[] | undefined };

const VARIANTS = ["a", "b", "c", "d", "e", "f", "g"] as const;

export default async function SosCanetasRedirector({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const resolved = await searchParams;
  const variant = VARIANTS[Math.floor(Math.random() * VARIANTS.length)];

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
