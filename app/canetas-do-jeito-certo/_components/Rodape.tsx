export function Rodape() {
  return (
    <footer className="bg-cjc-noite-esc border-t border-cjc-linha-suave py-12 md:py-14 px-6 md:px-20">
      <div className="max-w-[900px] mx-auto text-center">
        <p className="font-sans text-[13px] text-cjc-texto-suave leading-[1.7]">
          Canetas do Jeito Certo © 2026 · Michelly Silveira Fanelli · CRN-3
          36739
        </p>

        <nav
          className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mt-4"
          aria-label="Links institucionais"
        >
          {/* TODO(launch): apontar para as páginas reais. */}
          {[
            { label: "Política de Privacidade", href: "#" },
            { label: "Termos de Uso", href: "#" },
            { label: "Contato", href: "#" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-sans text-[13px] text-cjc-texto-fraco hover:text-cjc-menta transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p className="font-sans text-[12px] text-cjc-texto-fraco leading-[1.7] max-w-[640px] mx-auto mt-8 pt-8 border-t border-cjc-linha-suave">
          Esta sessão tem caráter educativo e nutricional. O uso de medicamentos
          GLP-1 é uma decisão médica, e o conteúdo apresentado não substitui o
          acompanhamento do seu médico ou da sua nutricionista.
        </p>
      </div>
    </footer>
  );
}
