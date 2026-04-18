import type { ReactNode } from "react"

interface ReferenceGroupProps {
  title: string
  description?: string
  children: ReactNode
}

export function ReferenceGroup({ title, description, children }: ReferenceGroupProps) {
  return (
    <div className="glass-dark rounded-2xl p-8 max-w-3xl mx-auto flex flex-col gap-4">
      <h3 className="text-xl font-bold">{title}</h3>
      <div className="flex flex-col">
        {description ? <p className="text-muted-foreground leading-relaxed">{description}</p> : null}
        {children}
      </div>
    </div>
  )
}
