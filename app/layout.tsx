import type { Metadata } from 'next'
import './globals.css'
import { GotoTopButton, Header, NavigationBar, ToastContainer } from '@/shared/ui'
import { Suspense } from 'react'
import { QueryProvider } from '@/shared/provider'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations } from 'next-intl/server'
import { Send } from 'lucide-react'

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
              <footer className="flex flex-col justify-center items-center gap-2 mt-3 text-xs text-gray-400 text-center">
                <p>© 2025 JeongJooKim</p>
                <span className="flex items-center gap-1">
                  사용 중 문제가 있거나 의견이 있다면
                  <a
                    href="https://github.com/KimJJRoSY/hinkor/issues"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center ml-1 hover:border-b active:border-b cursor-pointer font-bold"
                  >
                    <Send size={12} /> 피드백 보내기
                  </a>
                  를 눌러주세요.
                </span>
              </footer>
            </div>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
