import { Info } from "lucide-react"
import { getTranslations } from "next-intl/server"

export async function KeyPointBox() {
    const t = await getTranslations("pages.reaction.truth.einsteinExamples")

    return (
        <div className="glass rounded-2xl p-6 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-nuclear-cyan/10 flex items-center justify-center shrink-0">
                <Info className="w-5 h-5 text-nuclear-cyan" />
            </div>

            <div className="flex flex-col gap-2">
                <h4 className="font-bold">{t("keyPoint.title")}</h4>
                <p
                    className="text-muted-foreground"
                    dangerouslySetInnerHTML={{
                        __html: t("keyPoint.description").replace(
                            "سرعة التفاعل والتحكم",
                            '<strong class="text-foreground">سرعة التفاعل والتحكم</strong>'
                        ).replace("speed of reaction and control", '<strong class="text-foreground">speed of reaction and control</strong>'),
                    }}
                />
            </div>
        </div>
    )
}