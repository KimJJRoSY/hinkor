'use client'

import { MoveToButton } from '@/shared/ui'
import { BookOpenCheck } from 'lucide-react'
import { useTranslations } from 'next-intl'

interface Props {
  gotoQuiz: () => void
}

export default function GotoQuizButton({ gotoQuiz }: Props) {
  const t = useTranslations('Feature')
  return <MoveToButton label={t('quiz')} onClick={gotoQuiz} icon={BookOpenCheck} />
}
