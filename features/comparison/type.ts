export interface ComparisonEntity {
    title: string
    desc: string
    status: string
}

export interface ComparisonControls {
    watch: string
    replay: string
}

export interface ComparisonLabels {
    reactorLabel: string
    bombLabel: string
}

export interface DifferenceType {
    aspect: string
    aspectEn: string
    reactor: string
    bomb: string
    reactorDetail: string
    bombDetail: string
}

export interface Reason {
    title: string
    description: string
    detail: string
}

export interface ReasonEnrichment {
    label: string
    reactor: string
    bomb: string
}

export interface AccidentTimelineItem {
    year: string
    name: string
    location: string
    cause: string
    actualEvent: string
    keyFact: string
    casualties: string
}

export interface AccidentTimelineLabels {
    cause: string
    actualEvent: string
    casualties: string
}

export interface AccidentTimelineConclusion {
    title: string
    text: string
}

export interface MythFactItem {
    myth: string
    fact: string
    detail: string
}

export interface MythFactLabels {
    myth: string
    fact: string
    clickToReveal: string
    clickToReturn: string
    knowledgeWeapon: string
}

export interface DifferenceListProps {
    title: string
    differences: DifferenceType[]
    labels: ComparisonLabels
}

export interface DifferenceRowProps {
    difference: DifferenceType
    index: number
    labels: ComparisonLabels
}