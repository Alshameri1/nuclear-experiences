import type { LucideIcon } from "lucide-react"

export interface ReferenceItemData {
  name: string
  visibleName: string
  description: string
}

export type ReferenceTone = "cyan" | "blue" | "orange"

export interface ReferenceVisual {
  href: string
  icon: LucideIcon
  tone: ReferenceTone
}

export interface ReferencesPageProps {
  items: ReferenceItemData[]
  noteTitle: string
  noteText: string
}
