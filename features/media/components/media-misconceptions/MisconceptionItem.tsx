"use client"

import { AnimatePresence, motion } from "framer-motion"
import { Brain, Check, ChevronRight, X } from "lucide-react"
import type { MediaMythItem, MediaMythLabels } from "../shared/types"

interface MisconceptionItemProps {
  item: MediaMythItem
  index: number
  isExpanded: boolean
  labels: MediaMythLabels
  onToggle: (index: number) => void
}

export function MisconceptionItem({
  item,
  index,
  isExpanded,
  labels,
  onToggle,
}: MisconceptionItemProps) {

  return (
    <div
      className="glass-dark rounded-2xl overflow-hidden fade"
    >
      <button
        type="button"
        onClick={() => onToggle(index)}
        className="w-full p-6 text-right flex items-center gap-4"
      >
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-nuclear-red/20`}>
          <X className={`w-5 h-5 text-nuclear-red`} />
        </div>

        <div className="flex-1">
          <p className="font-medium text-foreground">{item.myth}</p>
        </div>

        <ChevronRight
          className={`w-5 h-5 text-muted-foreground transition-transform ${
            isExpanded ? "rotate-90" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {isExpanded ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-2 border-t border-border/50">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="glass-cyan rounded-xl p-4 colFlex gap-2">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-sm font-medium text-green-400">{labels.fact}</span>
                  </div>
                  <p className="text-foreground">{item.fact}</p>
                </div>
                <div className="glass rounded-xl p-4 colFlex gap-2">
                  <div className="flex items-center gap-2">
                    <Brain className="w-4 h-4 text-nuclear-cyan" />
                    <span className="text-sm font-medium text-nuclear-cyan">
                      {labels.explanation}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm">{item.detail}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}
