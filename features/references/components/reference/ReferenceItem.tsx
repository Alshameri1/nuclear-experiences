"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import type { ReferenceItemData, ReferenceVisual } from "../shared/types"
import { CitationLink } from "./CitationLink"
import { cardVariants, referenceVisuals, toneClasses } from "./constants"

interface ReferenceItemProps {
  item: ReferenceItemData
  index: number
}

export function ReferenceItem({ item, index }: ReferenceItemProps) {
  const visual = referenceVisuals[index] ?? referenceVisuals[0]
  const colors = toneClasses[visual.tone]
  const Icon = visual.icon

  return (
    <motion.a
      href={visual.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
      variants={cardVariants}
    >
      <motion.div
        className={`relative overflow-hidden rounded-2xl bg-card/50 backdrop-blur-sm p-6 h-full transition-all duration-300 ${colors.border}`}
        whileHover={{ y: -5, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className={`absolute top-0 right-0 w-32 h-32 ${colors.bg} rounded-full blur-3xl`} />
        </div>

        <div className="relative z-10 flex h-full flex-col gap-4">
          <div className="flex items-start justify-between">
            <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center transition-all duration-300 ${colors.glow}`}>
              <Icon className={`w-6 h-6 ${colors.text}`} />
            </div>
            <ExternalLink className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          <div className="flex flex-col gap-1">
            <h3 className={`text-xl font-bold transition-colors ${colors.text}`}>
              {item.visibleName}
            </h3>
            <div className="flex flex-col gap-3">
              <p className="text-sm text-muted-foreground font-mono">{item.name}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </div>
          </div>

        
          <CitationLink href={visual.href} className={`text-sm font-medium ${colors.text}`} />
          
        </div>
      </motion.div>
    </motion.a>
  )
}
