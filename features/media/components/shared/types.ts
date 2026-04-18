import type { ReactNode } from "react"

export interface MediaInfluenceItem {
  title: string
  description: string
  examples: string[]
  impact: string
}

export interface MediaMythItem {
  myth: string
  fact: string
  detail: string
}

export interface MediaImportanceItem {
  title: string
  description: string
}

export interface MediaInfluenceLabels {
  examples: string
  impact: string
}

export interface MediaMythLabels {
  myth: string
  fact: string
  clickToReveal: string
  clickToReturn: string
  explanation: string
  knowledgeWeapon: string
}

export interface SectionIntroProps {
  badge?: string
  title: string
  description: string
  icon?: ReactNode
  accentClassName: string
  badgeClassName?: string
  badgeTextClassName?: string
}
