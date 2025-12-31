'use client'

import { useRouter } from 'next/navigation'
import { useLocale } from 'next-intl'
import { Globe } from 'lucide-react'

export default function LocaleSwitcher() {
  const locale = useLocale()
  const router = useRouter()

  const toggleLocale = () => {
    const newLocale = locale === 'ko' ? 'en' : 'ko'
    document.cookie = `locale=${newLocale}; path=/; max-age=31536000`
    router.refresh()
  }

  return (
    <button
      onClick={toggleLocale}
      className="flex items-center gap-1 px-2 py-1 text-xs rounded-md bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
      title={locale === 'ko' ? 'Switch to English' : '한국어로 전환'}
    >
      <Globe className="w-3 h-3" />
      <span>{locale === 'ko' ? 'EN' : 'KO'}</span>
    </button>
  )
}
