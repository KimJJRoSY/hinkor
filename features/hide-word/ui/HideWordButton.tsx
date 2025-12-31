'use client'

import { MoveToButton } from '@/shared/ui'
import { Eye, EyeClosed } from 'lucide-react'
import { useTranslations } from 'next-intl'

interface Props {
  isHidden: boolean
  handleHideMeaning: () => void
}

export default function HideWordButton({ isHidden, handleHideMeaning }: Props) {
  const t = useTranslations('Feature')

  return (
    <MoveToButton
      label={isHidden ? t('showMeaning') : t('hideMeaning')}
      icon={isHidden ? Eye : EyeClosed}
      onClick={handleHideMeaning}
    />
  )
}
