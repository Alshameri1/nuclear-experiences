'use client';
import { cn } from '@/lib/utils'
import { useLocale } from 'next-intl'

export default function MythTruthTag({type, label, absolute = true}: {type: 'myth' | 'truth', label: string, absolute?: boolean}) {
    const locale = useLocale()
    return (
        <div
            className={cn(
                "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold uppercase",
                type === "myth"
                    ? "border-nuclear-red/35 bg-nuclear-red/10 text-nuclear-red"
                    : "border-nuclear-cyan/35 bg-nuclear-cyan/10 text-nuclear-cyan",
                absolute && "absolute top-6 z-20",
                locale == 'en' ? 'right-6' : 'left-6'
            )}
        >
            <span className="h-2 w-2 rounded-full bg-current" />
            {label}
        </div>
    )
}
