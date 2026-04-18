import { ItemCard } from "@/components/shared/ItemCard"
import type { SafetyItem } from "../../types"

interface SafetyRuleCardProps {
  item: SafetyItem
  index: number
}

export function SafetyRuleCard({ item, index }: SafetyRuleCardProps) {
  return (
    <ItemCard
      icon={
        <span className="text-xl font-bold text-nuclear-cyan">{index + 1}</span>
      }
      title={item.title}
      titleAddon={`(${item.titleEn})`}
      description={item.description}
      className="text-center group"
      iconClassName="size-12 rounded-xl bg-nuclear-cyan/10 flex items-center justify-center mx-auto group-hover:bg-nuclear-cyan/20 transition-colors"
      titleClassName="text-lg font-bold"
    >
      <p className="text-sm text-nuclear-cyan">{item.detail}</p>
    </ItemCard>
  )
}
