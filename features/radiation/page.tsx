import { getTranslations } from "next-intl/server"
import RevelTruth from "@/components/RevelTruth"
import MythTruthSection from "@/components/MythTruthSection"
import StepBar from "@/components/StepBar"
import { TruthSections } from "./components/TruthSections"

export default async function RadiationPage() {
    const tCommon = await getTranslations('shared.common')
    const t = await getTranslations("pages.radiation")
    const { components } = await TruthSections()
    return (
        <main className="pageClass">
            {/* Myth Section */}
            <MythTruthSection tagLabel={tCommon('myth')} type="myth" title={t('myth.title')} subtitle={t('myth.subtitle')} />

            {/* Revel Truth */}
            <RevelTruth />

            {/* Truth Section */}
            <MythTruthSection tagLabel={tCommon('truth')} type="truth" title={t('truth.title')} subtitle={t('truth.subtitle')}>
                {components.map((ele, index) => (
                    <div key={index} className={`stepWrapperClass ${ele.className}`}>
                        <StepBar title={ele.stepBarTitle} number={index + 1} />
                        {ele.content}
                    </div>
                ))}
            </MythTruthSection>
        </main>
    )
}
