import { getTranslations } from "next-intl/server"
import RevelTruth from "@/components/RevelTruth"
import MythTruthSection from "@/components/MythTruthSection"
import { CorrectingConcept } from "./components/CorrectingConcept"
import { ReactorSimulation } from "./components/ReactorSimulation"
import { CauseOfConfusion } from "./components/CauseOfConfusion"
import { EinsteinExamples } from "./components/EinsteinExamples"

export default async function ReactionPage() {
    const tCommon = await getTranslations('shared.common')
    const t = await getTranslations("pages.reaction")
    return (
        <main className="pageClass">
            {/* Myth Section */}
            <MythTruthSection tagLabel={tCommon('myth')} type="myth" title={t('myth.title')} subtitle={t('myth.subtitle')} />

            {/* Revel Truth */}
            <RevelTruth />

            {/* Truth Section */}
            <MythTruthSection tagLabel={tCommon('truth')} type="truth" title={t('truth.title')} subtitle={t('truth.subtitle')}>
                {/* Correcting Concept Section */}
                <CorrectingConcept />

                {/* Reactor Simulation Section */}
                <ReactorSimulation />

                {/* Cause of Confusion Section */}
                <CauseOfConfusion />

                {/* Einstein Examples Section */}
                <EinsteinExamples />
            </MythTruthSection>
        </main>
    )
}
