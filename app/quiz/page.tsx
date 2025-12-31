import getServerQuizList from '@/entities/quiz/api/getServerQuizList'
import { EmptyData } from '@/shared/ui'
import { QuizContainer } from '@/widgets/quiz-container'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata() {
  const t = await getTranslations('Metadata')
  return {
    title: t('quizTitle'),
    description: t('quizDescription'),
  }
}

export default async function QuizPage({
  searchParams,
}: {
  searchParams: { label?: string; id?: string }
}) {
  const t = await getTranslations('Common')
  const params = await searchParams

  if (!params.id || !params.label) {
    return <EmptyData text={t('noData')} mode="dark" />
  }

  const result = await getServerQuizList({ label: params.label, id: params.id })
  if (!result.ok) {
    switch (result.error) {
      case 'NOT_FOUND':
        return <EmptyData text={t('noData')} mode="dark" />
      default:
        return <EmptyData text={t('unknownError')} mode="dark" />
    }
  }

  return (
    <div className="flex flex-col py-5 gap-5 items-center bg-secondary rounded-b-md rounded-r-md min-h-[calc(100dvh-140px)] w-full dark:bg-gray-700">
      <QuizContainer data={result.data.words} />
    </div>
  )
}
