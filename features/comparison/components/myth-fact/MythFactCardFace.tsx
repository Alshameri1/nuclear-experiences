"use client"

import { motion, type MotionStyle } from "framer-motion"
import { type ReactNode } from "react"

interface MythFactCardFaceProps {
  tone: "red" | "cyan"
  label: string
  icon: ReactNode
  footer: ReactNode
  children: ReactNode
  style?: MotionStyle
  hoverGlow?: boolean
}

export function MythFactCardFace({
  tone,
  label,
  icon,
  footer,
  children,
  style,
  hoverGlow = false,
}: MythFactCardFaceProps) {
  const isRed = tone === "red"

  return (
    <div
      className={`absolute inset-0 rounded-2xl p-6 flex flex-col justify-between glass border-2 ${
        isRed
          ? "border-nuclear-red/30 hover:border-nuclear-red/50"
          : "border-nuclear-cyan/30 hover:border-nuclear-cyan/50"
      } transition-colors`}
      style={{ ...(style as any), backfaceVisibility: "hidden" }}
    >
      <div className="flex items-center justify-between">
        <span
          className={`text-xs font-medium px-3 py-1 rounded-full ${
            isRed ? "text-nuclear-red bg-nuclear-red/10" : "text-nuclear-cyan bg-nuclear-cyan/10"
          }`}
        >
          {label}
        </span>
        {icon}
      </div>

      <div className="flex-1 flex items-center">{children}</div>

      {footer}

      {hoverGlow ? (
        <motion.div
          className="absolute inset-0 rounded-2xl bg-nuclear-red/5 opacity-0 pointer-events-none"
          whileHover={{ opacity: 1 }}
        />
      ) : (
        <div className="absolute inset-0 rounded-2xl shadow-[inset_0_0_30px_var(--nuclear-cyan)] opacity-10 pointer-events-none" />
      )}
    </div>
  )
}
