import { Logo } from "@/components/logo"

export function Footer() {
  return (
    <footer className="bg-marrom py-8 text-center">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-3 px-5">
        <Logo white small />
        <p className="font-sans text-[13px] text-white/50">
          &copy; 2026 Michelly Silveira | Todos os direitos reservados
        </p>
      </div>
    </footer>
  )
}
