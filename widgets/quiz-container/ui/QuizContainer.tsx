'use client'
import { Word } from '@/entities/word'
import { AnswerItem, useQuiz, QuizItem } from '@/features/quiz'

interface Props {
  data: Word[]
}
export default function QuizContainer({ data }: Props) {
  const { quizList, handleQuiz, currentIndex } = useQuiz(data)

  return (
    <>
      <div className="flex flex-col py-5 gap-10 items-center bg-secondary rounded-b-md rounded-r-md min-h-[85vh]">
        <p className="text-white text-lg mb-10">
          {currentIndex + 1}/{quizList.length}
        </p>
        <div className="flex flex-col gap-8">
          <QuizItem question={quizList[currentIndex].question} />
          <div className="flex flex-col gap-6">
            {quizList[currentIndex].chooseList.map((i, index) => (
              <AnswerItem option={i} onChoose={handleQuiz} key={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
