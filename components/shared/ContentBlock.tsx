"use client"

import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface ContentBlockProps {
  children: ReactNode
  className?: string
}

export function ContentBlock({ children, className }: ContentBlockProps) {
  return <div className={cn("rounded-3xl fade", className)}>{children}</div>
}
