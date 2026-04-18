"use client"

import { motion } from "framer-motion"
import { ReasonEnrichment } from "../type"

interface EnrichmentBarsProps {
  enrichment: ReasonEnrichment
}

export function EnrichmentBars({ enrichment }: EnrichmentBarsProps) {
  return (
    <div className="mt-6">
      <p className="text-sm text-muted-foreground mb-3">{enrichment.label}</p>
      <div className="flex gap-4">
        <div className="flex-1">
          <div className="h-4 rounded-full bg-white/10 overflow-hidden">
            <motion.div
              className="h-full bg-nuclear-cyan rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "5%" }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </div>
          <p className="text-xs text-center mt-1 text-nuclear-cyan">{enrichment.reactor}</p>
        </div>
        <div className="flex-1">
          <div className="h-4 rounded-full bg-white/10 overflow-hidden">
            <motion.div
              className="h-full bg-nuclear-red rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "90%" }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </div>
          <p className="text-xs text-center mt-1 text-nuclear-red">{enrichment.bomb}</p>
        </div>
      </div>
    </div>
  )
}
