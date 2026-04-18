import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface SectionShellProps {
  children: ReactNode
  background?: ReactNode
  className?: string
  contentClassName?: string
}

export function SectionShell({
  children,
  background,
  className,
  contentClassName,
}: SectionShellProps) {
  return (
    <section className={cn("relative overflow-hidden w-full", className)}>
      {background ? <div className="absolute inset-0 pointer-events-none">{background}</div> : null}
      <div className={cn("container mx-auto px-6 relative z-10", contentClassName)}>{children}</div>
    </section>
  )
}
