import { PRECO } from "../../canetas-do-jeito-certo-_shared/_components/constants";

// Seção 12 — reversão de risco. Nas variantes A/C a garantia é uma linha
// dentro do fechamento; aqui ela é seção própria e vem logo depois do preço,
// que é onde a objeção nasce. Numa oferta de R$ 27 o risco percebido não é o
// dinheiro, é o de ser mais uma coisa que ela compra e não usa — e a garantia
// só desarma isso se estiver encostada no botão.
//
// "e você fica com a gravação mesmo assim" é a parte que faz a frase funcionar.
// Não tirar numa edição de enxugamento: é ela que transforma a garantia em
// risco negativo.

export function Garantia() {
  return (
    <section className="bg-cjc-dia py-16 md:py-24 px-6 md:px-20">
      <div className="max-w-[760px] mx-auto">
        <div className="rounded-3xl border-2 border-cjc-dia-menta/25 bg-cjc-dia-superficie p-8 md:p-12">
          <h2 className="font-cjc-display text-[29px] md:text-[42px] leading-[1.12] md:leading-[1.06] font-semibold text-cjc-dia-texto mb-8">
            O risco é <em className="italic text-cjc-dia-menta">meu.</em>
          </h2>

          <div className="font-sans text-[16px] md:text-[18px] leading-[1.75] text-cjc-dia-texto-suave space-y-5">
            <p>
              Participa do workshop ao vivo e leva os materiais. Se você sentir
              que não valeu cada centavo dos {PRECO}, me manda uma mensagem que
              eu devolvo o seu dinheiro —{" "}
              <strong className="font-semibold text-cjc-dia-texto">
                e você fica com a gravação mesmo assim.
              </strong>
            </p>
            <p className="text-cjc-dia-texto font-medium">Sem pergunta.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
