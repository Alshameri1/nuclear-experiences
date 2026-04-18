"use client"

import { AnimatePresence, motion } from "framer-motion"
import { AlertTriangle, X } from "lucide-react"
import type { MediaInfluenceItem, MediaInfluenceLabels } from "../shared/types"

interface MediaInfluenceDetailsProps {
  item: MediaInfluenceItem
  labels: MediaInfluenceLabels
  activeKey: string | number
}

export function MediaInfluenceDetails({ item, labels, activeKey }: MediaInfluenceDetailsProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeKey}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className="glass rounded-2xl p-6"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div className="colFlex gap-3">
            <h4 className="font-bold flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-nuclear-brown" />
              {labels.examples}
            </h4>
            <ul className="space-y-2">
              {item.examples.map((example) => (
                <li key={example} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <X className="w-4 h-4 text-nuclear-red shrink-0 mt-0.5" />
                  {example}
                </li>
              ))}
            </ul>
          </div>
          <div className="glass-dark rounded-xl p-4 colFlex gap-2">
            <h4 className="font-bold text-nuclear-brown">{labels.impact}</h4>
            <p className="text-muted-foreground">{item.impact}</p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
