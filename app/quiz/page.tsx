import { AnswerItem, QuizItem } from '@/widgets/quiz-container'

export default function QuizPage() {
  return (
    <div className="flex flex-col gap-3 p-3 bg-secondary rounded-b-md rounded-r-md">
      <div className="flex flex-col items-center justify-center gap-4">
        <QuizItem />
        <AnswerItem />
      </div>
    </div>
  )
}
