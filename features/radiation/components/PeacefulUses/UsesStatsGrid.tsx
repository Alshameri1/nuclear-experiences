"use client"

import { motion } from "framer-motion"

interface UsesStatsGridProps {
  stats: Array<{ value: string; label: string }>
}

export function UsesStatsGrid({ stats }: UsesStatsGridProps) {
  return (
    <div
      className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full fade"
    >
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className="text-center colFlex gap-2"
        >
          <div className="text-3xl md:text-4xl font-bold text-nuclear-cyan">
            {stat.value}
          </div>
          <div className="text-sm text-muted-foreground">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}
