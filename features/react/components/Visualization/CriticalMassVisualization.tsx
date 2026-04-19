import { motion } from "framer-motion"
import { useTranslations } from "next-intl"

// Critical Mass Visualization
export function CriticalMassVisualization({ isAnimating }: { isAnimating: boolean }) {
    const t = useTranslations("pages.reaction.truth.einsteinExamples.visuals.critical")
    return (
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex items-end gap-8">
                {/* Sub-critical */}
                <div className="text-center">
                    <motion.div
                        className="w-12 h-12 rounded-full bg-nuclear-cyan/30 border border-nuclear-cyan/50 mb-2 mx-auto"
                        animate={isAnimating ? { opacity: [0.3, 0.5, 0.3] } : {}}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                    <p className="text-xs text-muted-foreground">{t('sub.title')}</p>
                    <p className="text-[10px] text-muted-foreground">{t('sub.desc')}</p>
                </div>
                {/* Critical */}
                <div className="text-center">
                    <motion.div
                        className="w-20 h-20 rounded-full bg-nuclear-cyan shadow-[0_0_20px_var(--nuclear-cyan)] mb-2 mx-auto flex items-center justify-center"
                        animate={isAnimating ? { boxShadow: [ "0 0 20px var(--nuclear-cyan)", "0 0 30px var(--nuclear-cyan)", "0 0 20px var(--nuclear-cyan)", ] } : {}}
                            transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        <span className="text-xs font-bold">K=1</span>
                    </motion.div>
                    <p className="text-xs text-nuclear-cyan">{t('main.title')}</p>
                    <p className="text-[10px] text-muted-foreground">{t('main.desc')}</p>
                </div>
                {/* Super-critical */}
                <div className="text-center">
                    <motion.div
                        className="w-16 h-16 rounded-full bg-nuclear-orange shadow-[0_0_25px_var(--nuclear-orange)] mb-2 mx-auto"
                        animate={isAnimating ? {
                            scale: [1, 1.2, 1],
                            boxShadow: [ "0 0 25px var(--nuclear-orange)", "0 0 50px var(--nuclear-red)", "0 0 25px var(--nuclear-orange)" ],
                        } : {}}
                        transition={{ duration: 1, repeat: Infinity }}
                    />
                    <p className="text-xs text-nuclear-orange">{t('super.title')}</p>
                    <p className="text-[10px] text-muted-foreground">{t('super.desc')}</p>
                </div>
            </div>
        </div>
    )
}
