import { getTranslations } from "next-intl/server"

export async function EinsteinEquation() {
    const t = await getTranslations("pages.reaction.truth.causeOfConfusion")

    return (
        <div className="text-center colFlex items-center gap-4">
            <h3 className="text-lg text-muted-foreground">
                {t("energyEquation.title")}
            </h3>

            <div className="text-6xl md:text-8xl font-bold text-nuclear-cyan">
                E = mc²
            </div>

            <p className="text-xl text-foreground">
                {t("energyEquation.explanation")}
            </p>

            <p className="text-muted-foreground max-w-xl mx-auto">
                {t("energyEquation.detail")}
            </p>
        </div>
    )
}