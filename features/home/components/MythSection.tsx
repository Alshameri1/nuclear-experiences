import { MythTruthWrapper } from "@/components/shared/MythTruthWrapper"
import { getTranslations } from "next-intl/server"
import MythTruthArticle from "@/components/shared/MythTruthArticle"
import MythCard from "./MythCard"
import Equal from "@/components/Equal"

export default async function MythSection({tag}: {tag: string}) {
    const t = await getTranslations('pages.home.myth')
    return (
        <MythTruthWrapper type="myth" 
            label={tag} 
            className="container py-[50px] px-[40px] rounded-4xl" 
            childrenClass="colFlex gap-10"
        >
            {/* Header Of Myth Section */}
            <MythTruthArticle type="myth" tag={tag} title={t('title')} subtitle={t('subtitle')} />
            
            {/* Main Content Of Myth Section */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-6 w-full">
                <MythCard type="myth" explanation={t('weapon.explanation')} tag={t('weapon.tag')} description={t('weapon.description')} src="/images/home/weapon.png" alt="Nuclear Weapon"/>
                <Equal text='='/>
                <MythCard type="truth" explanation={t('reactor.explanation')} tag={t('reactor.tag')} description={t('reactor.description')} src="/images/home/reactor.png" alt="Nuclear Reactor"/>
            </div>
        </MythTruthWrapper>
    )
}
