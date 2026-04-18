
interface ImportanceCardProps {
  title: string
  description: string
  icon: string
}

export function ImportanceCard({
  title,
  description,
  icon,
}: ImportanceCardProps) {
  return (
    <div
      className="glass rounded-2xl p-5 text-center group hover:border-nuclear-cyan/30 transition-colors hover:-translate-y-2 colFlex gap-3"
    >
      <div className="colFlex items-center gap-2">
        <div className="text-4xl">{icon}</div>
        <h4 className="font-bold">{title}</h4>
      </div>
      <p className="text-xs text-muted-foreground">{description}</p>
    </div>
  )
}
