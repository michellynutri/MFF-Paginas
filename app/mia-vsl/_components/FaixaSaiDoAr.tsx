// Faixa preta do topo, igual à da Thaize: "ESTE VÍDEO SAI DO AR HOJE, dd/mm".
// A data é a do RELÓGIO DE QUEM ABRE a página (dia/mês, pt-BR), escrita por um
// <script> inline logo depois do texto — roda enquanto o HTML é lido, antes
// de pintar, então nunca aparece a data do build nem um espaço vazio. A página
// é estática: o servidor deixa o texto sem data e o cliente completa (por isso
// o suppressHydrationWarning).
export function FaixaSaiDoAr() {
  return (
    <div className="bg-black text-white">
      <p
        id="mia-sai-do-ar"
        suppressHydrationWarning
        className="mx-auto max-w-[1180px] px-4 py-3 md:py-3.5 text-center font-sans font-bold uppercase text-[17px] md:text-[20px] leading-tight tracking-[0.01em]"
      >
        ESTE VÍDEO SAI DO AR HOJE
      </p>
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(){var d=new Date().toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit"});document.getElementById("mia-sai-do-ar").textContent="ESTE V\\u00cdDEO SAI DO AR HOJE, "+d;})();`,
        }}
      />
    </div>
  );
}
