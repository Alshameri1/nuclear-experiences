import StepBar from '@/components/StepBar'
import { getTranslations } from 'next-intl/server'
import { ConceptsInteractive } from './Conceptsinteractive'
import { KeyPointBox } from './Keypointbox'

export async function EinsteinExamples() {
    const t = await getTranslations('pages.reaction.truth.einsteinExamples')
    return (
        <div className='stepWrapperClass'>
            <StepBar title={t('barTitle')} number={4}/>
            <ConceptsInteractive />
            <KeyPointBox />
        </div>
    )
}
