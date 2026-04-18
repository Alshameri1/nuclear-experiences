"use client"

import { useLocale } from 'next-intl'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { useTransition } from 'react'

export function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const toggleLocale = () => {
    const newLocale = locale === 'ar' ? 'en' : 'ar'
    
    // Set cookie for the locale
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`
    
    startTransition(() => {
      router.refresh()
    })
  }

  return (
    <motion.button
      onClick={toggleLocale}
      disabled={isPending}
      className="surface-pill px-3 py-1.5 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-accent/50 transition-colors disabled:opacity-50"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className={locale === 'ar' ? 'text-nuclear-cyan' : 'text-muted-foreground'}>
        AR
      </span>
      <span className="text-muted-foreground/50">|</span>
      <span className={locale === 'en' ? 'text-nuclear-cyan' : 'text-muted-foreground'}>
        EN
      </span>
    </motion.button>
  )
}
