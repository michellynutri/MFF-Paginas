import { cn } from "@/lib/utils"

export function Logo({ white = false, small = false }: { white?: boolean; small?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <img
        src="/images/blindagem-logo.svg"
        alt="Blindagem"
        className={cn(
          "w-auto",
          small ? "h-6" : "h-8"
        )}
      />
    </div>
  )
}

