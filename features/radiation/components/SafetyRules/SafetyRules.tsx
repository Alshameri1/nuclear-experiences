import type { SafetyItem } from "../../types"
import { SafetyRuleCard } from "./SafetyRuleCard"

interface SafetyRulesProps {
  items: SafetyItem[]
}

export function SafetyRules({ items }: SafetyRulesProps) {
  return (
    <div className="grid md:grid-cols-3 gap-6 w-full">
      {items.map((item, index) => (
        <SafetyRuleCard key={item.title} item={item} index={index} />
      ))}
    </div>
  )
}
