"use client"

import { motion } from "framer-motion"
import { useState, type ReactNode } from "react"
import { UseCaseExamples } from "./UseCaseExamples"

interface UseCaseCardProps {
  title: string
  description: string
  examples: string[]
  icon: ReactNode
  delay: number
}

export function UseCaseCard({
  title,
  description,
  examples,
  icon,
  delay,
}: UseCaseCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="relative rounded-2xl p-6 border border-nuclear-cyan/20 hover:border-nuclear-cyan/50 transition-all duration-300 cursor-pointer overflow-hidden colFlex gap-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
    >
      <motion.div
        className="absolute inset-0 bg-linear-to-br from-nuclear-cyan/10 to-transparent opacity-0"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      <motion.div
        className="relative w-14 h-14 rounded-xl bg-nuclear-cyan/10 flex items-center justify-center text-nuclear-cyan"
        animate={{
          scale: isHovered ? 1.1 : 1,
          boxShadow: isHovered ? "0 0 20px var(--nuclear-cyan)" : "none",
        }}
        transition={{ duration: 0.3 }}
      >
        {icon}
      </motion.div>

      <article className="colFlex gap-2">
        <h3 className="text-xl font-bold text-foreground relative">{title}</h3>
        <p className="text-sm text-muted-foreground relative">{description}</p>
      </article>

      <UseCaseExamples examples={examples} isHovered={isHovered} />

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-nuclear-cyan"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  )
}
