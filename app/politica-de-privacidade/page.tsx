import type { Metadata } from "next";
import type { ReactNode } from "react";
import { RodapeInstitucional } from "@/components/rodape-institucional";
import { CNPJ, CRN, EMAIL_SUPORTE } from "@/lib/institucional";

export const metadata: Metadata = {
  title: "Política de Privacidade | Método Metabólico Feminino",
  description:
    "Como o Método Metabólico Feminino coleta, usa, compartilha e protege os dados pessoais de quem visita o site, compra nossos produtos ou se inscreve em conteúdos gratuitos. Em conformidade com a LGPD.",
  robots: "index, follow",
};

const ATUALIZACAO = "14 de agosto de 2026";
const EMAIL = EMAIL_SUPORTE;

const SECOES = [
  { id: "controlador", titulo: "Quem é o controlador dos seus dados" },
  { id: "dados", titulo: "Quais dados coletamos" },
  { id: "finalidades", titulo: "Para que usamos seus dados" },
  { id: "base-legal", titulo: "Com que base legal tratamos seus dados" },
  { id: "whatsapp", titulo: "Comunicações por WhatsApp" },
  { id: "email", titulo: "Comunicações por e-mail" },
  { id: "compartilhamento", titulo: "Com quem compartilhamos seus dados" },
  { id: "cookies", titulo: "Cookies e tecnologias de rastreamento" },
  { id: "retencao", titulo: "Por quanto tempo guardamos seus dados" },
  { id: "direitos", titulo: "Seus direitos" },
  { id: "seguranca", titulo: "Segurança" },
  { id: "menores", titulo: "Menores de idade" },
  { id: "alteracoes", titulo: "Alterações nesta Política" },
  { id: "contato", titulo: "Contato" },
];

// Palavras que disparam o descadastramento automático no WhatsApp.
const PALAVRAS_OPT_OUT = [
  "PARAR",
  "SAIR",
  "CANCELAR",
  "STOP",
  "DESCADASTRAR",
  "REMOVER",
];

