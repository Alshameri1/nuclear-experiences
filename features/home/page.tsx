import { getTranslations } from "next-intl/server"
import MythSection from "./components/MythSection"
import RevelTruth from "@/components/RevelTruth"
import TruthSection from "./components/TruthSection"

export default async function HomePage() {
    const tCommon = await getTranslations('shared.common')
    return (
        <main className="pageClass">
            {/* Myth Section */}
            <MythSection tag={tCommon('myth')}/>

            {/* Revel Truth */}
            <RevelTruth />
            
            {/* Truth Section */}
            <TruthSection tag={tCommon('truth')}/>
        </main>
    )
}
