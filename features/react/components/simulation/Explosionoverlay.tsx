import { motion } from "framer-motion"
import { useTranslations } from "next-intl"

interface ExplosionOverlayProps {
    onReset: () => void
}

export function ExplosionOverlay({ onReset }: ExplosionOverlayProps) {
    const t = useTranslations("pages.reaction.truth.reactorSimulation.explosion")

    return (
        <motion.div
            className="absolute inset-0 flex items-center justify-center bg-nuclear-dark/90 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.div
                className="text-center flex flex-col items-center gap-6"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                {/* Explosion visual */}
                <motion.div
                    className="relative w-48 h-48"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.5, repeat: 3 }}
                >
                    <div className="absolute inset-0 rounded-full bg-nuclear-red/30 blur-3xl" />
                    <div className="absolute inset-8 rounded-full bg-nuclear-orange/50 blur-2xl" />
                    <div className="absolute inset-16 rounded-full bg-yellow-500/60 blur-xl" />
                </motion.div>

                <div className="flex flex-col gap-2">
                    <h3 className="text-2xl font-bold text-nuclear-red text-glow-red">
                        {t("title")}
                    </h3>
                    <p className="text-muted-foreground max-w-sm">{t("desc")}</p>
                </div>

                <motion.button
                    onClick={onReset}
                    className="px-6 py-3 bg-nuclear-cyan text-primary-foreground rounded-lg font-medium hover:bg-nuclear-cyan-glow transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {t("reset")}
                </motion.button>
            </motion.div>
        </motion.div>
    )
}