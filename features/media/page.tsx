
import { Tv } from "lucide-react"
import { SectionShell } from "@/features/media/components/SectionShell"
import { SectionIntro } from "@/components/shared/SectionIntro"
import { ContentSection } from "@/components/shared/ContentSection"
import type { MediaImportanceItem } from "./components/shared/types"
import { ImportanceGrid } from "./components/media-misconceptions/ImportanceGrid"
import MediaInfluenceSection from "./components/media-misconceptions/MediaInfluenceSection"
import { getTranslations } from "next-intl/server"

export async function MediaPage() {
  const t = await getTranslations("pages.media")
  const correctionImportance = t.raw("misconceptions.importance.items") as MediaImportanceItem[]
  return (
    <SectionShell className="pageClass"
      background={
        <>
          <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-nuclear-brown/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-nuclear-cyan/5 rounded-full blur-3xl" />
        </>
      }
    >
      <div className="fade colFlex gap-16">
        <SectionIntro
          badge={t("badge")}
          title={t("title")}
          description={t("description")}
          icon={<Tv className="w-4 h-4 text-nuclear-brown" />}
          accentClassName="text-gradient-brown"
          badgeTextClassName="text-nuclear-brown"
        />

        <MediaInfluenceSection />

        <ContentSection
          title={t("misconceptions.importance.title")}
          description={t("misconceptions.importance.description")}
        >
          <ImportanceGrid items={correctionImportance}  />
        </ContentSection>

        <div className="glass-brown rounded-2xl p-6 fade">
          <p className="text-lg">
            <strong className="text-nuclear-brown">{t("misconceptions.cta.label")}</strong>{" "}
            <span className="text-muted-foreground">{t("misconceptions.cta.text")}</span>
          </p>
        </div>
      </div>
    </SectionShell>
  )
}
