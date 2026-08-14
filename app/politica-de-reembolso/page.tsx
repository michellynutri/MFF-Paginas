import { redirect } from "next/navigation";

// Provisório: a Política de Reembolso ainda não foi escrita. Até lá a rota
// existe e cai na Política de Privacidade, para que o link do rodapé (e
// qualquer lugar que já divulgue essa URL) não dê 404. Quando a página real
// chegar, basta substituir este arquivo.
export default function PoliticaDeReembolsoPage() {
  redirect("/politica-de-privacidade");
}
