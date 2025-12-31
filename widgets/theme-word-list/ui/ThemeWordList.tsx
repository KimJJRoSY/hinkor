'use client'

import { Check } from 'lucide-react'
import { EmptyData, MoveToButton } from '@/shared/ui'
import { WordItem } from '@/features/word-list'
import { HideWordButton, useHideWordsMeaning } from '@/features/hide-word'
import { GotoQuizButton, useGotoQuiz } from '@/features/go-to-quiz'
import { useSwitchOpposite } from '@/features/switch-opposite-word'
import { useTranslations } from 'next-intl'

interface Props {
  params: string
}
function ThemeWordList({ params }: Props) {
  const t = useTranslations('Common')
  const tFeature = useTranslations('Feature')
  const { wordList, isLoading, isError, gotoCheckOpposition } = useSwitchOpposite({ params })
  const { isHidden, handleHideMeaning } = useHideWordsMeaning()
  const gotoQuiz = useGotoQuiz({ params, label: 'theme' })

  if (isLoading) return null
  if (isError) return <EmptyData text={t('unknownError')} mode="light" />
  if (!wordList) return <EmptyData text={t('noData')} mode="light" />

  return (
    <div className="flex flex-col min-h-[calc(100dvh-160px)]">
      <div className="sticky top-18 z-40 y py-2 flex  justify-between bg-white dark:bg-gray-800 ">
        <HideWordButton isHidden={isHidden} handleHideMeaning={handleHideMeaning} />
        <MoveToButton label={tFeature('checkAntonym')} icon={Check} onClick={gotoCheckOpposition} />
        {wordList && wordList.length > 3 && <GotoQuizButton gotoQuiz={gotoQuiz} />}
      </div>
      {wordList &&
        wordList.map((word, index) => (
          <WordItem
            key={word.id}
            word={word}
            isHidden={isHidden}
            isLast={index + 1 === wordList.length}
          />
        ))}
    </div>
  )
}
export default ThemeWordList
