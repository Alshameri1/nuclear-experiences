import { Atom, Zap, Radio, Settings } from "lucide-react"
import { getTranslations } from "next-intl/server"
import { SectionCard } from "./SectionCard"

const sectionConfigs = [
    {
        href: "/react",
        icon: Atom,
        color: "blue",
        gradient: "from-nuclear-blue/20 to-nuclear-cyan/10",
    },
    {
        href: "/radiation",
        icon: Radio,
        color: "orange",
        gradient: "from-nuclear-orange/20 to-nuclear-red/10",
    },
    {
        href: "/mechanism",
        icon: Settings,
        color: "cyan",
        gradient: "from-nuclear-cyan/20 to-nuclear-blue/10",
    },
    {
        href: "/radiation",
        icon: Zap,
        color: "red",
        gradient: "from-nuclear-red/20 to-nuclear-orange/10",
    },
]

export async function SectionsPreviewGrid() {
    const t = await getTranslations("pages.home.truth")
    const items = t.raw("items")
    const more = t("more")

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 fade">
            {sectionConfigs.map((config, index) => (
                <SectionCard
                    key={index}
                    href={config.href}
                    icon={config.icon}
                    color={config.color}
                    gradient={config.gradient}
                    title={items[index].title}
                    description={items[index].description}
                    more={more}
                />
            ))}
        </div>
    )
}