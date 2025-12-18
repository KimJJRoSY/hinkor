'use client'

import { Word } from '@/entities/word'
import { HideWordButton, useHideWordsMeaning } from '@/features/hide-word'
import { WordItem } from '@/features/word-list'
import { MoveToButton } from '@/shared/ui'
import { BookOpenCheck } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface Props {
  params: string
  wordList: Word[]
}

export default function DayList({ params, wordList }: Props) {
  const router = useRouter()
  const { isHidden, handleHideMeaning } = useHideWordsMeaning()

  const gotoQuiz = () => {
    router.push(`/quiz?label=day&id=${params}`)
  }

  return (
    <>
      <div className="flex justify-between">
        <HideWordButton isHidden={isHidden} handleHideMeaning={handleHideMeaning} />
        <MoveToButton label="퀴즈" onClick={gotoQuiz} icon={BookOpenCheck} />
      </div>
      {wordList &&
        wordList.map((word) => <WordItem key={word.id} word={word} isHidden={isHidden} />)}
    </>
  )
}
