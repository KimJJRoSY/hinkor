import { CategoryButton } from '@/widgets/category-container'
import { AnswerItem, QuizItem } from '@/widgets/quiz-container'

export default async function QuizPage({ searchParams }: { searchParams: { id?: string } }) {
  const params = await searchParams
  const isParams = params.id ? true : false

  return (
    <div className="flex flex-col gap-3 p-3 bg-secondary rounded-b-md rounded-r-md">
      {isParams ? (
        <div className="flex flex-col  gap-3 items-center justify-center">
          <QuizItem />
          <AnswerItem />
        </div>
      ) : (
        <CategoryButton label="퀴즈" />
      )}
    </div>
  )
}
