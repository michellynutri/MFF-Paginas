import { CHECKOUT_URL, OFFER_ANCHOR } from "./constants";

type CtaVariant = "dourado" | "terracota" | "terracota-final";
type CtaTarget = "anchor" | "checkout";

type CtaProps = {
  children: React.ReactNode;
  variant?: CtaVariant;
  to?: CtaTarget;
  dataCta: string;
  className?: string;
  ariaLabel?: string;
};

const baseStyles =
  "inline-flex items-center justify-center rounded-full font-sans font-semibold tracking-wide transition-all duration-200 ease-out hover:translate-y-[-2px] focus-visible:outline-2 focus-visible:outline-offset-4";

const variantStyles: Record<CtaVariant, string> = {
  dourado:
    "bg-sos-dourado-esc text-creme px-8 md:px-11 py-5 md:py-[22px] text-[16px] md:text-[18px] shadow-[0_8px_24px_rgba(156,126,69,0.28)] hover:shadow-[0_12px_32px_rgba(156,126,69,0.35)] focus-visible:outline-sos-dourado-esc",
  terracota:
    "bg-sos-terracota text-creme px-8 md:px-11 py-5 md:py-[22px] text-[16px] md:text-[18px] shadow-[0_10px_30px_rgba(197,107,74,0.32)] hover:shadow-[0_14px_38px_rgba(197,107,74,0.4)] focus-visible:outline-sos-terracota",
  "terracota-final":
    "bg-sos-terracota text-creme px-10 md:px-16 py-6 md:py-7 text-[18px] md:text-[20px] shadow-[0_12px_40px_rgba(197,107,74,0.4)] hover:shadow-[0_16px_48px_rgba(197,107,74,0.48)] focus-visible:outline-sos-terracota",
};

export function Cta({
  children,
  variant = "dourado",
  to = "anchor",
  dataCta,
  className = "",
  ariaLabel,
}: CtaProps) {
  const isCheckout = to === "checkout";
  const href = isCheckout ? CHECKOUT_URL : OFFER_ANCHOR;
  const externalProps = isCheckout
    ? { target: "_blank", rel: "noopener noreferrer" }
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
