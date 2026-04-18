'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import { ComparisonCard } from "./ComparisonCard";
import type { ComparisonData } from "./types";
import { ReactorVisual } from "./visuals/ReactorVisual";
import { BombVisual } from "./visuals/BombVisual";
import { useLocale } from "next-intl";

export function ComparisonClientWrapper({ comparisons, t }: any) {
    const [sliderPosition, setSliderPosition] = useState(50);
    const locale = useLocale();
    const isRtl = locale === 'ar';

    return (
        <div className="colFlex items-center gap-12 md:gap-16">
          {/* Slider Visual Area */}
            <motion.div className="w-full fade">
                <div className="relative glass rounded-2xl p-8 md:p-12 flex flex-col gap-12">
                    <div className="flex items-center justify-between">
                        <ReactorVisual position={sliderPosition} label={t.reactor} />

                        <div className="relative">
                            <div className={`w-16 h-16 rounded-full bg-nuclear-surface border-2 flex items-center justify-center transition-colors duration-300 ${
                                    sliderPosition < 50 ? "border-nuclear-blue" : "border-nuclear-red"
                                }`}>
                                <span className="text-xl font-bold text-muted-foreground">VS</span>
                            </div>
                        </div>

                        <BombVisual position={sliderPosition} label={t.bomb} />
                    </div>

                    {/* Custom Slider Control */}
                    <div className="relative flex flex-col gap-4">
                        <input type="range" min="0" max="100" value={sliderPosition}
                            onChange={(e) => setSliderPosition(Number(e.target.value))}
                            className={`w-full h-4 rounded-full appearance-none cursor-pointer bg-linear-to-${isRtl ? 'l' : 'r'} from-nuclear-blue via-muted to-nuclear-red`}
                        />
                        <div className="flex justify-between text-sm font-medium">
                            <span className="text-nuclear-blue">{t.peaceful}</span>
                            <span className="text-muted-foreground">{t.drag}</span>
                            <span className="text-nuclear-red">{t.weapon}</span>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Cards Grid */}
            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full fade">
                {comparisons.map((comparison: ComparisonData, index: number) => (
                    <ComparisonCard key={index} data={comparison} sliderPosition={sliderPosition} index={index} />
                ))}
            </motion.div>
        </div>
    );
}