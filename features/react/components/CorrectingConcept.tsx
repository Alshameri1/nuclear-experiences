import Equal from '@/components/Equal';
import { MythTruthWrapper } from '@/components/shared/MythTruthWrapper';
import StepBar from '@/components/StepBar';
import { getTranslations } from 'next-intl/server';
import { FissionAnimation } from './Fissionanimation';

export async function CorrectingConcept() {
    const tCommon = await getTranslations('shared.common')
    const t = await getTranslations("pages.reaction")
    return (
        <div className="stepWrapperClass">
            <StepBar title={tCommon('correctConcept')} number={1} />
            <div className="w-full rowFlex gap-4 font-semibold text-3xl">
                <MythTruthWrapper type="truth" className="rounded-[28px] p-6 w-full" childrenClass='w-full colFlex items-start gap-2'>
                    <span className="text-nuclear-cyan text-start w-full">{t('truth.reactorFission')}</span>
                    <div className='centerFlex w-full'>
                        <FissionAnimation color="#22d3ee" speed="slow" size={180} />
                    </div>
                </MythTruthWrapper>
                
                <Equal text='≠'/>

                <MythTruthWrapper type="myth" className="rounded-[28px] p-6 w-full" childrenClass='w-full colFlex items-start gap-2'>
                    <span className="text-nuclear-red">{t('truth.weaponFission')}</span>
                    <div className='centerFlex w-full'>
                        <FissionAnimation color="#ef4444" speed="fast" size={180} />
                    </div>
                </MythTruthWrapper>
            </div>
        </div>
    )
}
