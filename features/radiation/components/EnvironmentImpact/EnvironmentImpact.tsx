import { EnergyBarChart } from "./EnergyBarChart"
import { EnvironmentInsights } from "./EnvironmentInsights"
import { getTranslations } from "next-intl/server"

export async function EnvironmentImpact() {
  const t = await getTranslations("pages.radiation.truth.environment")

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 gap-5 w-full items-center">
        <EnergyBarChart
          title={t("chartTitle")}
          sourceLabels={t.raw("sources")}
        />

        <EnvironmentInsights insights={t.raw("insights")} />
    </div>
    </div>
  )
}
