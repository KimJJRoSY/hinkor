import getServerQuizList from '@/entities/quiz/api/getServerQuizList'
import { EmptyData } from '@/shared/ui'
import { QuizContainer } from '@/widgets/quiz-container'

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

  if (!params.id || !params.label) {
    return <EmptyData text="데이터가 없습니다." mode="dark" />
  }

  const result = await getServerQuizList({ label: params.label, id: params.id })
  if (!result.ok) {
    switch (result.error) {
      case 'NOT_FOUND':
        return <EmptyData text="데이터가 없습니다." mode="dark" />
      default:
        return <EmptyData text="알 수 없는 오류가 발생하였습니다." mode="dark" />
    }
  }

  return <QuizContainer data={result.data.words} />
}
