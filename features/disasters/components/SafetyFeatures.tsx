import { Shield, Droplets, Settings } from "lucide-react"
import { getTranslations } from "next-intl/server"

const safetyFeaturesIcons = [Shield, Droplets, Settings]

export async function SafetyFeatures() {
    const t = await getTranslations("pages.disasters.truth.safteySystem")

    return (
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-4">
            {t.raw("items").map(
                (feature: { title: string; description: string }, i: number) => {
                    const Icon = safetyFeaturesIcons[i] || Shield
                    return (
                        <div key={feature.title} className="border border-nuclear-cyan/20 hover:border-nuclear-cyan/30 rounded-2xl p-5 text-center colFlex items-center gap-3 group transition-colors">
                            <div className="w-12 h-12 rounded-xl bg-nuclear-cyan/10 flex items-center justify-center group-hover:bg-nuclear-cyan/20 transition-colors">
                                <Icon className="w-6 h-6 text-nuclear-cyan" />
                            </div>
                            <h4 className="font-bold">{feature.title}</h4>
                            <p className="text-xs text-muted-foreground">{feature.description}</p>
                        </div>
                    )
                }
            )}
        </div>
    )
}