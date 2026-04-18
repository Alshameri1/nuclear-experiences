import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface ContentSectionProps {
  title: ReactNode
  description?: ReactNode
  children: ReactNode
  className?: string
}

export function ContentSection({ title, description, children, className }: ContentSectionProps) {
  return (
    <div className={cn("glass-dark rounded-3xl p-8 flex flex-col gap-8", className)}>
      <h3 className="text-2xl font-bold text-center">{title}</h3>
      {description ? <p className="text-center text-muted-foreground">{description}</p> : null}
      {children}
    </div>
  )
}
