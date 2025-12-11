'use client'

import { Word } from '@/entities/word'
import { WordItem } from '@/features/word-list'
import { MoveToButton } from '@/shared/ui'
import { BookOpenCheck, EyeClosed, Eye } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
interface Props {
  params: string
  wordList: Word[]
}

export default function DayList({ params, wordList }: Props) {
  const router = useRouter()
  const [isHidden, setIsHidden] = useState(false)

  const gotoQuiz = () => {
    router.push(`/quiz?label=day&id=${params}`)
  }
  const handleHideMeaning = () => {
    setIsHidden(!isHidden)
  }

  return (
    <>
      <div className="flex justify-between">
        <MoveToButton
          label={isHidden ? '뜻 보기' : '뜻 가리기'}
          icon={isHidden ? Eye : EyeClosed}
          onClick={handleHideMeaning}
        />
        <MoveToButton label="퀴즈" onClick={gotoQuiz} icon={BookOpenCheck} />
      </div>
      {wordList &&
        wordList.map((word) => <WordItem key={word.id} word={word} isHidden={isHidden} />)}
    </>
  )
}
