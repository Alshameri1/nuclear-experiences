import type { Metadata, Viewport } from 'next'
import { Vazirmatn } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { getLocale, getMessages, getTranslations } from 'next-intl/server'
import { IntlProvider } from '@/providers/intl-provider'
import { ThemeProvider } from '@/providers/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import './Colors-Animations.css'
import './globals.css'
import { Layout } from '@/components/Layout'
import FadeInObserver from '@/components/FadeInObserver'
import NavigationLoader from '@/components/NavigationLoader'

const vazirmatn = Vazirmatn({ 
  subsets: ['arabic', 'latin'],
  variable: '--font-vazirmatn',
  display: 'swap',
})

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('shared.metadata')
  
  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords').split(','),
  }
}

export const viewport: Viewport = {
  themeColor: '#0a0a0f',
  width: 'device-width',
  initialScale: 1,
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const locale = await getLocale()
  const messages = await getMessages()
  const dir = locale === 'ar' ? 'rtl' : 'ltr'

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning data-scroll-behavior="smooth">
      <body className={`${vazirmatn.className} font-sans antialiased overflow-x-hidden transition-colors duration-300`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <IntlProvider locale={locale} messages={messages}>
            <NavigationLoader />
            <FadeInObserver />
            <Layout>{children}</Layout>
            <Toaster />
            {process.env.NODE_ENV === 'production' && <Analytics />}
          </IntlProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
