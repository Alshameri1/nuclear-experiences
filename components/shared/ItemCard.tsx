import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface ItemCardProps {
  icon: ReactNode
  title: string
  titleAddon?: ReactNode
  description: string
  children?: ReactNode
  className?: string
  iconClassName?: string
  titleClassName?: string
  descriptionClassName?: string
}

export function ItemCard({ icon, title, titleAddon, description, children, className, iconClassName, titleClassName, descriptionClassName }: ItemCardProps) {
  return (
    <div className={cn("transition-colors flex flex-col gap-3 fade", className)}>
      <div className="flex flex-col gap-4">
        <div className={iconClassName}>{icon}</div>
        <article className="flex flex-col gap-2">
          <h4 className={cn("text-lg font-bold", titleClassName)}>{title}</h4>
          {titleAddon ? <div className="text-xs text-muted-foreground">{titleAddon}</div> : null}
          <p className={cn("text-sm text-muted-foreground leading-relaxed", descriptionClassName)}>
            {description}
          </p>
        </article>
      </div>
      {children ? children : null}
    </div>
  )
}
