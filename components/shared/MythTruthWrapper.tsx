"use client"

import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import MythTruthTag from "./MythTruthTag"

type MythTruthType = "myth" | "truth"

interface MythTruthWrapperProps {
    type: MythTruthType
    label?: string
    children: ReactNode
    className?: string
    childrenClass?: string
}

const WRAPPER_STYLES: Record<MythTruthType, {frame: string; glow: string}> = {
    myth: {
        frame: "from-nuclear-red/45 via-background to-nuclear-orange/20",
        glow: "bg-nuclear-red/20",
    },
    truth: {
        frame: "from-nuclear-cyan/35 via-background to-nuclear-blue/20",
        glow: "bg-nuclear-cyan/20",
    },
}

export function MythTruthWrapper({ type, label, children, className, childrenClass }: MythTruthWrapperProps) {
    const styles = WRAPPER_STYLES[type]

    return (
        <section className={cn("relative overflow-hidden", className)}
            style={{ 
                boxShadow: `0 30px 120px ${type === "myth" ? "rgba(239, 68, 68, 0.15)" : "rgba(13, 148, 136, 0.15)"}`,
                borderColor: type === "myth" ? "rgba(239, 68, 68, 0.35)" : "rgba(13, 148, 136, 0.35)",
                borderWidth: '2px'
            }}
        >
            {/* Background */}
            <div className={cn("absolute inset-0 bg-linear-to-br opacity-90", styles.frame)} />

            {/* Tag */}
            {label && <MythTruthTag type={type} label={label}/>}
            {/* Children */}
            <div className={`relative z-10 ${childrenClass}`}>{children}</div>
        </section>
    )
}