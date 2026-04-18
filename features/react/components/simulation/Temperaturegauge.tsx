import { motion, AnimatePresence } from "framer-motion"
import { useTranslations } from "next-intl"

interface TemperatureGaugeProps {
    temperature: number
    isUnstable: boolean
}

export function TemperatureGauge({ temperature, isUnstable }: TemperatureGaugeProps) {
    const t = useTranslations("pages.reaction.truth.reactorSimulation.metrics")

    return (
        <div className="relative w-16 h-48 bg-nuclear-dark rounded-lg border border-border overflow-hidden">
            {[0, 25, 50, 75, 100].map((mark) => (
                <div
                    key={mark}
                    className="absolute left-0 w-2 h-px bg-muted-foreground/50"
                    style={{ bottom: `${mark}%` }}
                />
            ))}

            <motion.div
                className={`absolute bottom-0 left-0 right-0 transition-colors duration-300 ${
                    temperature > 80
                        ? "bg-linear-to-t from-nuclear-red to-nuclear-orange"
                        : temperature > 50
                        ? "bg-linear-to-t from-nuclear-orange to-yellow-500"
                        : "bg-linear-to-t from-nuclear-cyan to-nuclear-cyan"
                }`}
                animate={{ height: `${temperature}%` }}
                transition={{ type: "spring", stiffness: 50 }}
            />

            <AnimatePresence>
                {isUnstable && (
                    <motion.div
                        className="absolute inset-0 bg-nuclear-red/20"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0.2, 0.5, 0.2] }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, repeat: Infinity }}
                    />
                )}
            </AnimatePresence>

            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-muted-foreground whitespace-nowrap">
                {t("temp")}
            </div>
        </div>
    )
}