export default function PoliticaDePrivacidadePage() {
  return (
    <main className="bg-creme min-h-screen">
      {/* ---------- Cabeçalho ---------- */}
      <header className="border-b border-borda bg-branco">
        <div className="max-w-[820px] mx-auto px-6 md:px-8 pt-14 md:pt-20 pb-10 md:pb-14">
          <p className="font-sans text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.16em] text-verde-esc">
            Método Metabólico Feminino
          </p>

          <h1 className="font-serif text-[34px] md:text-[52px] leading-[1.12] text-texto mt-3">
            Política de Privacidade
          </h1>

          <p className="font-sans text-[13px] text-marrom mt-5">
            Última atualização:{" "}
            <span className="font-semibold text-verde-esc">{ATUALIZACAO}</span>
          </p>

          <div className="mt-8 space-y-4 font-sans text-[16px] md:text-[17px] leading-[1.75] text-texto/85">
            <p>
              Esta Política de Privacidade descreve como o{" "}
              <strong className="font-semibold text-texto">
                Método Metabólico Feminino
              </strong>
              , de titularidade de{" "}
              <strong className="font-semibold text-texto">
                Michelly Silveira Fanelli
              </strong>{" "}
              (nutricionista, {CRN}), inscrita no CNPJ {CNPJ}, trata os
              dados pessoais de quem visita o site{" "}
              <span className="font-medium text-verde-esc">
                metodometabolicofeminino.com.br
              </span>
              , adquire nossos produtos ou se inscreve em nossos conteúdos
              gratuitos.
            </p>
            <p>
              O tratamento de dados segue a Lei nº 13.709/2018 (Lei Geral de
              Proteção de Dados — LGPD).
            </p>
            <p>
              Ao fornecer seus dados, você declara ter lido e compreendido esta
              Política.
            </p>
          </div>
        </div>
      </header>

      <div className="max-w-[820px] mx-auto px-6 md:px-8 py-12 md:py-16">
        {/* ---------- Sumário ---------- */}
        <nav
          aria-label="Sumário da política"
          className="rounded-2xl border border-borda bg-branco p-6 md:p-8 shadow-[0_4px_24px_rgba(98,76,50,0.06)]"
        >
          <h2 className="font-sans text-[12px] font-semibold uppercase tracking-[0.14em] text-marrom">
            Nesta página
          </h2>
          <ol className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {SECOES.map((secao, i) => (
              <li key={secao.id} className="flex gap-3">
                <span className="font-sans text-[13px] font-semibold text-verde-vita tabular-nums pt-[2px]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <a
                  href={`#${secao.id}`}
                  className="font-sans text-[15px] leading-[1.5] text-texto/80 hover:text-verde-esc underline-offset-4 hover:underline transition-colors"
                >
                  {secao.titulo}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* ---------- 1. Controlador ---------- */}
        <Secao numero={1} id="controlador" titulo="Quem é o controlador dos seus dados">
          <P>
            <strong className="font-semibold text-texto">
              Michelly Silveira Fanelli
            </strong>{" "}
            — CNPJ {CNPJ}, responsável pelas decisões sobre o tratamento dos
            seus dados pessoais.
          </P>
          <Destaque titulo="Contato para assuntos de privacidade">
            <LinkEmail />
          </Destaque>
        </Secao>

        {/* ---------- 2. Dados coletados ---------- */}
        <Secao numero={2} id="dados" titulo="Quais dados coletamos">
          <Subtitulo>2.1. Dados que você nos fornece</Subtitulo>
          <Tabela
            colunas={["Dado", "Quando é coletado"]}
            linhas={[
              ["Nome completo", "Cadastro em conteúdo gratuito ou compra"],
              ["E-mail", "Cadastro em conteúdo gratuito ou compra"],
              [
                "Telefone com DDD (WhatsApp)",
                "Cadastro em conteúdo gratuito ou compra",
              ],
              [
                "Dados de cobrança (CPF, endereço)",
                "Somente na compra, coletados e tratados pela plataforma de pagamento",
              ],
            ]}
          />
          <P>
            <strong className="font-semibold text-texto">
              Não coletamos dados de cartão de crédito.
            </strong>{" "}
            Esses dados são inseridos diretamente na plataforma de pagamento e
            nunca transitam pelos nossos sistemas.
          </P>

          <Subtitulo>2.2. Dados gerados pelo seu uso</Subtitulo>
          <Lista
            itens={[
              "Registro de envio, entrega e leitura das mensagens que enviamos por e-mail e WhatsApp",
              "Aberturas e cliques nos e-mails",
              "Respostas que você nos envia por WhatsApp",
              "Participação nos webinários e nos grupos de WhatsApp das turmas",
              "Dados de navegação no site (páginas visitadas, origem do acesso, identificadores de cookies)",
            ]}
          />

          <Subtitulo>2.3. Dados de saúde</Subtitulo>
          <P>
            Informações sobre sua saúde, hábitos alimentares ou condição física
            são consideradas{" "}
            <strong className="font-semibold text-texto">
              dados pessoais sensíveis
            </strong>{" "}
            pela LGPD e só são tratadas quando você as fornece voluntariamente,
            mediante{" "}
            <strong className="font-semibold text-texto">
              consentimento específico e destacado
            </strong>
            , e exclusivamente para a finalidade de prestação do serviço de
            nutrição contratado. Esses dados não são usados para publicidade nem
            compartilhados com terceiros para fins comerciais.
          </P>
        </Secao>

        {/* ---------- 3. Finalidades ---------- */}
        <Secao numero={3} id="finalidades" titulo="Para que usamos seus dados">
          <Lista
            itens={[
              <>
                <Forte>Entregar o produto ou serviço contratado</Forte> — acesso
                a conteúdos, aulas, webinários e grupos
              </>,
              <>
                <Forte>Enviar comunicações sobre o que você contratou</Forte> —
                lembretes de aula, links de acesso, avisos de replay, suporte
              </>,
              <>
                <Forte>Enviar conteúdos e ofertas</Forte> sobre nossos produtos,
                por e-mail e WhatsApp, quando você consentiu em recebê-los
              </>,
              <>
                <Forte>Dar suporte</Forte> e responder às suas dúvidas
              </>,
              <>
                <Forte>Melhorar nossos conteúdos e campanhas</Forte>, analisando
                de forma agregada o que é aberto, clicado e assistido
              </>,
              <>
                <Forte>Cumprir obrigações legais</Forte>, fiscais e regulatórias
              </>,
            ]}
          />
        </Secao>

        {/* ---------- 4. Bases legais ---------- */}
        <Secao
          numero={4}
          id="base-legal"
          titulo="Com que base legal tratamos seus dados"
        >
          <Tabela
            colunas={["Finalidade", "Base legal (LGPD)"]}
            linhas={[
              ["Entregar o produto contratado", "Execução de contrato (art. 7º, V)"],
              [
                "Comunicações sobre o produto que você comprou",
                "Execução de contrato (art. 7º, V)",
              ],
              ["Marketing por e-mail e WhatsApp", "Consentimento (art. 7º, I)"],
              [
                "Dados de saúde",
                "Consentimento específico e destacado (art. 11, I)",
              ],
              [
                "Medição de audiência e melhoria dos conteúdos",
                "Legítimo interesse (art. 7º, IX)",
              ],
              [
                "Obrigações fiscais e contábeis",
                "Cumprimento de obrigação legal (art. 7º, II)",
              ],
            ]}
          />
        </Secao>

        {/* ---------- 5. WhatsApp ---------- */}
        <Secao numero={5} id="whatsapp" titulo="Comunicações por WhatsApp">
          <P>
            Enviamos mensagens por WhatsApp usando a{" "}
            <strong className="font-semibold text-texto">
              WhatsApp Business Platform
            </strong>
            , serviço da Meta Platforms, Inc.
          </P>
          <P>
            <strong className="font-semibold text-texto">
              Você só recebe essas mensagens se tiver consentido
            </strong>{" "}
            — no momento da compra ou do cadastro em um conteúdo gratuito. O
            consentimento é registrado e pode ser revogado a qualquer momento.
          </P>

          <div className="mt-7 rounded-2xl border border-verde-vita/35 bg-verde-vita/[0.07] p-6 md:p-7">
            <h3 className="font-serif text-[20px] md:text-[22px] leading-[1.3] text-verde-esc">
              Para parar de receber
            </h3>
            <p className="font-sans text-[15px] md:text-[16px] leading-[1.7] text-texto/85 mt-2">
              Responda a qualquer mensagem nossa com uma destas palavras:
            </p>
            <ul className="flex flex-wrap gap-2 mt-4">
              {PALAVRAS_OPT_OUT.map((palavra) => (
                <li
                  key={palavra}
                  className="rounded-full bg-branco border border-verde-vita/45 px-4 py-1.5 font-sans text-[13px] font-semibold tracking-[0.05em] text-verde-esc"
                >
                  {palavra}
                </li>
              ))}
            </ul>
            <p className="font-sans text-[15px] leading-[1.7] text-texto/80 mt-5">
              O descadastramento é automático e imediato. Você continuará
              recebendo apenas mensagens essenciais sobre produtos que já
              comprou, como o link de acesso a uma aula.
            </p>
          </div>

          <P>
            O conteúdo das conversas trafega pela infraestrutura da Meta e está
            sujeito também à política de privacidade do WhatsApp.
          </P>
        </Secao>

        {/* ---------- 6. E-mail ---------- */}
        <Secao numero={6} id="email" titulo="Comunicações por e-mail">
          <P>
            Todo e-mail de conteúdo ou oferta traz um link de descadastramento
            no rodapé. O efeito é imediato e você não precisa justificar.
          </P>
        </Secao>

        {/* ---------- 7. Compartilhamento ---------- */}
        <Secao
          numero={7}
          id="compartilhamento"
          titulo="Com quem compartilhamos seus dados"
        >
          <P>
            Não vendemos seus dados. Compartilhamos apenas com prestadores de
            serviço que viabilizam a operação, cada um tratando os dados sob
            nossa instrução:
          </P>
          <Tabela
            colunas={["Prestador", "Para quê", "Onde ficam os dados"]}
            linhas={[
              [
                <Forte key="g">Greenn</Forte>,
                "Processamento de pagamentos e checkout",
                "Brasil",
              ],
              [
                <Forte key="k">Kit (ConvertKit)</Forte>,
                "Envio e gestão de e-mails",
                "Estados Unidos",
              ],
              [
                <Forte key="m">Meta Platforms</Forte>,
                "Envio de mensagens por WhatsApp e mensuração de anúncios",
                "Estados Unidos",
              ],
              [
                <Forte key="s">Supabase</Forte>,
                "Banco de dados dos cadastros e do histórico de mensagens",
                "Estados Unidos",
              ],
              [
                <Forte key="r">Railway / n8n</Forte>,
                "Automação dos envios",
                "Estados Unidos",
              ],
              [
                <Forte key="go">Google</Forte>,
                "Análise de audiência do site",
                "Estados Unidos",
              ],
            ]}
          />
          <P>
            Também podemos compartilhar dados com autoridades públicas quando
            houver obrigação legal ou ordem judicial.
          </P>

          <Subtitulo>Transferência internacional</Subtitulo>
          <P>
            Parte dos prestadores acima está fora do Brasil. Nesses casos, a
            transferência ocorre com base em cláusulas contratuais e garantias
            de proteção equivalentes às da LGPD (art. 33).
          </P>
        </Secao>

        {/* ---------- 8. Cookies ---------- */}
        <Secao
          numero={8}
          id="cookies"
          titulo="Cookies e tecnologias de rastreamento"
        >
          <P>
            Usamos cookies e tecnologias semelhantes, incluindo o{" "}
            <strong className="font-semibold text-texto">Pixel da Meta</strong> e
            ferramentas de análise, para entender como as pessoas chegam ao
            site, medir a eficácia dos anúncios e apresentar ofertas mais
            relevantes.
          </P>
          <P>
            Você pode bloquear ou apagar cookies nas configurações do seu
            navegador. Alguns recursos do site podem deixar de funcionar
            corretamente.
          </P>
        </Secao>

        {/* ---------- 9. Retenção ---------- */}
        <Secao
          numero={9}
          id="retencao"
          titulo="Por quanto tempo guardamos seus dados"
        >
          <Lista
            itens={[
              <>
                <Forte>Enquanto você for nosso cliente ou inscrito</Forte>, e
                por até <Forte>5 anos</Forte> após o último contato, para
                eventual defesa em processos
              </>,
              <>
                <Forte>Dados fiscais</Forte>, pelo prazo exigido pela
                legislação tributária
              </>,
              <>
                <Forte>Após o descadastramento</Forte>, mantemos apenas o mínimo
                necessário para garantir que você não volte a ser contatado
              </>,
            ]}
          />
        </Secao>

        {/* ---------- 10. Direitos ---------- */}
        <Secao numero={10} id="direitos" titulo="Seus direitos">
          <P>Pela LGPD (art. 18), você pode a qualquer momento:</P>
          <Lista
            itens={[
              <>
                <Forte>Confirmar</Forte> se tratamos seus dados e{" "}
                <Forte>acessar</Forte> o que temos
              </>,
              <>
                <Forte>Corrigir</Forte> dados incompletos, inexatos ou
                desatualizados
              </>,
              <>
                <Forte>Solicitar anonimização, bloqueio ou eliminação</Forte> de
                dados desnecessários ou tratados em desconformidade com a lei
              </>,
              <>
                <Forte>Solicitar a portabilidade</Forte> dos seus dados a outro
                fornecedor
              </>,
              <>
                <Forte>Revogar o consentimento</Forte> e pedir a eliminação dos
                dados tratados com base nele
              </>,
              <>
                <Forte>Se opor</Forte> a um tratamento feito com base em
                legítimo interesse
              </>,
              <>
                <Forte>Ser informado</Forte> sobre com quem compartilhamos seus
                dados
              </>,
            ]}
          />
          <Destaque titulo="Para exercer qualquer desses direitos">
            <p className="font-sans text-[15px] md:text-[16px] leading-[1.7] text-texto/85">
              Escreva para <LinkEmail />. Respondemos em até{" "}
              <strong className="font-semibold text-texto">15 dias</strong>.
              Podemos pedir informações que confirmem sua identidade antes de
              atender, para proteger seus próprios dados.
            </p>
          </Destaque>
        </Secao>

        {/* ---------- 11. Segurança ---------- */}
        <Secao numero={11} id="seguranca" titulo="Segurança">
          <P>
            Adotamos medidas técnicas e administrativas para proteger seus
            dados, incluindo controle de acesso restrito, credenciais
            individuais para cada sistema e tráfego criptografado. Nenhum
            sistema é totalmente imune, e em caso de incidente de segurança
            relevante comunicaremos você e a Autoridade Nacional de Proteção de
            Dados (ANPD), conforme a lei.
          </P>
        </Secao>

        {/* ---------- 12. Menores ---------- */}
        <Secao numero={12} id="menores" titulo="Menores de idade">
          <P>
            Nossos produtos são destinados a maiores de 18 anos. Não coletamos
            intencionalmente dados de crianças e adolescentes. Se identificarmos
            um cadastro nessa condição, os dados serão eliminados.
          </P>
        </Secao>

        {/* ---------- 13. Alterações ---------- */}
        <Secao numero={13} id="alteracoes" titulo="Alterações nesta Política">
          <P>
            Podemos atualizar esta Política a qualquer momento. A data da última
            atualização fica sempre no topo da página. Mudanças relevantes serão
            comunicadas por e-mail.
          </P>
        </Secao>

        {/* ---------- 14. Contato ---------- */}
        <Secao numero={14} id="contato" titulo="Contato">
          <div className="rounded-2xl bg-verde-esc p-7 md:p-9 shadow-[0_8px_28px_rgba(74,95,80,0.22)]">
            <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.14em] text-verde-vita">
              E-mail
            </p>
            <a
              href={`mailto:${EMAIL}`}
              className="block font-serif text-[20px] md:text-[26px] leading-[1.3] text-creme mt-2 underline-offset-4 hover:underline break-words"
            >
              {EMAIL}
            </a>
            <p className="font-sans text-[15px] leading-[1.7] text-creme/80 mt-6 pt-6 border-t border-creme/20">
              <strong className="font-semibold text-creme">
                Encarregado de Proteção de Dados (DPO):
              </strong>{" "}
              as solicitações relativas a dados pessoais são recebidas e
              tratadas pelo mesmo endereço acima.
            </p>
          </div>
        </Secao>

      </div>

      <RodapeInstitucional tema="creme" />
    </main>
  );
}

/* ============================================================
   Componentes de apoio — só desta página.
   ============================================================ */

function Secao({
  numero,
  id,
  titulo,
  children,
}: {
  numero: number;
  id: string;
  titulo: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="mt-14 md:mt-20 scroll-mt-8 border-t border-borda pt-10 md:pt-12 first-of-type:border-t-0"
    >
      <h2 className="font-serif text-[26px] md:text-[34px] leading-[1.2] text-texto flex gap-3 md:gap-4">
        <span className="font-sans text-[13px] md:text-[15px] font-semibold text-verde-vita tabular-nums pt-[6px] md:pt-[12px] shrink-0">
          {String(numero).padStart(2, "0")}
        </span>
        <span>{titulo}</span>
      </h2>
      <div className="mt-5 md:mt-6">{children}</div>
    </section>
  );
}

function Subtitulo({ children }: { children: ReactNode }) {
  return (
    <h3 className="font-serif text-[19px] md:text-[22px] leading-[1.3] text-verde-esc mt-9 first:mt-0">
      {children}
    </h3>
  );
}

function P({ children }: { children: ReactNode }) {
  return (
    <p className="font-sans text-[16px] md:text-[17px] leading-[1.75] text-texto/85 mt-5 first:mt-0">
      {children}
    </p>
  );
}

function Forte({ children }: { children: ReactNode }) {
  return <strong className="font-semibold text-texto">{children}</strong>;
}

function Lista({ itens }: { itens: ReactNode[] }) {
  return (
    <ul className="mt-5 space-y-3">
      {itens.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span
            aria-hidden="true"
            className="mt-[10px] h-[6px] w-[6px] rounded-full bg-verde-vita shrink-0"
          />
          <span className="font-sans text-[16px] md:text-[17px] leading-[1.75] text-texto/85">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

function Destaque({
  titulo,
  children,
}: {
  titulo: string;
  children: ReactNode;
}) {
  return (
    <div className="mt-6 rounded-2xl border border-borda bg-branco p-6 md:p-7 shadow-[0_4px_24px_rgba(98,76,50,0.06)]">
      <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.12em] text-marrom">
        {titulo}
      </p>
      <div className="mt-3">{children}</div>
    </div>
  );
}

function LinkEmail() {
  return (
    <a
      href={`mailto:${EMAIL}`}
      className="font-sans text-[16px] md:text-[17px] font-medium text-verde-esc underline underline-offset-4 decoration-verde-vita hover:decoration-verde-esc transition-colors break-words"
    >
      {EMAIL}
    </a>
  );
}

/**
 * Tabela responsiva: no desktop vira grid com cabeçalho; no mobile cada linha
 * vira um bloco empilhado, com o nome da coluna repetido como rótulo — evita
 * scroll horizontal, que é onde tabela de política costuma quebrar no celular.
 */
function Tabela({
  colunas,
  linhas,
}: {
  colunas: string[];
  linhas: ReactNode[][];
}) {
  const grade =
    colunas.length === 3
      ? "md:grid-cols-[0.9fr_1.5fr_0.8fr]"
      : "md:grid-cols-[1fr_1.25fr]";

  return (
    <div className="mt-6 rounded-2xl border border-borda bg-branco overflow-hidden shadow-[0_4px_24px_rgba(98,76,50,0.06)]">
      <div className={`hidden md:grid ${grade} bg-creme border-b border-borda`}>
        {colunas.map((coluna) => (
          <div
            key={coluna}
            className="px-5 py-3 font-sans text-[12px] font-semibold uppercase tracking-[0.1em] text-verde-esc"
          >
            {coluna}
          </div>
        ))}
      </div>

      {linhas.map((linha, i) => (
        <div
          key={i}
          className={`md:grid ${grade} ${i > 0 ? "border-t border-borda" : ""} ${
            i % 2 === 1 ? "md:bg-creme/40" : ""
          }`}
        >
          {linha.map((celula, j) => (
            <div key={j} className="px-5 pt-4 pb-1 md:py-4 last:pb-4">
              <span className="md:hidden block font-sans text-[11px] font-semibold uppercase tracking-[0.1em] text-marrom/70 mb-1">
                {colunas[j]}
              </span>
              <span className="font-sans text-[15px] md:text-[16px] leading-[1.65] text-texto/85">
                {celula}
              </span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
