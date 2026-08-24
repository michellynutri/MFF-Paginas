import { RodapeInstitucional } from "@/components/rodape-institucional";

type Props = {
  /** "noite" (variantes A e B) ou "branco" (variante C). */
  tema?: "noite" | "branco";
};

export function Rodape({ tema = "noite" }: Props) {
  const claro = tema === "branco";

  return (
    <RodapeInstitucional tema={tema}>
      <p
        className={`font-sans text-[13px] leading-[1.7] ${
          claro ? "text-cjc-dia-texto-suave" : "text-cjc-texto-suave"
        }`}
      >
        Canetas do Jeito Certo
      </p>
      <p
        className={`font-sans text-[12px] leading-[1.7] max-w-[640px] mx-auto mt-4 ${
          claro ? "text-cjc-dia-texto-fraco" : "text-cjc-texto-fraco"
        }`}
      >
        Esta sessão tem caráter educativo e nutricional. O uso de medicamentos
        GLP-1 é uma decisão médica, e o conteúdo apresentado não substitui o
        acompanhamento do seu médico ou da sua nutricionista.
      </p>
    </RodapeInstitucional>
  );
}
