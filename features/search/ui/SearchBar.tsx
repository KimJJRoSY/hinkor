'use client'

import { useTranslations } from 'next-intl'

interface Props {
  value: string
  onChange: (value: string) => void
}

export default function SearchBar({ value, onChange }: Props) {
  const t = useTranslations('Feature')

  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="bg-white w-full p-2 rounded-md border border-gray-300 outline-none focus:border-primary focus:ring-primary focus:ring-2
      dark:bg-gray-600 dark:focus:border-accent dark:focus:ring-accent "
      type="text"
      placeholder={t('searchPlaceholder')}
    />
  )
}
