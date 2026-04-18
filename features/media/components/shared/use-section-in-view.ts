import { useInView } from "framer-motion"
import { useRef } from "react"

export function useSectionInView<T extends HTMLElement = HTMLDivElement>(
  amount: number,
  once = false,
) {
  const ref = useRef<T | null>(null)
  const isInView = useInView(ref, { once, amount })

  return { ref, isInView } as const
}
