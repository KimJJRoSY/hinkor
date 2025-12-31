import type { Metadata } from 'next'
import './globals.css'
import { GotoTopButton, Header, NavigationBar, ToastContainer } from '@/shared/ui'
import { Suspense } from 'react'
import { QueryProvider } from '@/shared/provider'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations } from 'next-intl/server'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Metadata')
  return {
    title: {
      default: t('title'),
      template: t('titleTemplate'),
    },
    description: t('description'),
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const messages = await getMessages()

  return (
    <html lang="en">
      <body>
        <NextIntlClientProvider messages={messages}>
          <div className="flex justify-center">
            <div className="relative max-w-3xl w-full bg-white p-5 min-h-screen dark:bg-gray-900">
              <ToastContainer />
              <div className="sticky top-0 z-50 bg-white dark:bg-gray-900">
                <Suspense fallback={null}>
                  <Header />
                  <NavigationBar />
                </Suspense>
              </div>
              <QueryProvider>{children}</QueryProvider>
              <GotoTopButton />
              <footer className="mt-3 text-xs text-gray-400 text-center">
                <p>© 2025 JeongJooKim</p>
                <a href="https://github.com/KimJJRoSY/hinkor/issues">Issues & Feedback</a>
              </footer>
            </div>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
