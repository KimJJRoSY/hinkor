import { createServer } from '@/shared/api'
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
  const supabase = await createServer()
  const { data } =
    params.label === 'day'
      ? await supabase.from('day_list').select('*').eq('id', params.id)
      : await supabase.from('theme_list').select('*').eq('theme', params.id)

  return <>{data && <QuizContainer data={data[0].words!} />}</>
}
