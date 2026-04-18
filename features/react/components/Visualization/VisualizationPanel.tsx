'use client';

import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";
import { FissionVisualization } from "./FissionVisualization";
import { ChainReactionVisualization } from "./ChainReactionVisualization";
import { CriticalMassVisualization } from "./CriticalMassVisualization";

interface VisualizationPanelProps {
    activeId: string;
    isAnimating: boolean;
    setIsAnimating: (val: boolean) => void;
    title: string;
    details: string[];
    dotStyle: string;
    pauseLabel: string;
    playLabel: string;
}

export function VisualizationPanel({ activeId, isAnimating, setIsAnimating, title, details, dotStyle, pauseLabel, playLabel }: VisualizationPanelProps) {
    return (
        <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="flex-1 flex flex-col gap-6"
        >
            <div className="flex-1 relative min-h-[200px]">
                {activeId === "fission" && <FissionVisualization isAnimating={isAnimating} />}
                {activeId === "chain" && <ChainReactionVisualization isAnimating={isAnimating} />}
                {activeId === "critical" && <CriticalMassVisualization isAnimating={isAnimating} />}
            </div>

            <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                    <h4 className="font-bold text-lg">{title}</h4>
                    <button onClick={() => setIsAnimating(!isAnimating)} className="glass px-3 py-1 rounded-full text-sm flex items-center gap-2">
                        {isAnimating ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                        {isAnimating ? pauseLabel : playLabel}
                    </button>
                </div>

                <ul className="flex flex-col gap-2">
                    {details.map((detail, i) => (
                        <motion.li
                            key={i}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <span className={`w-1.5 h-1.5 rounded-full ${dotStyle} mt-1.5 shrink-0`} />
                            {detail}
                        </motion.li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
}