import { RodapeInstitucional } from "@/components/rodape-institucional";

export function Rodape() {
  return (
    <RodapeInstitucional tema="noite">
      <p className="font-sans text-[13px] text-cjc-texto-suave leading-[1.7]">
        Canetas do Jeito Certo
      </p>
      <p className="font-sans text-[12px] text-cjc-texto-fraco leading-[1.7] max-w-[640px] mx-auto mt-4">
        Esta sessão tem caráter educativo e nutricional. O uso de medicamentos
        GLP-1 é uma decisão médica, e o conteúdo apresentado não substitui o
        acompanhamento do seu médico ou da sua nutricionista.
      </p>
    </RodapeInstitucional>
  );
}
