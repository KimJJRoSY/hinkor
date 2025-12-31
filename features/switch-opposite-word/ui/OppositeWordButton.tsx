'use client'

import { MoveToButton } from '@/shared/ui'
import { Check } from 'lucide-react'
import { useTranslations } from 'next-intl'

interface Props {
  gotoCheckOpposition: () => void
}

export default function OppositeWordButton({ gotoCheckOpposition }: Props) {
  const t = useTranslations('Feature')
  return <MoveToButton label={t('checkAntonym')} icon={Check} onClick={gotoCheckOpposition} />
}
