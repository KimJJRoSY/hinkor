'use client'

import { Word } from '@/entities/word'
import { GotoQuizButton, useGotoQuiz } from '@/features/go-to-quiz'
import { HideWordButton, useHideWordsMeaning } from '@/features/hide-word'
import { WordItem } from '@/features/word-list'

interface Props {
  params: string
  wordList: Word[]
}

export default function DayList({ params, wordList }: Props) {
  const { isHidden, handleHideMeaning } = useHideWordsMeaning()
  const gotoQuiz = useGotoQuiz({ params, label: 'day' })

  return (
    <div className="flex flex-col ">
      <div className="sticky top-18 z-40 y py-2 flex  justify-between bg-white">
        <HideWordButton isHidden={isHidden} handleHideMeaning={handleHideMeaning} />
        <GotoQuizButton gotoQuiz={gotoQuiz} />
      </div>
      {wordList &&
        wordList.map((word) => <WordItem key={word.id} word={word} isHidden={isHidden} />)}
    </div>
  )
}
