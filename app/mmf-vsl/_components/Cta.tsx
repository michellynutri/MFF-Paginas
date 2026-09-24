"use client";

import { CHECKOUT_URL_MMF_VSL } from "./constants";

type Props = {
  children: React.ReactNode;
  dataCta: string;
  /** vai pro checkout com a variante da headline: "mmf-vsl-h1" */
  variante: string;
  className?: string;
};

// Mesma regra das VSLs do SOS: checkout NA MESMA ABA (window.open some no
// navegador interno do Instagram/Facebook), levando as UTMs da página e a
// variante. Se o JS falhar, o href ainda leva pro checkout (sem UTMs).
export function Cta({ children, dataCta, variante, className = "" }: Props) {
  function irProCheckout(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    const url = new URL(CHECKOUT_URL_MMF_VSL);
    new URLSearchParams(window.location.search).forEach((value, key) =>
      url.searchParams.append(key, value),
    );
    url.searchParams.set("variante", variante);
    window.location.assign(url.toString());
  }

  return (
    <a
      href={CHECKOUT_URL_MMF_VSL}
      data-cta={dataCta}
      onClick={irProCheckout}
      className={`inline-flex items-center justify-center text-center rounded-full bg-[#F2C230] text-texto font-sans font-bold tracking-wide px-8 md:px-12 py-5 md:py-[22px] text-[16px] md:text-[18px] shadow-[0_10px_28px_rgba(214,165,20,0.38)] transition-all duration-200 ease-out hover:translate-y-[-2px] hover:bg-[#F5CB45] hover:shadow-[0_14px_36px_rgba(214,165,20,0.46)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9A020] ${className}`}
    >
      {children}
    </a>
  );
}

/** Linha de apoio embaixo do botão. */
export function CtaNota({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-sans text-[13px] text-marrom text-center mt-4">
      {children}
    </p>
  );
}
