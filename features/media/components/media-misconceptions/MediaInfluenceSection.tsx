'use client';

import React, { useState } from 'react'
import { MediaInfluenceGrid } from './MediaInfluenceGrid';
import { useTranslations } from 'next-intl';
import { MediaInfluenceItem, MediaInfluenceLabels, MediaMythItem, MediaMythLabels } from '../shared/types';
import { MediaInfluenceDetails } from './MediaInfluenceDetails';
import { Brain } from 'lucide-react';
import { ContentSection } from '../shared/ContentSection';
import { MisconceptionsList } from './MisconceptionsList';

export default function MediaInfluenceSection() {
    const [activeInfluence, setActiveInfluence] = useState(0)
    const [expandedMyth, setExpandedMyth] = useState<number | null>(null)
    const tComparison = useTranslations("pages.comparison")
    const t = useTranslations("pages.media")

    const mediaInfluences = t.raw("misconceptions.influence.items") as MediaInfluenceItem[]
    const misconceptions = tComparison.raw("myths.items") as MediaMythItem[]
    const mythLabels = tComparison.raw("myths.labels") as MediaMythLabels

    const influenceLabels = t.raw("misconceptions.influence.labels") as MediaInfluenceLabels
    return (
        <>
            <ContentSection
                title={
                    <span className="inline-flex items-center justify-center gap-2">
                        <Brain className="w-6 h-6 text-nuclear-brown" />
                        {t("misconceptions.influence.title")}
                    </span>
                }
            >
                <MediaInfluenceGrid
                    items={mediaInfluences}
                    activeIndex={activeInfluence}
                    onSelect={setActiveInfluence}
                />

                <MediaInfluenceDetails
                    item={mediaInfluences[activeInfluence]}
                    labels={influenceLabels}
                    activeKey={activeInfluence}
                />
            </ContentSection>
            
            <ContentSection title={tComparison("myths.title")}>
                <MisconceptionsList
                    items={misconceptions}
                    expandedIndex={expandedMyth}
                    labels={mythLabels}
                    onToggle={(index) => setExpandedMyth(expandedMyth === index ? null : index)}
                />
            </ContentSection>
        </>
    )
}
