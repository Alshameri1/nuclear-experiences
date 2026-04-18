"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { ConceptCard } from "./ConceptCard";
import { VisualizationPanel } from "./Visualization/VisualizationPanel";

const concepts = [{ id: "fission" }, { id: "chain" }, { id: "critical" }];

const conceptStyles = {
    fission: { border: "border-nuclear-cyan/50", bg: "bg-nuclear-cyan/20", text: "text-nuclear-cyan", dot: "bg-nuclear-cyan" },
    chain: { border: "border-nuclear-blue/50", bg: "bg-nuclear-blue/20", text: "text-nuclear-blue", dot: "bg-nuclear-blue" },
    critical: { border: "border-nuclear-orange/50", bg: "bg-nuclear-orange/20", text: "text-nuclear-orange", dot: "bg-nuclear-orange" },
} as const;

export function ConceptsInteractive() {
    const [activeConcept, setActiveConcept] = useState<keyof typeof conceptStyles>("fission");
    const [isAnimating, setIsAnimating] = useState(true);
    const t = useTranslations("pages.reaction.truth.einsteinExamples");
    const tCommon = useTranslations("shared.common");

    return (
        <div className="grid lg:grid-cols-2 gap-8">
            <div className="flex flex-col gap-4 fade">
                {concepts.map((concept, index) => (
                    <ConceptCard
                        key={concept.id}
                        id={concept.id}
                        isActive={activeConcept === concept.id}
                        styles={conceptStyles[concept.id as keyof typeof conceptStyles]}
                        title={t(`concepts.${concept.id}.title`)}
                        subtitle={t(`concepts.${concept.id}.subtitle`)}
                        description={t(`concepts.${concept.id}.description`)}
                        tag={t(`concepts.${concept.id}.tag`)}
                        tagType={['truth', 'between', 'myth'][index]}
                        onClick={() => setActiveConcept(concept.id as any)}
                    />
                ))}
            </div>

            <div className="glass rounded-3xl p-8 min-h-[400px] colFlex">
                <AnimatePresence mode="wait">
                    <VisualizationPanel
                        activeId={activeConcept}
                        isAnimating={isAnimating}
                        setIsAnimating={setIsAnimating}
                        title={t(`concepts.${activeConcept}.title`)}
                        details={t.raw(`concepts.${activeConcept}.details`)}
                        dotStyle={conceptStyles[activeConcept].dot}
                        pauseLabel={tCommon("pause")}
                        playLabel={tCommon("play")}
                    />
                </AnimatePresence>
            </div>
        </div>
    );
}