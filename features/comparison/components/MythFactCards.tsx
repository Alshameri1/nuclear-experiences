import { MythFactFlipCard } from "./myth-fact/MythFactFlipCard"
import { Info } from "lucide-react"
import { getTranslations } from "next-intl/server"

export interface MythFactItem {
  myth: string
  fact: string
  detail: string
}

export interface MythFactLabels {
  myth: string
  fact: string
  clickToReveal: string
  clickToReturn: string
  knowledgeWeapon: string
}


export async function MythFactCards() {
  const t = await getTranslations("pages.comparison.myths")

  const items = t.raw("items") as MythFactItem[]
  const labels = t.raw("labels") as MythFactLabels
  const titleWords = t("title").split(" ")

  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-background via-nuclear-dark to-background" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-nuclear-red/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-nuclear-blue/5 rounded-full blur-3xl" />

      <div className="componentsClass fade colFlex gap-16 relative z-10">
        <div className="text-center colFlex gap-4">
          <h2 className="text-3xl md:text-5xl font-bold text-balance">
            <span className="text-nuclear-red">{titleWords[0]}</span>
            <span className="text-nuclear-cyan"> {titleWords[1]} </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t("description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto w-full">
          {items.map((item, index) => (
            <MythFactFlipCard key={index} data={item} index={index} labels={labels} />
          ))}
        </div>
      </div>
    </section>
  )
}
