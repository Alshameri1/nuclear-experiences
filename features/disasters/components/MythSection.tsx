import { getTranslations } from "next-intl/server"
import MythTruthSection from "@/components/MythTruthSection"
import { MythTruthWrapper } from "@/components/shared/MythTruthWrapper"
import MythTruthTag from "@/components/shared/MythTruthTag"
import Image from "next/image"
import InfoBar from "./Accident/InfoBar"

export async function MythSection() {
    const tCommon = await getTranslations('shared.common')
    const t = await getTranslations("pages.disasters")
    const tTimeline: {subtitle: string, place: string, tip: string}[] = await t.raw("myth.timeline")
    const mythArray = [
        {
            ...tTimeline[0],
            image: ["/images/disasters/Chernobyl/1.jpg", "/images/disasters/Chernobyl/2.webp"]
        },
        {
            ...tTimeline[1],
            image: ["/images/disasters/Fukushima/1.jpg", "/images/disasters/Fukushima/2.jpg"]
        }
    ]
    return (
        <MythTruthSection tagLabel={tCommon('myth')} type="myth" title={t('myth.title')} subtitle={t('myth.subtitle')}>
            <div className="w-full flex flex-col lg:flex-row gap-4 lg:gap-6 items-center">
                {mythArray.map((ele) => (          
                    <MythTruthWrapper key={ele.place} type="myth" className="w-full px-4 md:px-5 py-4 rounded-2xl" childrenClass="colFlex">
                        <div className="colFlex items-start text-start w-full gap-4">
                            <article className="colFlex items-start text-start w-full gap-3">
                                <header className="w-full betweenFlex">
                                    <h1 className="text-nuclear-red text-3xl font-bold">{ele.place}</h1>
                                    <MythTruthTag label={tCommon('myth')} type="myth" absolute={false} />
                                </header>
                                <p className="text-sm text-muted-foreground/80">
                                    {ele.subtitle}
                                </p>
                            </article>
                            <div className="rowFlex gap-3 w-full">
                                {ele.image.map((image, index) => (
                                    <img key={index} src={image} alt="chernobyl" width={317} height={124} className="w-full max-w-[317px] max-h-[124px] rounded-xl object-cover object-center" loading="eager" />
                                ))}
                            </div>
                            <InfoBar tip={ele.tip} type="myth" />
                        </div>
                    </MythTruthWrapper>
                ))}
            </div>
        </MythTruthSection>
    )
}
