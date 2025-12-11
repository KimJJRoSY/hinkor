import getQuizList from '@/entities/quiz/api/getQuizList'
import QuizContainer from '@/widgets/quiz-container/ui/QuizContainer'

export const metadata = {
  title: '퀴즈',
  description: '힌디어 단어장 - 퀴즈 목록입니다',
}

export default async function QuizPage({
  searchParams,
}: {
  searchParams: { label?: string; id?: string }
}) {
  const params = await searchParams
  const data = await getQuizList({ label: params.label!, id: params.id! })

  return <>{<QuizContainer data={data.words} />}</>
}
