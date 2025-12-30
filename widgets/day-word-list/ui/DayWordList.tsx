'use client'

import { getClientDayWordList } from '@/entities/word/api/client'
import { GotoQuizButton, useGotoQuiz } from '@/features/go-to-quiz'
import { HideWordButton, useHideWordsMeaning } from '@/features/hide-word'
import { WordItem } from '@/features/word-list'
import { EmptyData } from '@/shared/ui'
import { useQuery } from '@tanstack/react-query'

interface Props {
  params: string
}

export default function DayList({ params }: Props) {
  const { isHidden, handleHideMeaning } = useHideWordsMeaning()
  const gotoQuiz = useGotoQuiz({ params, label: 'day' })

  const { data, isLoading, isError } = useQuery({
    queryKey: ['wordList', `day_list_${params}`],
    queryFn: () => getClientDayWordList({ params }),
  })
  if (isLoading) return null
  if (isError) return <EmptyData text="알 수 없는 오류가 발생하였습니다." mode="light" />
  if (!data?.ok) return <EmptyData text="데이터가 없습니다." mode="light" />

  return (
    <div className="flex flex-col">
      <div className="sticky top-18 z-40 y py-2 flex justify-between bg-white dark:bg-gray-800">
        <HideWordButton isHidden={isHidden} handleHideMeaning={handleHideMeaning} />
        <GotoQuizButton gotoQuiz={gotoQuiz} />
      </div>
      {data.data &&
        data.data.map((word, index) => (
          <WordItem
            key={word.id}
            word={word}
            isHidden={isHidden}
            isLast={index + 1 === data.data.length}
          />
        ))}
    </div>
  )
}
