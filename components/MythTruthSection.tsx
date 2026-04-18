import MythTruthArticle from '@/components/shared/MythTruthArticle'
import { MythTruthWrapper } from '@/components/shared/MythTruthWrapper'
import React from 'react'

type Props = {
    tagLabel: string
    type: 'myth' | 'truth'
    title: string
    subtitle: string
    children?: React.ReactNode
}
export default function MythTruthSection({tagLabel, type, title, subtitle, children}: Props) {
    return (
        <MythTruthWrapper label={tagLabel} type={type} className="container py-[50px] px-[40px] rounded-4xl" childrenClass="colFlex gap-10">
            <MythTruthArticle type={type} tag={tagLabel} title={title} subtitle={subtitle} />
            {children}
        </MythTruthWrapper>
    )
}
