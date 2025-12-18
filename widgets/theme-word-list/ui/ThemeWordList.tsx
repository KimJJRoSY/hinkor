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
  const { isHidden, setIsHidden, handleHideMeaning } = useHideWordsMeaning()
  const gotoQuiz = useGotoQuiz({ params })
  const { wordList, getWordList, gotoCheckOpposition } = useSwitchOpposite({ params })

  useEffect(() => {
    getWordList()
    setIsHidden(false)
  }, [params])

  return (
    <div className="min-h-[calc(100dvh-160px)]">
      <div className="flex justify-between ">
        <HideWordButton isHidden={isHidden} handleHideMeaning={handleHideMeaning} />
        <MoveToButton label="반의어 확인" icon={Check} onClick={gotoCheckOpposition} />
        {wordList && wordList.length > 3 && <GotoQuizButton gotoQuiz={gotoQuiz} />}
      </div>
      {wordList &&
        wordList.map((word) => <WordItem key={word.id} word={word} isHidden={isHidden} />)}
    </div>
  )
}
export default ThemeWordList
