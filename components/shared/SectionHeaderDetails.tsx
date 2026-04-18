import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import Tag from "./Tag"
import { SectionTitle } from "./SectionTitle"

interface SectionHeaderDetailsProps {
  title: string
  badge: string
  description: string
  Icon: LucideIcon
  color: string
  className?: string
  titleClassName?: string
  descriptionClassName?: string
}

export default function SectionHeaderDetails({
  title,
  badge,
  description,
  Icon,
  color,
  className,
  titleClassName,
  descriptionClassName,
}: SectionHeaderDetailsProps) {
  return (
    <div className={cn("flex flex-col items-center gap-6 text-center fade", className)}>
      <Tag text={badge} Icon={Icon} color={color} />
      <SectionTitle
        title={title}
        accentClassName={color}
        splitToken="<stop/>"
        className={cn("text-4xl md:text-6xl max-w-2xl leading-18", titleClassName)}
      />
      <p className={cn("text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed", descriptionClassName)}>
        {description}
      </p>
    </div>
  )
}
