import { SectionIntro } from '@/components/shared/SectionIntro'
import { BetweenVerticalStart } from 'lucide-react'
import { getTranslations } from 'next-intl/server'
import { ComparisonSlider } from './sections/ComparisonSlider'
import { DifferenceList } from './sections/DifferenceList'
import { ReasonExplorer } from './components/ReasonExplorer'
import { DifferenceType, Reason, ReasonEnrichment, ComparisonLabels } from './type'
import { MythFactCards } from './components/MythFactCards'


export default async function ComparisonPage() {
    const t = await getTranslations('pages.comparison')
    const differences = t.raw("differences") as DifferenceType[]
    const reasons = t.raw("reasons.items") as Reason[]
    const comparisonLabels: ComparisonLabels = {
        reactorLabel: t("slider.aspects.reactorLabel"),
        bombLabel: t("slider.aspects.bombLabel"),
    }
    const enrichment: ReasonEnrichment = {
        label: t("reasons.enrichment.label"),
        reactor: t("reasons.enrichment.reactor"),
        bomb: t("reasons.enrichment.bomb"),
    }
    return (
        <div className='pageClass'>
            {/* The Header Of ComparisonPage */}
            <SectionIntro
                badge={t("badge")}
                title={t("title")}
                description={t("description")}
                icon={<BetweenVerticalStart className="w-4 h-4 text-nuclear-orange" />}
                accentClassName="text-gradient-orange"
                badgeTextClassName="text-nuclear-orange"
                />

            {/* ComparisonSlider: Slider shows the diffrences */}
            <ComparisonSlider />


            <DifferenceList
                title={t("slider.title")}
                differences={differences}
                labels={comparisonLabels}
            />
            
            <ReasonExplorer
                title={t("reasons.title")}
                subtitle={t("reasons.subtitle")}
                summaryLabel={t("reasons.summaryLabel")}
                enrichment={enrichment}
                reasons={reasons}
            /> 

            <MythFactCards />
        </div>
    )
}
