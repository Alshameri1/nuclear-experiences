import Link from "next/link"
import { ArrowLeft, LucideIcon } from "lucide-react"

interface SectionCardProps {
    href: string
    icon: LucideIcon
    color: string
    gradient: string
    title: string
    description: string
    more: string
}

export function SectionCard({ href, icon: Icon, color, gradient, title, description, more }: SectionCardProps) {
    const colorClass = color === "cyan"
        ? "text-nuclear-cyan group-hover:shadow-[0_0_30px_var(--nuclear-cyan)]"
        : color === "blue"
        ? "text-nuclear-blue group-hover:shadow-[0_0_30px_var(--nuclear-blue)]"
        : color === "red"
        ? "text-nuclear-red group-hover:shadow-[0_0_30px_var(--nuclear-red)]"
        : "text-nuclear-orange group-hover:shadow-[0_0_30px_var(--nuclear-orange)]"

    return (
        <Link href={href} className={`relative colFlex gap-4 overflow-hidden rounded-2xl h-fit group-hover:border bg-linear-to-br ${gradient} backdrop-blur-sm p-6 h-fit transition-all duration-300 group-hover:border-(--text-nuclear-colorful)/50 hover:scale-105 hover:-translate-y-0.5 group`}
            style={{ '--text-nuclear-colorful': `var(--nuclear-${color})` } as React.CSSProperties}
        >
            {/* Icon */}
            <div className={`w-12 h-12 rounded-xl bg-background/50 flex items-center justify-center transition-all duration-300 ${colorClass}`}>
                <Icon className="w-6 h-6" />
            </div>
            <div className="colFlex gap-2">
                {/* Title */}
                <h3 className={`text-xl font-bold group-hover:text-(--text-nuclear-colorful) transition-colors`}>
                    {title}
                </h3>
                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                    {description}
                </p>
            </div>
            {/* Learn more */}
            <div className="w-full rowFlex justify-end gap-2 text-sm font-medium text-(--text-nuclear-colorful) opacity-0 group-hover:opacity-100 transition-opacity">
                <span>{more}</span>
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            </div>
        </Link>
    )
}