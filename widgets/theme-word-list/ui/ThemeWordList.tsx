'use client'

import { Check } from 'lucide-react'
import { EmptyData, MoveToButton } from '@/shared/ui'
import { WordItem } from '@/features/word-list'
import { HideWordButton, useHideWordsMeaning } from '@/features/hide-word'
import { GotoQuizButton, useGotoQuiz } from '@/features/go-to-quiz'
import { useSwitchOpposite } from '@/features/switch-opposite-word'

interface Props {
  params: string
}
function ThemeWordList({ params }: Props) {
  const { wordList, isLoading, isError, gotoCheckOpposition } = useSwitchOpposite({ params })
  const { isHidden, handleHideMeaning } = useHideWordsMeaning()
  const gotoQuiz = useGotoQuiz({ params, label: 'theme' })

  if (isLoading) return null
  if (isError) return <EmptyData text="알 수 없는 오류가 발생하였습니다." mode="dark" />
  if (!wordList) return <EmptyData text="데이터가 없습니다." mode="dark" />

  return (
    <div className="flex flex-col min-h-[calc(100dvh-160px)]">
      <div className="sticky top-18 z-40 y py-2 flex  justify-between bg-white">
        <HideWordButton isHidden={isHidden} handleHideMeaning={handleHideMeaning} />
        <MoveToButton label="반의어 확인" icon={Check} onClick={gotoCheckOpposition} />
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
