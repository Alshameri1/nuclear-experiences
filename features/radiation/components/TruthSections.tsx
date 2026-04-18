import { getTranslations } from "next-intl/server"
import CorrectingConcepts from "./CorrectingConcepts"
import { PeacefulUses } from "./PeacefulUses/PeacefulUses"
import { EnvironmentImpact } from "./EnvironmentImpact/EnvironmentImpact"
import { SafetyItem } from "../types"
import { SafetyRules } from "./SafetyRules/SafetyRules"

export const TruthSections = async () => {
    const tCommon = await getTranslations('shared.common')
    const t = await getTranslations("pages.radiation")
    const safetyMeasures = t.raw("truth.safetyRules.items") as SafetyItem[]
    const components: {
        stepBarTitle: string;
        content: React.ReactNode;
        className?: string;
    }[] = [
        {
            stepBarTitle: tCommon('correctConcept'),
            content: <CorrectingConcepts weapon={t('truth.correctingConcept.weapon')}  reactor={t('truth.correctingConcept.reactor')} />,
            className: 'text-3xl font-semibold'
        },
        {
            stepBarTitle: t('truth.safetyUsage.barTitle'),
            content: <PeacefulUses />
        },
        {
            stepBarTitle: t('truth.environment.barTitle'),
            content: <EnvironmentImpact />
        },
        {
            stepBarTitle: t('truth.safetyRules.barTitle'),
            content: <SafetyRules items={safetyMeasures}/>
        },
    ]
    return { components }
}
