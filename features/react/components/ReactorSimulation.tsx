"use client"

import { AnimatePresence } from "framer-motion"
import { useState, useEffect, useCallback } from "react"
import { ReactorCore } from "./simulation/Reactorcore"
import { ExplosionOverlay } from "./simulation/Explosionoverlay"
import MetricsPanel from "./simulation/MetricsPanel"
import ControlsPanel from "./simulation/ControlsPanel"
import { calculateStabilityFun } from "./simulation/functions/calculateStabilityFun"
import StepBar from "@/components/StepBar"
import { useTranslations } from "next-intl"

export interface SimulationState {
    neutronIntensity: number
    controlRodInsertion: number
    stability: number
    isExploding: boolean
    temperature: number
}

const INITIAL_STATE: SimulationState = {
    neutronIntensity: 30,
    controlRodInsertion: 50,
    stability: 80,
    isExploding: false,
    temperature: 30,
}

export function ReactorSimulation() {
    const [state, setState] = useState<SimulationState>(INITIAL_STATE)
    const t = useTranslations('pages.reaction.truth.reactorSimulation')
    const calculateStability = useCallback((neutrons: number, rods: number) => {
        return calculateStabilityFun(neutrons, rods)
    }, [])

    useEffect(() => {
        if (state.isExploding) return

        const interval = setInterval(() => {
            setState((prev) => {
                const newStability = calculateStability(
                    prev.neutronIntensity,
                    prev.controlRodInsertion
                )
                const effectiveNeutrons =
                    prev.neutronIntensity * (1 - prev.controlRodInsertion / 100)
                const newTemperature = Math.min(100, 20 + effectiveNeutrons * 0.8)

                if (newStability < 10 && effectiveNeutrons > 80) {
                    return { ...prev, isExploding: true, stability: 0 }
                }

                return {
                    ...prev,
                    stability: prev.stability + (newStability - prev.stability) * 0.1,
                    temperature: prev.temperature + (newTemperature - prev.temperature) * 0.1,
                }
            })
        }, 100)

        return () => clearInterval(interval)
    }, [state.isExploding, calculateStability])


    const handleReset = () => setState(INITIAL_STATE)

    const isUnstable = state.stability < 30;

    return (
        <section className="w-full stepWrapperClass">
            <StepBar title={t('barTitle')} number={2}/>
            {/* Simulation container */}
            <div className="relative w-full">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-18">
                    {/* Controls panel */}
                    <ControlsPanel 
                        neutronIntensity={state.neutronIntensity} 
                        controlRodInsertion={state.controlRodInsertion} 
                        stability={state.stability} 
                        isUnstable={isUnstable} 
                        setState={setState} 
                    />

                    {/* Reactor visualization */}
                    <div className="order-1 lg:order-2 centerFlex">
                        <ReactorCore state={state} />
                    </div>

                    {/* Metrics panel */}
                    <MetricsPanel isUnstable={isUnstable} temperature={state.temperature} />
                </div>

                {/* Explosion overlay */}
                <AnimatePresence>
                    {state.isExploding && (
                        <ExplosionOverlay onReset={handleReset} />
                    )}
                </AnimatePresence>
            </div>
        </section>
    )
}