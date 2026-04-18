import { motion } from "framer-motion";
import type { ComparisonData } from "./types";

interface ComparisonCardProps {
    data: ComparisonData;
    sliderPosition: number;
    index: number;
}

export function ComparisonCard({ data, sliderPosition, index }: ComparisonCardProps) {
    const showReactor = sliderPosition < 50;
    const transition = Math.abs(sliderPosition - 50) / 50;

    return (
        <motion.div
            className="relative h-40 glass rounded-xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
        >
            {/* Reactor side */}
            <motion.div
                className="absolute inset-0 p-6 flex flex-col justify-center gap-1 bg-linear-to-br from-nuclear-blue/10 to-transparent"
                animate={{
                    opacity: showReactor ? 1 : 0,
                    x: showReactor ? 0 : -20,
                }}
                transition={{ duration: 0.3 }}
            >
                <div className="text-nuclear-cyan text-sm font-medium">
                    {data.label}
                </div>
                <div className="text-2xl font-bold text-nuclear-cyan">
                    {data.reactor.value}
                </div>
                <div className="text-sm text-muted-foreground">
                    {data.reactor.description}
                </div>
            </motion.div>
                
            {/* Bomb side */}
            <motion.div
                className="absolute inset-0 p-6 flex flex-col justify-center gap-1 bg-linear-to-br from-nuclear-red/10 to-transparent"
                animate={{
                    opacity: showReactor ? 0 : 1,
                    x: showReactor ? 20 : 0,
                }}
                transition={{ duration: 0.3 }}
            >
                <div className="text-nuclear-red text-sm font-medium">
                    {data.label}
                </div>
                <div className="text-2xl font-bold text-nuclear-red">
                    {data.bomb.value}
                </div>
                <div className="text-sm text-muted-foreground">
                    {data.bomb.description}
                </div>
            </motion.div>
            
            {/* Glow effect */}
            <motion.div
                className={`absolute inset-0 pointer-events-none ${
                    showReactor
                        ? "shadow-[inset_0_0_30px_var(--nuclear-blue)]"
                        : "shadow-[inset_0_0_30px_var(--nuclear-red)]"
                }`}
                animate={{ opacity: transition * 0.5 }}
            />
        </motion.div>
    );
}