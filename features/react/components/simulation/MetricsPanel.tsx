import { TemperatureGauge } from './Temperaturegauge'
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function MetricsPanel({isUnstable, temperature}: {isUnstable: boolean, temperature: number}) {
    const t = useTranslations("pages.reaction.truth.reactorSimulation")
    
    return (
        <div className="order-3 flex flex-col gap-8">
            <div className="glass-dark rounded-xl p-6 flex flex-col gap-6">
                <h3 className="text-lg font-semibold text-nuclear-cyan border-b border-border pb-2">
                    {t("metrics.title")}
                </h3>
                <div className="flex justify-center">
                    <TemperatureGauge
                        temperature={temperature}
                        isUnstable={isUnstable}
                    />
                </div>
            </div>
            {/* Info box */}
            <motion.div
                className={`glass-dark rounded-xl p-6 border-r-4 transition-colors duration-300 flex flex-col gap-2 ${
                    isUnstable ? "border-nuclear-red" : "border-nuclear-cyan"
                }`}
                animate={isUnstable ? { x: [-2, 2, -2] } : {}}
                transition={{
                    duration: 0.1,
                    repeat: isUnstable ? Infinity : 0,
                }}
            >
                <h4 className="font-medium">
                    {isUnstable ? t("info.danger") : t("info.title")}
                </h4>
                <p className="text-sm text-muted-foreground">
                    {isUnstable ? t("info.unstableDesc") : t("info.stableDesc")}
                </p>
            </motion.div>
        </div>
    )
}
