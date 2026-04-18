import type { RadiationEnvironmentInsight } from "../../types"
import { ImpactInsightCard } from "./ImpactInsightCard"
import { CheckCircle, Earth, Zap } from "lucide-react"

interface EnvironmentInsightsProps {
  insights: {
    emissions: RadiationEnvironmentInsight
    land: RadiationEnvironmentInsight
    future: RadiationEnvironmentInsight
  }
}

export function EnvironmentInsights({ insights }: EnvironmentInsightsProps) {
  return (
    <div className="rowFlex gap-4 fade">
      <ImpactInsightCard
        title={insights.emissions.title}
        description={insights.emissions.text}
        icon={ <Zap /> }
        tone="cyan"
      />
      <ImpactInsightCard
        title={insights.land.title}
        description={insights.land.text}
        icon={ <Earth /> }
        tone="blue"
      />
      <ImpactInsightCard
        title={insights.future.title}
        description={insights.future.text}
        icon={ <CheckCircle /> }
        tone="green"
      />
    </div>
  )
}
