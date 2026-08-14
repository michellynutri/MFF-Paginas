import { redirect } from "next/navigation";

// Provisório: os Termos de Uso ainda não foram escritos. Até lá a rota existe
// e cai na Política de Privacidade, para que o link do rodapé (e qualquer
// lugar que já divulgue essa URL) não dê 404. Quando a página real chegar,
// basta substituir este arquivo.
export default function TermosDeUsoPage() {
  redirect("/politica-de-privacidade");
}
