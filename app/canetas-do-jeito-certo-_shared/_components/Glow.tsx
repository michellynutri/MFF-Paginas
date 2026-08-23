type GlowProps = {
  className?: string;
  cor?: "menta" | "ambar" | "argila";
  opacidade?: number;
};

const cores = {
  menta: "127, 227, 168",
  ambar: "224, 169, 82",
  argila: "208, 129, 99",
} as const;

/**
 * Halo suave no fundo escuro — o ornamento desta identidade, no lugar das
 * folhas da /sos-canetas. Puramente decorativo.
 */
export function Glow({
  className = "",
  cor = "menta",
  opacidade = 0.14,
}: GlowProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full blur-[90px] ${className}`}
      style={{
        background: `radial-gradient(circle, rgba(${cores[cor]}, ${opacidade}) 0%, rgba(${cores[cor]}, 0) 70%)`,
      }}
    />
  );
}
