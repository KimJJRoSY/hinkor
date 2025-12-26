import { ThemeWordList } from '@/widgets/theme-word-list'
import { twMerge } from 'tailwind-merge'
import ThemeCategoryList from '@/widgets/theme-category-list/ui/ThemeCategoryList'
import { getServerCategoryList } from '@/entities/category/api/getServerCategoryList'
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query'
import { getThemeServerWordList } from '@/entities/word/api/server'

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

  if (isParams) {
    await queryClient.prefetchQuery({
      queryKey: ['wordList', `theme_list_${params.id}`],
      queryFn: () =>
        getThemeServerWordList({ params: params.id, label: 'theme_list', field: 'theme' }),
    })
  }

  return (
    <div
      className={twMerge(
        'flex flex-col gap-2 p-3 bg-secondary rounded-b-md rounded-r-md ',
        isParams && 'bg-white border border-gray-200',
      )}
    >
      {isParams ? (
        <HydrationBoundary state={dehydrate(queryClient)}>
          <ThemeWordList params={params.id!} />
        </HydrationBoundary>
      ) : (
        <HydrationBoundary state={dehydrate(queryClient)}>
          <ThemeCategoryList />
        </HydrationBoundary>
      )}
    </div>
  )
}
