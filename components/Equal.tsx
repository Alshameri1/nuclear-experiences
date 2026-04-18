import React from 'react'

export default function Equal({text}: {text: string}) {
    return (
        <span className="min-w-12 h-12 rounded-full border-[1.5px] dark:border-stone-600 border-mist-200 centerFlex text-2xl mx-auto">
            {text}
        </span>
    )
}
