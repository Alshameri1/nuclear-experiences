import { EinsteinEquation } from './Einsteinequation'
import StepBar from '@/components/StepBar'
import { getTranslations } from 'next-intl/server'

export async function CauseOfConfusion() {
    const t = await getTranslations("pages.reaction.truth.causeOfConfusion")
    return (
        <div className='stepWrapperClass'>
            <StepBar title={t('barTitle')} number={3}/>
            <div className='centerFlex lg:flex-row flex-col gap-5 w-full'>
                <article className='colFlex items-center gap-6 text-center'>
                    <h1 className='font-bold text-balance text-4xl md:text-6xl text-nuclear-cyan'>
                        {t("title")}
                    </h1>
                    <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
                        {t("description")}
                    </p>
                </article>
                <EinsteinEquation />
            </div>
        </div>
    )
}
