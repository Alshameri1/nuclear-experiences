'use client';

import MythTruthTag from "@/components/shared/MythTruthTag";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Zap, ArrowRight } from "lucide-react";

interface ConceptCardProps {
    id: string;
    isActive: boolean;
    styles: { border: string; bg: string; text: string };
    title: string;
    subtitle: string;
    description: string;
    onClick: () => void;
    tag: string;
    tagType: string
}

export function ConceptCard({ id, isActive, styles, title, subtitle, description, onClick, tag, tagType }: ConceptCardProps) {
    return (
        <motion.button
            onClick={onClick}
            className={`w-full text-right p-6 rounded-2xl transition-all ${
                isActive ? `glass ${styles.border}` : "hover:bg-white/5 opacity-70"
            }`}
            whileHover={{ x: -5 }}
            whileTap={{ scale: 0.98 }}
        >
            <div className="flex items-start gap-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isActive ? styles.bg : "bg-white/5"}`}>
                    <Zap className={`w-5 h-5 ${isActive ? styles.text : "text-muted-foreground"}`} />
                </div>

                <div className="flex-1 flex flex-col gap-1 text-right">
                    <div className="flex items-center gap-2">
                        <h4 className="text-lg font-bold">{title}</h4>
                        <span className="text-xs text-muted-foreground">({subtitle})</span>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
                </div>

                <div className="rowFlex gap-2">
                    <div
                        className={cn("inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold uppercase",
                            tagType === "myth"
                                ? "border-nuclear-red/35 bg-nuclear-red/10 text-nuclear-red"
                                : tagType === "truth"
                                ? "border-nuclear-cyan/35 bg-nuclear-cyan/10 text-nuclear-cyan"
                                : "border-nuclear-orange/35 bg-nuclear-orange/10 text-nuclear-orange",
                        )}
                    >
                        <span className="h-2 w-2 rounded-full bg-current" />
                        {tag}
                    </div>
                    <ArrowRight className={`w-5 h-5 transition-transform ${isActive ? `${styles.text} rotate-180` : "text-muted-foreground"}`} />
                </div>
            </div>
        </motion.button>
    );
}