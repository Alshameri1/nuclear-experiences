import { ItemCard } from "@/components/shared/ItemCard"
import type { ReactNode } from "react"

interface ImpactInsightCardProps {
  title: string
  description: string
  icon: ReactNode
  tone: "cyan" | "blue" | "green"
}

export function ImpactInsightCard({
  title,
  description,
  icon,
  tone,
}: ImpactInsightCardProps) {
  const toneStyles =
    tone === "cyan"
      ? {
          icon: "w-12 h-12 rounded-xl bg-nuclear-cyan/10 flex items-center justify-center text-nuclear-cyan flex-shrink-0",
          title: "text-nuclear-cyan",
        }
      : tone === "blue"
        ? {
            icon: "w-12 h-12 rounded-xl bg-nuclear-blue/10 flex items-center justify-center text-nuclear-blue flex-shrink-0",
            title: "text-nuclear-blue",
          }
        : {
            icon: "w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500 flex-shrink-0",
            title: "text-green-500",
          }

  return (
    <ItemCard
      icon={icon}
      title={title}
      description={description}
      className={`rounded-2xl p-6`}
      iconClassName={toneStyles.icon}
      titleClassName={`text-lg font-bold ${toneStyles.title}`}
      descriptionClassName="text-sm leading-relaxed"
    />
  )
}
