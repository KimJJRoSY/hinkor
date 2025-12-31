'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { ChevronLeft } from 'lucide-react'
import { useTranslations } from 'next-intl'
import LocaleSwitcher from './LocaleSwitcher'

export default function Header() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const t = useTranslations('Common')

  const isDetailPage = searchParams.get('id')

  return (
    <>
      <div className="flex gap-1 items-center justify-center mb-2 relative max-w-3xl mx-auto bg-white dark:bg-gray-900">
        {isDetailPage && (
          <button
            className="flex items-center text-gray-800 absolute left-0 dark:text-gray-100"
            onClick={() => router.back()}
          >
            <ChevronLeft className="w-5" /> <p className="text-sm ">{t('back')}</p>
          </button>
        )}
        <div
          className="flex gap-1 text-2xl font-bold font-hinko cursor-pointer hover:border-b-gray-300 hover:border-b"
          onClick={() => router.push('/')}
        >
          <h1 className="text-accent">HIN</h1>
          <h1 className="text-primary dark:text-blue-500">KOR</h1>
        </div>
        <div className="absolute right-0">
          <LocaleSwitcher />
        </div>
      </div>
    </>
  )
}
