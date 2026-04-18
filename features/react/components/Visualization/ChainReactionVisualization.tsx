import { motion } from "framer-motion"
import { useTranslations } from "next-intl"

// Chain Reaction Visualization
export function ChainReactionVisualization({ isAnimating }: { isAnimating: boolean }) {
    const t = useTranslations("pages.science.visuals.chain")
    const generations = [
        [{ x: 0, y: 0 }],
        [{ x: -40, y: -30 }, { x: 40, y: -30 }],
        [{ x: -70, y: -60 }, { x: -20, y: -60 }, { x: 20, y: -60 }, { x: 70, y: -60 }],
    ]

    return (
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
                {generations.map((gen, genIndex) => (
                    gen.map((pos, i) => (
                        <motion.div
                            key={`${genIndex}-${i}`}
                            className="absolute w-8 h-8 rounded-full bg-nuclear-cyan shadow-[0_0_15px_var(--nuclear-cyan)] flex items-center justify-center"
                            style={{ left: pos.x, top: pos.y, transform: "translate(-50%, -50%)" }}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={isAnimating ? {scale: [0, 1, 1, 0.5],opacity: [0, 1, 1, 0.3] } : { scale: 1, opacity: 1 }}
                            transition={{ duration: 3, repeat: Infinity, delay: genIndex * 0.8, times: [0, 0.2, 0.7, 1] }}
                        />
                    ))
                ))}

                {/* Connection lines */}
                <svg className="absolute inset-0 w-full h-full" style={{ overflow: "visible" }}>
                    {Array.from({length: 2}).map((_, i) => (
                        <motion.line key={i} x1="0" y1="0" x2="-40" y2="-30" stroke="var(--nuclear-blue)" strokeWidth="1"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={isAnimating ? { pathLength: 1, opacity: 0.5 } : {}}
                            transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
                        />
                    ))}
                </svg>
            
                {/* Labels */}
                <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-center whitespace-nowrap text-xs">
                    <p className="text-muted-foreground">{t('gen')}</p>
                    <p className="text-nuclear-cyan">{t('type')}</p>
                </div>
            </div>
        </div>
    )
}