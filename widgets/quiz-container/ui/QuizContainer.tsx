'use client'
import { Word } from '@/entities/word'
import { AnswerItem, useQuiz, QuizItem, ProgressBar } from '@/features/quiz'
import { MoveToButton } from '@/shared/ui'
import { WordItem } from '@/features/word-list'
import { BookOpenCheck } from 'lucide-react'

interface Props {
  data: Word[]
}
export default function QuizContainer({ data }: Props) {
  const {
    quizList,
    shuffledList,
    wrongList,
    selectedOption,
    currentIndex,
    isFinished,
    resetQuiz,
    handleQuiz,
  } = useQuiz({ data })
  const USER_SCORE = quizList.length - wrongList.length
  const TOTAL = quizList.length
  const USER_CURRENT_INDEX = currentIndex + 1

  return (
    <>
      {isFinished ? (
        <>
          <ProgressBar current={USER_SCORE} total={TOTAL} value={(USER_SCORE / TOTAL) * 100} />
          <MoveToButton label="다시 퀴즈" onClick={resetQuiz} icon={BookOpenCheck} />
          <div className="flex flex-1 flex-col gap-3 min-w-3/5 w-full px-3">
            {wrongList.map((item) => (
              <WordItem key={item} word={shuffledList[item]} isHidden={false} isLast={false} />
            ))}
          </div>
        </>
      ) : (
        <>
          <ProgressBar
            current={USER_CURRENT_INDEX}
            total={TOTAL}
            value={(USER_CURRENT_INDEX / TOTAL) * 100}
          />
          <div className="flex flex-1 flex-col items-center justify-center gap-10">
            <QuizItem question={quizList[currentIndex].question} />
            <div className="flex flex-col gap-6 items-center">
              {quizList[currentIndex].chooseList.map((i, index) => (
                <AnswerItem
                  option={i.option}
                  onChoose={handleQuiz}
                  key={index}
                  isSelected={selectedOption === i.option}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </>
  )
}
