import { motion } from "framer-motion"
import { useTranslations } from "next-intl"

interface StabilityMeterProps {
    value: number
    isUnstable: boolean
}

export function StabilityMeter({ value, isUnstable }: StabilityMeterProps) {
    const t = useTranslations("pages.reaction.truth.reactorSimulation.panel")

    return (
        <div className="flex flex-col gap-2 w-full">
            <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">{t("stability")}</span>
                <span
                    className={`text-sm font-mono ${
                        isUnstable ? "text-nuclear-red" : "text-nuclear-cyan"
                    }`}
                >
                    {Math.round(value)}%
                </span>
            </div>

            <div className="h-3 bg-nuclear-dark rounded-full overflow-hidden border border-border">
                <motion.div
                    className={`h-full rounded-full transition-colors duration-300 ${
                        value > 70
                            ? "bg-linear-to-r from-nuclear-cyan to-nuclear-cyan"
                            : value > 30
                            ? "bg-linear-to-r from-nuclear-orange to-yellow-500"
                            : "bg-linear-to-r from-nuclear-red to-nuclear-orange"
                    }`}
                    animate={{ width: `${value}%` }}
                    transition={{ type: "spring", stiffness: 100 }}
                />
            </div>
        </div>
    )
}