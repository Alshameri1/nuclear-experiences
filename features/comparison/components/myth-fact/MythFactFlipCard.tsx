"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import type { MythFactItem, MythFactLabels } from "../../type"
import { MythFactCardFace } from "./MythFactCardFace"

interface MythFactFlipCardProps {
  data: MythFactItem
  index: number
  labels: MythFactLabels
}

export function MythFactFlipCard({ data, index, labels }: MythFactFlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <motion.div
      className="relative h-64 cursor-pointer perspective-1000"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onClick={() => setIsFlipped((current) => !current)}
      onKeyDown={(event) => event.key === "Enter" && setIsFlipped((current) => !current)}
      tabIndex={0}
      role="button"
      aria-pressed={isFlipped}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <MythFactCardFace
          tone="red"
          label={labels.myth}
          icon={
            <svg className="w-6 h-6 text-nuclear-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          }
          footer={
            <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
              <span>{labels.clickToReveal}</span>
              <motion.svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ rotateY: [0, 180, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </motion.svg>
            </div>
          }
          hoverGlow
        >
          <p className="text-lg font-medium text-foreground text-pretty leading-relaxed">
            {data.myth}
          </p>
        </MythFactCardFace>

        <MythFactCardFace
          tone="cyan"
          label={labels.fact}
          icon={
            <svg className="w-6 h-6 text-nuclear-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          }
          footer={
            <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
              <span>{labels.clickToReturn}</span>
            </div>
          }
          style={{ transform: "rotateY(180deg)" }}
        >
          <div className="flex flex-col justify-center gap-3">
            <h4 className="text-xl font-bold text-nuclear-cyan">{data.fact}</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{data.detail}</p>
          </div>
        </MythFactCardFace>
      </motion.div>
    </motion.div>
  )
}
