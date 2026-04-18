import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  title: string
  description: string
  Icon: LucideIcon
  color: string
  className?: string
  iconClassName?: string
  titleClassName?: string
  descriptionClassName?: string
}

export default function SectionHeader({
  title,
  description,
  Icon,
  color,
  className,
  iconClassName,
  titleClassName,
  descriptionClassName,
}: SectionHeaderProps) {
  return (
    <section className={cn("pt-32 px-4", className)}>
      <div className="container mx-auto max-w-4xl text-center flex flex-col items-center gap-6">
        <div
          className={cn(
            `glass-${color} w-20 h-20 mx-auto rounded-2xl flex items-center justify-center fade`,
            iconClassName,
          )}
        >
          <Icon className="w-10 h-10" style={{ color: `var(--nuclear-${color})` }} />
        </div>
        <article className="flex flex-col items-center gap-4">
          <h1
            className={cn("text-4xl md:text-5xl font-bold fade", titleClassName)}
            style={{ color: `var(--nuclear-${color})` }}
          >
            {title}
          </h1>
          <p className={cn("text-lg text-muted-foreground max-w-2xl mx-auto fade", descriptionClassName)}>
            {description}
          </p>
        </article>
      </div>
    </section>
  )
}
