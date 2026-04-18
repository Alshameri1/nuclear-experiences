"use client"

import { motion } from "framer-motion"
import { useSelectedLayoutSegment } from "next/navigation"
import { useTranslations } from "next-intl"
import Link from "next/link"
import { LanguageSwitcher } from "@/components/navigation/language-switcher"
import { ThemeToggle } from "@/components/navigation/theme-toggle"
import { NAV_ITEMS } from "./Navitems"

const VerticalDivider = () => (
    <div className="surface-divider w-px h-4 mx-2" />
)
export function DesktopNav() {
    const segment = useSelectedLayoutSegment()
    const t = useTranslations("shared.nav")
    
    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 hidden lg:block z-50">
            <div className="glass px-4 py-2 rounded-full flex items-center gap-1">
                {NAV_ITEMS.map((item) => {
                    const Icon   = item.icon;
                    const label = item.label === 'home' ? null : item.label;
                    const active = label === segment;
                    return (
                        <Link key={item.href} href={item.href}
                            className={`
                                relative px-3 py-2 rounded-full text-sm font-medium
                                flex items-center gap-2 transition-colors
                                hover:scale-105 active:scale-95
                                ${active
                                    ? "text-nuclear-cyan"
                                    : "text-muted-foreground hover:text-foreground"
                                }
                            `}
                        >
                            {active && (
                                <motion.div
                                    layoutId="activeNav"
                                    className="absolute inset-0 bg-nuclear-cyan/10 rounded-full"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            <Icon className="w-4 h-4 relative z-10" />
                            <span className="relative z-10">{t(item.label)}</span>
                        </Link>
                    )
                })}
                <VerticalDivider />
                <ThemeToggle />
                <VerticalDivider />
                <LanguageSwitcher />
            </div>
        </nav>
    )
}