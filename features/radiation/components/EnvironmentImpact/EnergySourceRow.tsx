"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { energySourceIcons } from "./constants"

interface EnergySourceRowProps {
  source: {
    key: string
    co2: number
    color: string
  }
  label: string
  width: number
  delay: number
}

export function EnergySourceRow({
  source,
  label,
  width,
  delay,
}: EnergySourceRowProps) {
  const [isHovered, setIsHovered] = useState(false)
  const isNuclear = source.key === "nuclear"

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center gap-4">
        <div
          className={`w-10 h-10 rounded-lg flex items-center justify-center ${
            isNuclear ? "bg-nuclear-cyan/20 text-nuclear-cyan" : "bg-muted text-muted-foreground"
          }`}
        >
          {energySourceIcons[source.key]}
        </div>
        <span
          className={`text-sm font-medium w-24 ${
            isNuclear ? "text-nuclear-cyan" : "text-foreground"
          }`}
        >
          {label}
        </span>
        <div className="flex-1 relative">
          <div className="h-8 bg-nuclear-dark rounded-lg overflow-hidden">
            <motion.div
              className={`h-full rounded-lg ${source.color} ${
                isNuclear ? "shadow-[0_0_15px_var(--nuclear-cyan)]" : ""
              }`}
              initial={{ width: 0 }}
              animate={{ width: `${width}%` }}
              transition={{ delay: 0.5 + delay, duration: 0.8, ease: "easeOut" }}
            />
          </div>
          <motion.div
            className={`absolute top-1/2 -translate-y-1/2 px-2 py-1 rounded text-xs font-mono transition-opacity ${
              isNuclear ? "bg-nuclear-cyan text-nuclear-dark" : "bg-muted text-foreground"
            }`}
            style={{ left: `${width}%`, marginLeft: "8px" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered || isNuclear ? 1 : 0 }}
          >
            {source.co2} g
          </motion.div>
        </div>
      </div>
    </div>
  )
}
