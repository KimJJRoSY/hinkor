import { ThemeWordList } from '@/widgets/theme-word-list'
import { twMerge } from 'tailwind-merge'
import ThemeCategoryList from '@/widgets/theme-category-list/ui/ThemeCategoryList'
import { EmptyData } from '@/shared/ui'
import { getCategoryList } from '@/entities/category'

export const metadata = {
  title: '테마',
  description: '힌디어 단어장 - 테마 목록입니다',
}

export default async function ThemePage({ searchParams }: { searchParams: { id?: string } }) {
  const params = await searchParams
  const isParams = params.id ? true : false
  const result = await getCategoryList({ label: 'theme_list' })

  if (!result.ok) {
    switch (result.error) {
      case 'NOT_FOUND':
        return <EmptyData text="데이터가 없습니다." mode="dark" />
      default:
        return <EmptyData text="알 수 없는 오류가 발생하였습니다." mode="dark" />
    }
  }

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
        result.data && <ThemeCategoryList data={result.data} />
      )}
    </div>
  )
}
