

interface EventDetailsProps {
  causeLabel: string
  actualEventLabel: string
  casualtiesLabel: string
  cause: string
  actualEvent: string
  casualties: string
}

export function EventDetails({
  causeLabel,
  actualEventLabel,
  casualtiesLabel,
  cause,
  actualEvent,
  casualties,
}: EventDetailsProps) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1">
          <span className="text-xs text-muted-foreground">{causeLabel}</span>
          <p className="text-sm text-foreground">{cause}</p>
        </div>
        <div className="space-y-1">
          <span className="text-xs text-muted-foreground">{actualEventLabel}</span>
          <p className="text-sm text-foreground">{actualEvent}</p>
        </div>
      </div>

      <div className="space-y-1">
        <span className="text-xs text-muted-foreground">{casualtiesLabel}</span>
        <p className="text-sm text-foreground">{casualties}</p>
      </div>
    </div>
  )
}
