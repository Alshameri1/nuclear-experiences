export interface SafetyItem {
  title: string
  titleEn: string
  description: string
  detail: string
}

export interface SourceKeyedItemsType {
  [key: string]: {
    title: string
    description: string
    examples: string[]
  }
}

export interface RadiationEnvironmentInsight {
  title: string
  text: string
}

export interface UseCaseType {
  title: string
  description: string
  examples: string[]
}
