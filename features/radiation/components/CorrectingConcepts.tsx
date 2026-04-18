import Equal from '@/components/Equal'
import { MythTruthWrapper } from '@/components/shared/MythTruthWrapper'

export default function CorrectingConcepts({weapon, reactor}: {weapon: string, reactor: string}) {
    return (
        <div className="w-full rowFlex gap-4">
            <MythTruthWrapper type="truth" className="rounded-[28px] p-6 w-full">
                <span className="text-nuclear-cyan">{reactor}</span>
            </MythTruthWrapper>
            
            <Equal text='≠'/>

            <MythTruthWrapper type="myth" className="rounded-[28px] p-6 w-full">
                <span className="text-nuclear-red">{weapon}</span>
            </MythTruthWrapper>
        </div>
    )
}
