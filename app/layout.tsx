import type { Metadata } from 'next'
import './globals.css'
import { Header, NavigationBar } from '@/shared/ui'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: {
    default: 'HINKOR | 힌디어 단어장',
    template: '%s | 힌디어 단어장',
  },
  description: '힌디어 단어장',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex justify-center">
          <div className="max-w-3xl w-full bg-white p-5 min-h-screen">
            <Suspense fallback={null}>
              <Header />
            </Suspense>

            <NavigationBar />
            {children}
            <footer className="mt-3 text-xs text-gray-400 text-center">
              All rights reserved by JeongJooKim
            </footer>
          </div>
        </div>
      </body>
    </html>
  )
}
