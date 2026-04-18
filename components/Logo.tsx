'use client';

import React from 'react'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

export default function Logo() {
    const t = useTranslations("shared.footer")
    return (
        <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-nuclear-cyan/10 flex items-center justify-center">
                <motion.div
                    className="w-4 h-4 rounded-full bg-nuclear-cyan"
                    animate={{
                        boxShadow: [
                            "0 0 10px var(--nuclear-cyan)",
                            "0 0 20px var(--nuclear-cyan)",
                            "0 0 10px var(--nuclear-cyan)",
                        ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
            </div>
            <span className="font-bold text-lg">{t("brand")}</span>
        </div>
    )
}
