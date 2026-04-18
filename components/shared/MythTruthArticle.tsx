import React from 'react'

export default function MythTruthArticle({type, tag, title, subtitle}: {type: "myth" | "truth",tag: string, title: string, subtitle: string}) {
    return (
        <article className={`colFlex gap-5 w-full ${type === "myth" ? "items-center text-center" : "items-start text-start"}`}>
            <div className={`colFlex gap-3 ${type === "myth" ? "text-nuclear-red" : "text-nuclear-cyan"}`}>
                <span className="text-md font-medium uppercase">
                    {tag}
                </span>
                <h1 className="text-4xl font-black text-balance md:text-6xl lg:text-7xl">
                    {title}
                </h1>
            </div>
                <p className="text-sm text-muted-foreground md:text-base max-w-5xl">
                    {subtitle}
                </p>
        </article>
    )
}
