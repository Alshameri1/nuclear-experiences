import { getTranslations } from "next-intl/server";
import Logo from "./Logo";

export async function Footer() {
    const t = await getTranslations("shared.footer")

    return (
        <div className="container mx-auto px-4 colFlex w-full gap-4">
            {/* Divider */}
            <div className="h-px bg-linear-to-r from-transparent via-border to-transparent" />

            {/* Bottom row */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 fade py-6">
                {/* Logo */}
                <Logo />

                {/* Credits */}
                <p className="text-sm text-muted-foreground text-center md:text-left">
                    {t("credits")}
                </p>

                {/* Key formula */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="text-nuclear-cyan">{t("formula.nuclear")}</span>
                    <span>≠</span>
                    <span className="text-nuclear-red">{t("formula.bomb")}</span>
                </div>
            </div>
        </div>
    )
}
