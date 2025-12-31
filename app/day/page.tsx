import { DayWordList } from '@/widgets/day-word-list'
import { EmptyData } from '@/shared/ui'
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query'
import { getServerWordList } from '@/entities/word/api/server'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata() {
  const t = await getTranslations('Metadata')
  return {
    title: t('dayTitle'),
    description: t('dayDescription'),
  }
}

export default async function DayPage({ searchParams }: { searchParams: { id?: string } }) {
  const t = await getTranslations('Common')
  const params = await searchParams
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery({
    queryKey: ['wordList', `day_list_${params.id}`],
    queryFn: () => getServerWordList({ params: params.id, label: 'day_list', field: 'id' }),
  })

  if (!params.id) {
    return <EmptyData text={t('data')} mode="light" />
  }

  return (
    <div className="flex flex-col gap-3 p-3 bg-white rounded-b-md rounded-r-md border border-gray-200 dark:bg-gray-800 dark:border-none">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <DayWordList params={params.id} />
      </HydrationBoundary>
    </div>
  )
}
