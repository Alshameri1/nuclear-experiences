
import type { ReferenceItemData } from "../shared/types"
import { ReferenceItem } from "./ReferenceItem"

interface ReferenceGridProps {
  items: ReferenceItemData[]
}

export function ReferenceGrid({ items }: ReferenceGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 fade">
      {items.map((item, index) => <ReferenceItem key={item.name} item={item} index={index} />)}
    </div>
  )
}
