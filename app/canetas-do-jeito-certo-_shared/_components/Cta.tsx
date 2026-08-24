"use client";

import { CHECKOUT_URL, OFFER_ANCHOR } from "./constants";

type CtaVariant = "menta" | "menta-grande" | "contorno" | "dia" | "dia-grande";
type CtaTarget = "anchor" | "checkout";

type CtaProps = {
  children: React.ReactNode;
  variant?: CtaVariant;
  to?: CtaTarget;
  dataCta: string;
  className?: string;
  ariaLabel?: string;
  checkoutUrl?: string;
};

const baseStyles =
  "inline-flex items-center justify-center text-center rounded-full font-sans font-semibold tracking-wide transition-all duration-200 ease-out hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4";

const variantStyles: Record<CtaVariant, string> = {
  menta:
    "bg-cjc-menta text-cjc-noite-esc px-8 md:px-11 py-5 md:py-[22px] text-[15px] md:text-[17px] shadow-[0_10px_30px_rgba(127,227,168,0.22)] hover:bg-cjc-menta-esc hover:shadow-[0_14px_38px_rgba(127,227,168,0.3)] focus-visible:outline-cjc-menta",
  "menta-grande":
    "bg-cjc-menta text-cjc-noite-esc px-10 md:px-16 py-6 md:py-7 text-[17px] md:text-[20px] shadow-[0_14px_44px_rgba(127,227,168,0.28)] hover:bg-cjc-menta-esc hover:shadow-[0_18px_54px_rgba(127,227,168,0.36)] focus-visible:outline-cjc-menta",
  contorno:
    "border border-cjc-menta/50 text-cjc-menta px-8 md:px-11 py-5 md:py-[22px] text-[15px] md:text-[17px] hover:bg-cjc-menta/10 focus-visible:outline-cjc-menta",
  // Fundo branco (variante C): a menta clara do tema noturno tem 1,7:1 sobre
  // branco e o botão sumia. Aqui a mesma família desce para o verde profundo,
  // com texto branco — 5,4:1, e continua lendo como a cor da marca.
  dia: "bg-cjc-dia-menta text-white px-8 md:px-11 py-5 md:py-[22px] text-[15px] md:text-[17px] shadow-[0_10px_30px_rgba(14,122,74,0.22)] hover:bg-cjc-dia-menta-esc hover:shadow-[0_14px_38px_rgba(14,122,74,0.3)] focus-visible:outline-cjc-dia-menta",
  "dia-grande":
    "bg-cjc-dia-menta text-white px-10 md:px-16 py-6 md:py-7 text-[17px] md:text-[20px] shadow-[0_14px_44px_rgba(14,122,74,0.26)] hover:bg-cjc-dia-menta-esc hover:shadow-[0_18px_54px_rgba(14,122,74,0.34)] focus-visible:outline-cjc-dia-menta",
};

export function handleCheckoutClick(
  e: React.MouseEvent<HTMLAnchorElement>,
  checkoutUrl: string = CHECKOUT_URL,
) {
  e.preventDefault();
  const url = new URL(checkoutUrl);
  const incoming = new URLSearchParams(window.location.search);
  incoming.forEach((value, key) => url.searchParams.append(key, value));
  // Deixa o sufixo pronto pra quando a rota virar teste A/B
  // (/canetas-do-jeito-certo-a, -b...), como já acontece na /sos-canetas.
  const variantMatch = window.location.pathname.match(
    /\/canetas-do-jeito-certo-([a-z0-9-]+)/,
  );
  url.searchParams.set("variante", variantMatch ? variantMatch[1] : "cjc");
  window.open(url.toString(), "_blank", "noopener,noreferrer");
}

export function Cta({
  children,
  variant = "menta",
  to = "anchor",
  dataCta,
  className = "",
  ariaLabel,
  checkoutUrl,
}: CtaProps) {
  const isCheckout = to === "checkout";
  const resolvedCheckout = checkoutUrl ?? CHECKOUT_URL;
  const href = isCheckout ? resolvedCheckout : OFFER_ANCHOR;
  const externalProps = isCheckout
    ? {
        target: "_blank",
        rel: "noopener noreferrer",
        onClick: (e: React.MouseEvent<HTMLAnchorElement>) =>
          handleCheckoutClick(e, resolvedCheckout),
      }
    : undefined;

  return (
    <a
      href={href}
      data-cta={dataCta}
      aria-label={ariaLabel}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...externalProps}
    >
      {children}
    </a>
  );
}
