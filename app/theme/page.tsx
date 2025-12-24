import { ThemeWordList } from '@/widgets/theme-word-list'
import { twMerge } from 'tailwind-merge'
import ThemeCategoryList from '@/widgets/theme-category-list/ui/ThemeCategoryList'
import { getServerCategoryList } from '@/entities/category/api/getServerCategoryList'
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query'

export const metadata = {
  title: '테마',
  description: '힌디어 단어장 - 테마 목록입니다',
}

export default async function ThemePage({ searchParams }: { searchParams: { id?: string } }) {
  const params = await searchParams
  const isParams = params.id ? true : false
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery({
    queryKey: ['category', 'theme_list'],
    queryFn: () => getServerCategoryList({ label: 'theme_list' }),
  })

  return (
    <div
      className={twMerge(
        'flex flex-col gap-2 p-3 bg-secondary rounded-b-md rounded-r-md ',
        isParams && 'bg-white border border-gray-200',
      )}
    >
      {isParams ? (
        <ThemeWordList params={params.id!} />
      ) : (
        <HydrationBoundary state={dehydrate(queryClient)}>
          <ThemeCategoryList />
        </HydrationBoundary>
      )}
    </div>
  )
}
