import type { ReferencesPageProps } from "./shared/types"
import { ReferenceGrid } from "./reference/ReferenceGrid"
import { ReferenceGroup } from "./reference/ReferenceGroup"

export function ReferencesPage({ items, noteTitle, noteText }: ReferencesPageProps) {
  return (
    <section className="px-4">
      <div className="container mx-auto max-w-5xl flex flex-col gap-16">
        <ReferenceGrid items={items} />

        <div className="text-center fade">
          <ReferenceGroup title={noteTitle}>
            <p className="text-muted-foreground leading-relaxed">{noteText}</p>
          </ReferenceGroup>
        </div>
      </div>
    </section>
  )
}
