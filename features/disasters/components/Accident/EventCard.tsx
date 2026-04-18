export interface AccidentItem {
  name: string
  location: string
  causeLabel: string
  cause: string
  actualEventLabel: string
  actualEvent: string
  casualtiesLabel: string
  casualties: string
  keyFact: string
}

export interface AccidentLabels {
  cause: string
  actualEvent: string
  casualties: string
}

export interface AccidentConclusion {
  title: string
  text: string
}
import { EventDetails } from "./EventDetails"
import InfoBar from "./InfoBar"

export function EventCard({ data }: { data: AccidentItem }) {

  return (
    <div className="w-full rounded-2xl p-6 md:p-8 border border-nuclear-cyan/20 hover:border-nuclear-cyan/30 transition-colors colFlex gap-4">

      <div className="colFlex gap-5">
            <article className="colFlex gap-1">
              <h3 className="text-2xl font-bold text-foreground">{data.name}</h3>
              <p className="text-sm text-muted-foreground">{data.location}</p>
            </article>

            <EventDetails
              causeLabel={data.causeLabel}
              actualEventLabel={data.actualEventLabel}
              casualtiesLabel={data.casualtiesLabel}
              cause={data.cause}
              actualEvent={data.actualEvent}
              casualties={data.casualties}
            />

            <InfoBar tip={data.keyFact} type="truth" />
          </div>
        </div>
  )
}
