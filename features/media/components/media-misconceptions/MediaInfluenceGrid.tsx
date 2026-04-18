import type { MediaInfluenceItem } from "../shared/types"
import { influenceIcons } from "./constants"
import { MediaBlock } from "./MediaBlock"

interface MediaInfluenceGridProps {
  items: MediaInfluenceItem[]
  activeIndex: number
  onSelect: (index: number) => void
}

export function MediaInfluenceGrid({ items, activeIndex, onSelect }: MediaInfluenceGridProps) {
  return (
    <div className="grid lg:grid-cols-3 gap-6">
      {items.map((influence, index) => {
        const Icon = influenceIcons[index] || influenceIcons[0]

        return (
          <MediaBlock
            key={influence.title}
            title={influence.title}
            description={influence.description}
            icon={<Icon className="w-full h-full" />}
            active={activeIndex === index}
            onClick={() => onSelect(index)}
          />
        )
      })}
    </div>
  )
}
