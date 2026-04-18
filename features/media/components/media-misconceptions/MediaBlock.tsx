"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface MediaBlockProps {
  title: string
  description: string
  icon: ReactNode
  active: boolean
  onClick: () => void
}

export function MediaBlock({
  title,
  description,
  icon,
  active,
  onClick,
}: MediaBlockProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "text-right p-6 rounded-2xl transition-all hover:translate-y-[-5px] colFlex gap-4",
        active ? "glass-brown border-nuclear-brown/50" : "glass hover:bg-white/5",
      )}
    >
      <div
        className={cn(
          "w-12 h-12 rounded-xl flex items-center justify-center",
          active ? "bg-nuclear-brown/20" : "bg-white/5",
        )}
      >
        <div className={cn("w-6 h-6", active ? "text-nuclear-brown" : "text-muted-foreground")}>
          {icon}
        </div>
      </div>
      <article className="colFlex gap-2">
        <h4 className="font-bold">{title}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
      </article>
    </button>
  )
}
