interface Props {
  question: string
}
export default function QuizItem({ question }: Props) {
  return (
    <div
      className="bg-white min-w-48 max-w-3/4 rounded-md border border-gray-100 p-5 text-center font-bold text-lg
     dark:bg-gray-800 dark:border-none"
    >
      {question}0
    </div>
  )
}
