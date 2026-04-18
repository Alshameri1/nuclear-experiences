import MythTruthTag from '@/components/shared/MythTruthTag'
import { MythTruthWrapper } from '@/components/shared/MythTruthWrapper'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

type Props = {
    type: 'myth' | 'truth'
    explanation: string
    tag: string
    description: string
    src: string
    alt: string
}

export default function MythCard({ type, explanation, tag, description, src, alt }: Props) {
    return (
        <MythTruthWrapper type={type} className='w-full px-4 md:px-5 py-4 rounded-2xl'>
            <header className="betweenFlex items-start gap-2">
                <article className="colFlex items-start text-start gap-1">
                    <h4 className={cn("text-sm", type === "myth" ? "text-nuclear-red" : "text-nuclear-cyan")}>
                        {explanation}
                    </h4>
                    <p className="text-sm text-muted-foreground/80 max-w-sm">
                        {description}
                    </p>
                </article>
                <MythTruthTag label={tag} type={type} absolute={false} />
            </header>
            <main className='w-full h-[200px] sm:h-[240px] md:h-[272px]'>
                <Image
                    src={src}
                    width={400}
                    height={272}
                    alt={alt}
                    loading='lazy'
                    className='w-full h-full object-center object-contain'
                />
            </main>
        </MythTruthWrapper>
    )
}