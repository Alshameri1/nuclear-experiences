import { BookOpen, Building2, Globe, Newspaper, Shield } from "lucide-react"
import type { ReferenceTone, ReferenceVisual } from "../shared/types"

export const referenceVisuals: ReferenceVisual[] = [
  { href: "https://energy.gov", icon: Building2, tone: "cyan" },
  { href: "https://iaea.org", icon: Globe, tone: "blue" },
  { href: "https://nti.org", icon: Shield, tone: "orange" },
  { href: "https://pbs.org", icon: Newspaper, tone: "cyan" },
  { href: "https://world-nuclear.org", icon: BookOpen, tone: "blue" },
]


export const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export const toneClasses: Record<
  ReferenceTone,
  {
    bg: string
    text: string
    border: string
    glow: string
  }
> = {
  cyan: {
    bg: "bg-nuclear-cyan/10",
    text: "text-nuclear-cyan",
    border: "hover:border-nuclear-cyan/50",
    glow: "group-hover:shadow-[0_0_30px_var(--nuclear-cyan)]",
  },
  blue: {
    bg: "bg-nuclear-blue/10",
    text: "text-nuclear-blue",
    border: "hover:border-nuclear-blue/50",
    glow: "group-hover:shadow-[0_0_30px_var(--nuclear-blue)]",
  },
  orange: {
    bg: "bg-nuclear-orange/10",
    text: "text-nuclear-orange",
    border: "hover:border-nuclear-orange/50",
    glow: "group-hover:shadow-[0_0_30px_var(--nuclear-orange)]",
  },
}
