import { Glow } from "../../canetas-do-jeito-certo-_shared/_components/Glow";

export function Mecanismo() {
  return (
    <section className="relative overflow-hidden bg-cjc-noite py-16 md:py-24 px-6 md:px-20">
      <Glow
        className="top-[-140px] right-[-100px] w-[440px] h-[440px]"
        cor="argila"
        opacidade={0.12}
      />

      <div className="max-w-[880px] mx-auto relative">
        <p className="font-cjc-display text-[30px] md:text-[44px] leading-[1.15] md:leading-[1.1] font-semibold text-cjc-texto mb-10 md:mb-12">
          Mulheres que param a caneta recuperam{" "}
          <span className="text-cjc-ambar">até 70% do peso perdido</span>{" "}
          quando não há um plano de tratamento correto.
        </p>

        <div className="font-sans text-[16px] md:text-[18px] leading-[1.75] text-cjc-texto-suave space-y-6 border-l-2 border-cjc-linha pl-6 md:pl-8">
          <p>
            A caneta segura a sua fome por você. Enquanto ela faz esse trabalho,
            o seu corpo não aprende a fazer sozinho — e é aí que mora o problema
            que aparece meses depois.
          </p>
          <p>
            Sem fome, você come muito menos. Sem a estratégia certa de proteína,
            o organismo fica sem os nutrientes que precisa e começa a
            catabolizar: ele queima músculo junto com a gordura.{" "}
            <strong className="font-semibold text-cjc-texto">
              Menos músculo significa um metabolismo em marcha lenta.
            </strong>
          </p>
          <p>
            No dia em que a medicação sai, duas coisas acontecem ao mesmo tempo.
            O seu cérebro passa a pedir por comida e você tem menos saciedade.
            Ou seja, você volta a engordar tudo de novo.
          </p>
          <p className="text-cjc-texto">
            Por isso a saída se constrói desde a primeira aplicação. Quem espera
            o último mês para pensar nisso chega atrasada.
          </p>
        </div>
      </div>
    </section>
  );
}
