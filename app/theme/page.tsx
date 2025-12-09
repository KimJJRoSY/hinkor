import { createServer } from '@/shared/api'
import { CategoryButton } from '@/widgets/category-container'
import { WordList } from '@/widgets/word-list-container'
import { twMerge } from 'tailwind-merge'

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
      {isParams ? (
        <WordList params={params.id!} />
      ) : (
        data &&
        data.map((item) => <CategoryButton label={item.theme} id={item.theme} key={item.id} />)
      )}
    </div>
  )
}
