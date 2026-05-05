"use client";

import { CHECKOUT_URL } from "./constants";
import { handleCheckoutClick } from "./Cta";

type Props = {
  dataCta: string;
};

export function CheckoutPSLink({ dataCta }: Props) {
  return (
    <a
      href={CHECKOUT_URL}
      data-cta={dataCta}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleCheckoutClick}
      className="inline-flex items-center gap-2 mt-8 text-sos-dourado-esc font-sans text-[15px] hover:underline"
    >
      Garantir meu acesso agora
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        <path
          d="M5 12h14M14 7l5 5-5 5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
}
