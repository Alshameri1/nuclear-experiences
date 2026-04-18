"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect, useMemo } from "react"

interface SimulationState {
    neutronIntensity: number
    controlRodInsertion: number
    stability: number
    isExploding: boolean
    temperature: number
}

interface ReactorCoreProps {
    state: SimulationState
}

export function ReactorCore({ state }: ReactorCoreProps) {
    const { neutronIntensity, controlRodInsertion, isExploding, stability } = state
    const coreIntensity = Math.min(100, neutronIntensity * (1 - controlRodInsertion / 100))
    const isUnstable = stability < 30
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    const neutronCount = Math.floor(neutronIntensity / 10)
    const neutronData = useMemo(() => {
        return Array.from({ length: 10 }).map((_, i) => ({
            id: i,
            startX: 128 + Math.sin(i * 0.7) * 30,
            startY: 200 + Math.cos(i * 0.9) * 30,
            endX: 128 + Math.sin(i * 1.3) * 100,
            endY: Math.sin(i * 0.5) * 150,
        }))
    }, [])

    return (
        <div className={`relative ${isExploding ? "animate-shake" : ""}`}>
            {/* Outer containment */}
            <motion.div
                className={`relative w-full h-80 md:h-96 rounded-lg border-2 ${
                    isUnstable
                        ? "border-nuclear-red/50 shadow-[0_0_30px_var(--nuclear-red)]"
                        : "border-nuclear-cyan/30 shadow-[0_0_20px_var(--nuclear-cyan)]"
                } bg-nuclear-surface overflow-hidden transition-all duration-300`}
            >
                {/* Control rods */}
                <div className="absolute top-0 left-0 right-0 flex justify-around px-4">
                    {[0, 1, 2, 3, 4].map((i) => (
                        <motion.div
                            key={i}
                            className="w-4 bg-linear-to-b from-muted-foreground to-muted rounded-b-sm relative z-20"
                            animate={{ height: `${20 + controlRodInsertion * 0.6}%` }}
                            transition={{ type: "spring", stiffness: 50 }}
                        >
                            <div className="absolute bottom-0 left-0 right-0 h-2 bg-nuclear-cyan/50 rounded-b" />
                        </motion.div>
                    ))}
                </div>

                {/* Core */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
                    <motion.div
                        className={`absolute w-40 h-40 rounded-full blur-2xl transition-colors duration-300 ${
                            isUnstable ? "bg-nuclear-red/40" : "bg-nuclear-cyan/30"
                        }`}
                        animate={{
                            scale: [1, 1 + coreIntensity / 200, 1],
                            opacity: [
                                0.3 + coreIntensity / 200,
                                0.5 + coreIntensity / 150,
                                0.3 + coreIntensity / 200,
                            ],
                        }}
                        transition={{
                            duration: isUnstable ? 0.3 : 2,
                            repeat: Infinity,
                        }}
                    />

                    {/* Fuel assemblies */}
                    <div className="relative grid grid-cols-3 gap-2 p-4">
                        {Array.from({ length: 9 }).map((_, i) => (
                            <motion.div
                                key={i}
                                className={`w-8 h-16 rounded transition-colors duration-300 ${
                                    isUnstable
                                        ? "bg-linear-to-t from-nuclear-red to-nuclear-orange"
                                        : "bg-linear-to-t from-nuclear-cyan to-nuclear-cyan"
                                }`}
                                animate={{ opacity: [0.6, 0.8 + coreIntensity / 200, 0.6] }}
                                transition={{
                                    duration: isUnstable ? 0.2 : 1.5,
                                    delay: i * 0.1,
                                    repeat: Infinity,
                                }}
                            />
                        ))}
                    </div>

                    {/* Energy waves */}
                    {!isExploding && (
                        <>
                            {[1, 2, 3].map((i) => (
                                <motion.div
                                    key={i}
                                    className={`absolute w-24 h-24 rounded-full border-2 ${
                                        isUnstable
                                            ? "border-nuclear-red/30"
                                            : "border-nuclear-cyan/30"
                                    }`}
                                    animate={{
                                        scale: [1, 2 + coreIntensity / 50],
                                        opacity: [0.6, 0],
                                    }}
                                    transition={{
                                        duration: isUnstable ? 0.5 : 2,
                                        delay: i * (isUnstable ? 0.15 : 0.5),
                                        repeat: Infinity,
                                    }}
                                />
                            ))}
                        </>
                    )}
                </div>

                {/* Neutrons */}
                {isMounted && (
                    <AnimatePresence>
                        {neutronData.slice(0, neutronCount).map((neutron) => (
                            <motion.div
                                key={neutron.id}
                                className={`absolute w-2 h-2 rounded-full ${
                                    isUnstable ? "bg-nuclear-orange" : "bg-nuclear-cyan"
                                }`}
                                initial={{ x: neutron.startX, y: neutron.startY, opacity: 0 }}
                                animate={{
                                    x: [neutron.startX, neutron.endX],
                                    y: [neutron.startY, neutron.endY],
                                    opacity: [0, 1, 0],
                                }}
                                exit={{ opacity: 0 }}
                                transition={{
                                    duration: isUnstable ? 0.3 : 1,
                                    delay: neutron.id * 0.1,
                                    repeat: Infinity,
                                }}
                            />
                        ))}
                    </AnimatePresence>
                )}

                {/* Warning overlay */}
                <AnimatePresence>
                    {isUnstable && (
                        <motion.div
                            className="absolute inset-0 bg-nuclear-red/10 animate-warning-flash"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        />
                    )}
                </AnimatePresence>
            </motion.div>

            {/* Base */}
            <div className="w-72 md:w-88 h-4 bg-nuclear-surface rounded-b-lg mx-auto border-x-2 border-b-2 border-border" />
        </div>
    )
}