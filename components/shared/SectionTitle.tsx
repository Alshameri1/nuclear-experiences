import { cn } from "@/lib/utils"

interface SectionTitleProps {
  title: string
  accentClassName: string
  accentFrom?: number
  splitToken?: string
  className?: string
}

export function SectionTitle({
  title,
  accentClassName,
  accentFrom = 1,
  splitToken,
  className,
}: SectionTitleProps) {
  let leading = ""
  let trailing = ""

  if (splitToken && title.includes(splitToken)) {
    const [before, ...after] = title.split(splitToken)
    leading = before.trim()
    trailing = after.join(splitToken).trim()
  } else {
    const words = title.trim().split(/\s+/)
    leading = words.slice(0, accentFrom).join(" ")
    trailing = words.slice(accentFrom).join(" ")
  }

  return (
    <h2 className={cn("font-bold text-balance text-4xl md:text-6xl", className)}>
      <span className="text-foreground">{leading} </span>
      {trailing ? <span className={accentClassName}> {trailing}</span> : null}
    </h2>
  )
}
