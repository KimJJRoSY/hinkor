import { createServer } from '@/shared/api'
import { ThemeWordList } from '@/widgets/theme-word-list'
import { twMerge } from 'tailwind-merge'
import ThemeCategoryList from '@/widgets/theme-category-list/ui/ThemeCategoryList'

export const metadata = {
  title: '테마',
  description: '힌디어 단어장 - 테마 목록입니다',
}

export default async function ThemePage({ searchParams }: { searchParams: { id?: string } }) {
  const params = await searchParams
  const isParams = params.id ? true : false
  const supabase = await createServer()
  const { data } = await supabase.from('theme_list').select('*')

  return (
    <div
      className={twMerge(
        'flex flex-col gap-3 p-3 bg-secondary rounded-b-md rounded-r-md',
        isParams && 'bg-white border border-gray-200',
      )}
    >
      {isParams ? <ThemeWordList params={params.id!} /> : data && <ThemeCategoryList data={data} />}
    </div>
  )
}
