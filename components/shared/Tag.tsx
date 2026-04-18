import type { LucideIcon } from "lucide-react"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface TagProps {
  text: string
  color: string
  Icon?: LucideIcon
  icon?: ReactNode
  className?: string
  iconClassName?: string
  textClassName?: string
}

export default function Tag({
  Icon,
  icon,
  text,
  color,
  className,
  iconClassName,
  textClassName,
}: TagProps) {
  return (
    <div className={cn("inline-flex items-center gap-2 glass px-4 py-2 rounded-full w-fit fade", className)}>
      {icon ? icon : Icon ? <Icon className={cn("w-4 h-4", iconClassName, color)} /> : null}
      <span className={cn("text-sm", textClassName, color)}>{text}</span>
    </div>
  )
}
