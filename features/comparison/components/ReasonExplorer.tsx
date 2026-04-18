"use client"

import { AnimatePresence } from "framer-motion"
import { ReasonOption } from "./ReasonOption"
import { ReasonDetail } from "./ReasonDetail"
import { useState } from "react"
import { Reason, ReasonEnrichment } from "../type"

interface ReasonExplorerProps {
  title: string
  subtitle: string
  summaryLabel: string
  enrichment: ReasonEnrichment
  reasons: Reason[]
}

export function ReasonExplorer({
  title,
  subtitle,
  summaryLabel,
  enrichment,
  reasons,
}: ReasonExplorerProps) {
  const [activeReason, setActiveReason] = useState(0)
  const currentReason = reasons[activeReason] ?? reasons[0]
  return (
    <div className="glass-dark rounded-3xl p-8 colFlex gap-8 container">
      <article className="colFlex gap-2">
        <h3 className="text-2xl font-bold text-center">{title}</h3>
        <p className="text-center text-muted-foreground">{subtitle}</p>
      </article>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-3">
          {reasons.map((reason, index) => (
            <ReasonOption
              key={reason.title}
              reason={reason}
              index={index}
              isActive={activeReason === index}
              onSelect={setActiveReason}
            />
          ))}
        </div>

        <AnimatePresence mode="wait">
          <ReasonDetail
            key={activeReason}
            reason={currentReason}
            summaryLabel={summaryLabel}
            enrichment={enrichment}
            showEnrichment={activeReason === 0}
          />
        </AnimatePresence>
      </div>
    </div>
  )
}
