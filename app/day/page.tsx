import { DayWordList } from '@/widgets/day-word-list'
import { EmptyData } from '@/shared/ui'
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query'
import { getServerWordList } from '@/entities/word/api/server'

export const metadata = {
  title: '날짜',
  description: '힌디어 단어장 - 날짜별 목록입니다',
}

export default async function DayPage({ searchParams }: { searchParams: { id?: string } }) {
  const params = await searchParams
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery({
    queryKey: ['wordList', `day_list_${params.id}`],
    queryFn: () => getServerWordList({ params: params.id, label: 'day_list', field: 'id' }),
  })

  if (!params.id) {
    return <EmptyData text={'데이터'} mode="light" />
  }

  return (
    <div className="flex flex-col gap-3 p-3 bg-white rounded-b-md rounded-r-md border border-gray-200 dark:bg-gray-800 dark:border-none">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <DayWordList params={params.id} />
      </HydrationBoundary>
    </div>
  )
}
