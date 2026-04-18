"use client"

import { motion } from "framer-motion"
import { Reason } from "../type"

interface ReasonOptionProps {
  reason: Reason
  index: number
  isActive: boolean
  onSelect: (index: number) => void
}

export function ReasonOption({
  reason,
  index,
  isActive,
  onSelect,
}: ReasonOptionProps) {
  return (
    <motion.button
      onClick={() => onSelect(index)}
      className={`w-full text-right p-4 rounded-xl transition-all flex items-start gap-4 ${
        isActive ? "glass-cyan border-nuclear-cyan/50" : "glass hover:bg-white/5"
      }`}
      whileHover={{ x: -5 }}
    >
      <div
        className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
          isActive ? "bg-nuclear-cyan/20 text-nuclear-cyan" : "bg-white/5"
        }`}
      >
        {index + 1}
      </div>
      <div className="colFlex gap-1">
        <h4 className="font-bold">{reason.title}</h4>
        <p className="text-sm text-muted-foreground line-clamp-2">{reason.description}</p>
      </div>
    </motion.button>
  )
}
