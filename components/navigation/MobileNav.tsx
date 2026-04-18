"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import { useSelectedLayoutSegment } from "next/navigation"
import { useTranslations } from "next-intl"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { NAV_ITEMS } from "./Navitems"
import { LanguageSwitcher } from "./language-switcher"
import { ThemeToggle } from "./theme-toggle"

export function MobileNav() {
    const [isOpen, setIsOpen] = useState(false)
    const segment = useSelectedLayoutSegment()
    const t = useTranslations("shared.nav")

    return (
        <>
          {/* Toggle */}
            <div className="fade fixed top-6 right-6 z-50 lg:hidden flex items-center gap-3">
                <ThemeToggle />
                <LanguageSwitcher />

                <button
                    className="glass p-3 rounded-full hover:scale-105 active:scale-95 transition-transform"
                    onClick={() => setIsOpen((prev) => !prev)}
                >
                    {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </div>

          {/* Overlay menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 z-40 lg:hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="absolute inset-0 bg-background/95 backdrop-blur-xl" />
                    
                        <motion.div
                            className="relative h-full flex flex-col items-center justify-center gap-4 p-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                        >
                            {NAV_ITEMS.map((item, index) => {
                                const Icon   = item.icon
                                const active = item.label === segment
                                
                                return (
                                    <Link key={item.href} href={item.href} className="w-full max-w-xs" onClick={() => setIsOpen(false)}>
                                        <motion.div
                                            className={`
                                                flex items-center gap-4 px-6 py-4 rounded-2xl w-full
                                                transition-colors active:scale-[0.98]
                                                ${active ? "glass-cyan text-nuclear-cyan" : "glass text-foreground"}
                                            `}
                                            initial={{ opacity: 0, x: 50 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                        >
                                            <Icon className="w-5 h-5" />
                                            <span className="text-lg font-medium">{t(item.label)}</span>
                                        </motion.div>
                                    </Link>
                                )
                            })}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}