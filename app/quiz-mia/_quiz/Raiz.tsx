"use client";
// Escolhe entre o quiz e a prévia de uma prancheta (?ver=<cod>, só fora da produção). Lido no navegador para a
// página continuar estática.
import { useEffect, useState } from "react";
import { Previa } from "./Previa";
import { Quiz } from "./Quiz";

const PREVIA_LIGADA = process.env.NEXT_PUBLIC_VERCEL_ENV !== "production";

export function Raiz() {
  const [ver, setVer] = useState<string | null | undefined>(undefined);
  useEffect(() => {
    setVer(PREVIA_LIGADA ? new URLSearchParams(window.location.search).get("ver") : null);
  }, []);
  if (ver === undefined) return null;
  return ver ? <Previa cod={ver} /> : <Quiz />;
}
