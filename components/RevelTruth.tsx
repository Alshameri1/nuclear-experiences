import { ArrowDown } from 'lucide-react'
import { getTranslations } from 'next-intl/server'
import React from 'react'

export default async function RevelTruth() {
    const t = await getTranslations('shared.common')
    return (
        <div className="colFlex items-center gap-2 animate-pulse text-nuclear-cyan">
            <span className="centerFlex font-medium">{t('showTruth')}</span>
            <ArrowDown size={16}/>
        </div>
    )
}
