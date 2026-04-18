import { FileText } from "lucide-react"
import { getTranslations } from "next-intl/server"
import { ReferencesPage } from "./components/ReferencesPage"
import type { ReferenceItemData } from "./components/shared/types"
import { SectionIntro } from "@/components/shared/SectionIntro"

export default async function ReferencesPageRoute() {
  const t = await getTranslations("pages.references")
  const items = t.raw("items") as ReferenceItemData[]

  return (
    <div className="pageClass">
      <SectionIntro
        badge={t("badge")}
        title={t("title")}
        description={t("description")}
        icon={<FileText className="w-4 h-4 text-nuclear-cyan" />}
        accentClassName="text-gradient-cyan"
        badgeTextClassName="text-nuclear-cyan"
      />
      <ReferencesPage items={items} noteTitle={t("note.title")} noteText={t("note.text")} />
    </div>
  )
}
