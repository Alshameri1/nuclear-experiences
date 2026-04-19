import React, { Dispatch, SetStateAction } from 'react'
import { ControlSlider } from './Controlslider'
import { SimulationState } from '@/features/react/components/ReactorSimulation'
import { useTranslations } from 'next-intl'
import { StabilityMeter } from './Stabilitymeter'
import {motion} from 'framer-motion';

type ControlsPanelProps = {
    neutronIntensity: number
    controlRodInsertion: number
    stability: number
    isUnstable: boolean
    setState: Dispatch<SetStateAction<SimulationState>>
}
export default function ControlsPanel({setState, neutronIntensity, controlRodInsertion, stability, isUnstable}: ControlsPanelProps) {
    const t = useTranslations("pages.reaction.truth.reactorSimulation")

    const handleNeutronChange = (value: number) =>
        setState((prev) => ({ ...prev, neutronIntensity: value }))

    const handleRodChange = (value: number) =>
        setState((prev) => ({ ...prev, controlRodInsertion: value }))
    return (
        <div className="order-2 lg:order-1 flex flex-col gap-8">
            <div className="glass-dark rounded-xl p-6 flex flex-col gap-6">
                <h3 className="text-lg font-semibold text-nuclear-cyan pb-2">
                    {t("panel.title")}
                </h3>

                <ControlSlider label={t("panel.neutrons")} value={neutronIntensity} onChange={handleNeutronChange}
                    color="cyan"
                    icon={
                        <svg
                            className="w-5 h-5 text-nuclear-cyan"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <circle cx="12" cy="12" r="3" />
                            <path
                                d="M12 2v4M12 18v4M2 12h4M18 12h4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"
                                stroke="currentColor"
                                strokeWidth="2"
                                fill="none"
                            />
                        </svg>
                    }
                />
                <ControlSlider
                    label={t("panel.rods")}
                    value={controlRodInsertion}
                    onChange={handleRodChange}
                    color="cyan"
                    icon={
                        <svg
                            className="w-5 h-5 text-nuclear-cyan"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                            />
                        </svg>
                    }
                />

                <div className="pt-4 border-t border-border">
                    <StabilityMeter
                        value={stability}
                        isUnstable={isUnstable}
                    />
                </div>
            </div>

            {/* Status indicators */}
            <div className="glass-dark rounded-xl p-6 flex flex-col gap-4">
                <h4 className="text-sm font-medium text-muted-foreground">
                    {t("status.title")}
                </h4>
                <div className="flex items-center gap-3">
                    <motion.div
                        className={`w-4 h-4 rounded-full ${
                            isUnstable
                                ? "bg-nuclear-red shadow-[0_0_10px_var(--nuclear-red)]"
                                : "bg-nuclear-cyan shadow-[0_0_10px_var(--nuclear-cyan)]"
                        }`}
                        animate={{
                            scale: isUnstable ? [1, 1.3, 1] : [1, 1.1, 1],
                        }}
                        transition={{
                            duration: isUnstable ? 0.3 : 1,
                            repeat: Infinity,
                        }}
                    />
                    <span
                        className={`font-medium ${
                            isUnstable ? "text-nuclear-red" : "text-nuclear-cyan"
                        }`}
                    >
                        {isUnstable ? t("status.unstable") : t("status.stable")}
                    </span>
                </div>
            </div>
        </div>
    )
}
