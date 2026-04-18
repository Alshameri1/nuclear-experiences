import type { MediaImportanceItem } from "../shared/types"
import { importanceIcons } from "./constants"
import { ImportanceCard } from "./ImportanceCard"

interface ImportanceGridProps {
  items: MediaImportanceItem[]
}

export function ImportanceGrid({ items }: ImportanceGridProps) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {items.map((item, index) => (
        <ImportanceCard
          key={item.title}
          title={item.title}
          description={item.description}
          icon={importanceIcons[index] || "🏛️"}
        />
      ))}
    </div>
  )
}
