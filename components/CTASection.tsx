import { ShareButton } from "@/components/ShareButton"
import { getTranslations } from "next-intl/server"
import Button from "./Button"
import Link from "next/link"

export async function CTASection() {
    const t = await getTranslations("shared.cta")

    return (
        <section className="text-center colFlex items-center gap-8 fade">
          {/* Title + description */}
            <div className="colFlex items-center gap-6">
                <h2 className="text-3xl md:text-4xl font-bold text-balance">
                    <span className="text-nuclear-cyan">{t("title")}</span>
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto text-pretty">
                    {t("description")}
                </p>
            </div>

            {/* Buttons */}
            <div className="betweenFlex gap-4">
                <ShareButton label={t("copyLink")} />
                <Link href={'/challenges'}>
                    <Button text={t("goChallenges")} className="text-nuclear-cyan border border-nuclear-cyan/40"/>
                </Link>
            </div>
        </section>
    )
}