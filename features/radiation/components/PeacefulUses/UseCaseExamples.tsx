"use client"

import { motion } from "framer-motion"

interface UseCaseExamplesProps {
  examples: string[]
  isHovered: boolean
}

export function UseCaseExamples({ examples, isHovered }: UseCaseExamplesProps) {
  return (
    <motion.div
      className="space-y-2 relative colFlex gap-3"
      initial={{ height: 0, opacity: 0 }}
      animate={{
        height: isHovered ? "auto" : 0,
        opacity: isHovered ? 1 : 0,
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="h-px bg-border" />
      {examples.map((example, index) => (
        <motion.div
          key={example}
          className="flex items-center gap-2 text-sm"
          initial={{ x: -10, opacity: 0 }}
          animate={isHovered ? { x: 0, opacity: 1 } : {}}
          transition={{ delay: index * 0.05 }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-nuclear-cyan" />
          <span className="text-foreground">{example}</span>
        </motion.div>
      ))}
    </motion.div>
  )
}
