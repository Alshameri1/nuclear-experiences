import { energySourcesData } from "./constants"
import { EnergySourceRow } from "./EnergySourceRow"

interface EnergyBarChartProps {
  title: string
  sourceLabels: Record<string, string>
}

export function EnergyBarChart({ title, sourceLabels }: EnergyBarChartProps) {
  const maxCO2 = Math.max(...energySourcesData.map((source) => source.co2))

  return (
    <div className="rounded-3xl fade colFlex gap-6">
      <h3 className="text-xl font-semibold text-muted-foreground">{title}</h3>
      <div className="space-y-4">
        {energySourcesData.map((source, index) => {
          const width = (source.co2 / maxCO2) * 100

          return (
            <EnergySourceRow
              key={source.key}
              source={source}
              label={sourceLabels[source.key]}
              width={width}
              delay={index * 0.1}
            />
          )
        })}
      </div>
    </div>
  )
}
