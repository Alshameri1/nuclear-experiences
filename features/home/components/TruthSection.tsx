import { MythTruthWrapper } from '@/components/shared/MythTruthWrapper'
import React from 'react'
import { SectionsPreviewGrid } from './SectionsPreviewGrid'
import { getTranslations } from 'next-intl/server'
import MythTruthArticle from '@/components/shared/MythTruthArticle'

export default async function TruthSection({tag}: {tag: string}) {
    const t = await getTranslations('pages.home.truth')
    return (
        <MythTruthWrapper type="truth" 
            label={tag} 
            className="container py-[50px] px-[40px] rounded-4xl" 
            childrenClass="colFlex gap-10"
        >
            <MythTruthArticle type="truth" tag={tag} title={t('title')} subtitle={t('subtitle')}/>
            <SectionsPreviewGrid />
        </MythTruthWrapper>
    )
}
