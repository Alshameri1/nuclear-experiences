import { Info } from 'lucide-react'
import React from 'react'

export default function InfoBar({tip, type}: {tip: string, type: 'truth' | 'myth'}) {
    return (
        <div className={`p-4 rounded-xl bg-linear-to-r ${type === 'truth' ? 'from-nuclear-cyan/10' : 'from-nuclear-red/10'} to-transparent border-r-4 ${type === 'truth' ? 'border-nuclear-cyan' : 'border-nuclear-red'} w-full`}>
            <div className="flex items-center gap-2">
                <Info className={`md:size-5 size-4 ${type === 'truth' ? 'text-nuclear-cyan' : 'text-nuclear-red'}`} />
                <p className={`font-bold ${type === 'truth' ? 'text-nuclear-cyan' : 'text-nuclear-red'} text-md`}>{tip}</p>
            </div>
        </div>
    )
}
