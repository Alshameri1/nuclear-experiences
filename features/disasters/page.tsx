import { getTranslations } from "next-intl/server"
import RevelTruth from "@/components/RevelTruth"
import MythTruthSection from "@/components/MythTruthSection"
import { MythSection } from "./components/MythSection"
import StepBar from "@/components/StepBar"
import { EventCard, AccidentItem } from "./components/Accident/EventCard"
import { SafetyFeatures } from "./components/SafetyFeatures"

export default async function DisastersPage() {
    const tCommon = await getTranslations('shared.common')
    const t = await getTranslations("pages.disasters")
    const tEvent: AccidentItem[] = await t.raw('truth.timeline')
    return (
        <main className="pageClass">
            {/* Myth Section */}
            <MythSection />

            {/* Revel Truth */}
            <RevelTruth />

            {/* Truth Section */}
            <MythTruthSection tagLabel={tCommon('truth')} type="truth" title={t('truth.title')} subtitle={t('truth.subtitle')}>
                <div className="stepWrapperClass">
                    <StepBar number={1} title={tCommon('correctConcept')} />
                    <section className="w-full flex flex-col lg:flex-row gap-4 lg:gap-6 items-center">
                        {tEvent.map((event, index) => (
                            <EventCard key={index} data={event}/>
                        ))}
                    </section>
                </div>

                <div className="stepWrapperClass">
                    <StepBar number={2} title={t('truth.safteySystem.barTitle')} />
                    <SafetyFeatures />
                </div>
            </MythTruthSection>
        </main>
    )
}
