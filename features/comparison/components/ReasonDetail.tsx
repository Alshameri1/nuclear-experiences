"use client"

import { motion } from "framer-motion"
import { Shield } from "lucide-react"
import { Reason, ReasonEnrichment } from "../type"
import { EnrichmentBars } from "./EnrichmentBars"

interface ReasonDetailProps {
  reason: Reason
  summaryLabel: string
  enrichment: ReasonEnrichment
  showEnrichment: boolean
}

export function ReasonDetail({
  reason,
  summaryLabel,
  enrichment,
  showEnrichment,
}: ReasonDetailProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="glass rounded-2xl p-6 h-fit colFlex gap-4"
    >
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-nuclear-cyan/20 flex items-center justify-center">
          <Shield className="w-6 h-6 text-nuclear-cyan" />
        </div>
        <h4 className="text-xl font-bold">{reason.title}</h4>
      </div>

      <p className="text-muted-foreground leading-relaxed">{reason.description}</p>

      <div className="glass-cyan rounded-xl p-4">
        <p className="text-sm">
          <strong className="text-nuclear-cyan">{summaryLabel}</strong> {reason.detail}
        </p>
      </div>

      {showEnrichment ? <EnrichmentBars enrichment={enrichment} /> : null}
    </motion.div>
  )
}
