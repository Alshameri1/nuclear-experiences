"use client"

import type { MediaMythItem, MediaMythLabels } from "../shared/types"
import { MisconceptionItem } from "./MisconceptionItem"

interface MisconceptionsListProps {
  items: MediaMythItem[]
  expandedIndex: number | null
  labels: MediaMythLabels
  onToggle: (index: number) => void
}

export function MisconceptionsList({
  items,
  expandedIndex,
  labels,
  onToggle,
}: MisconceptionsListProps) {
  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <MisconceptionItem
          key={item.myth}
          item={item}
          index={index}
          isExpanded={expandedIndex === index}
          labels={labels}
          onToggle={onToggle}
        />
      ))}
    </div>
  )
}
