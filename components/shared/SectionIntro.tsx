import type { LucideIcon } from "lucide-react"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import Tag from "./Tag"
import { SectionTitle } from "./SectionTitle"

interface SectionIntroProps {
  badge?: string
  title: string
  description: string
  icon?: ReactNode
  Icon?: LucideIcon
  accentClassName?: string
  titleAccentClassName?: string
  accentFrom?: number
  splitToken?: string
  badgeClassName?: string
  badgeTextClassName?: string
  className?: string
  titleClassName?: string
  descriptionClassName?: string
}

export function SectionIntro({
  badge,
  title,
  description,
  icon,
  Icon,
  accentClassName,
  titleAccentClassName,
  accentFrom,
  splitToken,
  badgeClassName,
  badgeTextClassName,
  className,
  titleClassName,
  descriptionClassName,
}: SectionIntroProps) {
  const finalAccentClassName = titleAccentClassName ?? accentClassName ?? "text-nuclear-cyan"

  return (
    <div
      className={cn("flex flex-col items-center gap-6 text-center fade", className)}
    >
      {badge ? (
        <div
          className="inline-flex"
        >
          <Tag
            text={badge}
            Icon={Icon}
            icon={icon}
            color={badgeTextClassName ?? finalAccentClassName}
            className={badgeClassName}
            textClassName={badgeTextClassName}
          />
        </div>
      ) : null}

      <SectionTitle
        title={title}
        accentClassName={finalAccentClassName}
        accentFrom={accentFrom}
        splitToken={splitToken}
        className={titleClassName}
      />

      <p className={cn("text-xl text-muted-foreground max-w-2xl mx-auto", descriptionClassName)}>
        {description}
      </p>
    </div>
  )
}
