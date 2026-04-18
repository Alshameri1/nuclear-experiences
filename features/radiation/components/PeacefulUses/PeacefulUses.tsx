import type { SourceKeyedItemsType, UseCaseType } from "../../types"
import { UseCaseCard } from "./UseCaseCard"
import { useCaseIcons } from "./useCaseIcons"
import { UsesStatsGrid } from "./UsesStatsGrid"
import { getTranslations } from "next-intl/server"


export async function PeacefulUses() {
  const t = await getTranslations("pages.radiation.truth.peacefulUses")

  const items = t.raw("items") as SourceKeyedItemsType
  const stats = t.raw("stats") as Array<{ value: string; label: string }>
  const itemEntries = Object.entries(items) as Array<[keyof typeof useCaseIcons, UseCaseType]>

  return (
    <div className="w-full colFlex gap-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {itemEntries.map(([key, item], index) => (
            <UseCaseCard
              key={key}
              title={item.title}
              description={item.description}
              examples={item.examples}
              icon={useCaseIcons[key]}
              delay={index * 0.1}
            />
          ))}
        </div>

        <UsesStatsGrid stats={stats} />
    </div>
  )
}
