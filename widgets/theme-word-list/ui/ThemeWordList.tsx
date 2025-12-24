'use client'

import { useEffect } from 'react'
import { Check } from 'lucide-react'
import { MoveToButton } from '@/shared/ui'
import { WordItem } from '@/features/word-list'
import { HideWordButton, useHideWordsMeaning } from '@/features/hide-word'
import { GotoQuizButton, useGotoQuiz } from '@/features/go-to-quiz'
import { useSwitchOpposite } from '@/features/switch-opposite-word'

interface Props {
  params: string
}
function ThemeWordList({ params }: Props) {
  const { wordList, getWordList, gotoCheckOpposition } = useSwitchOpposite({ params })
  const { isHidden, setIsHidden, handleHideMeaning } = useHideWordsMeaning()
  const gotoQuiz = useGotoQuiz({ params, label: 'theme' })

  useEffect(() => {
    getWordList()
    setIsHidden(false)
  }, [params])

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
