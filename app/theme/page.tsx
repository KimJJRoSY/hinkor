import { CategoryButton } from '@/widgets/category-container'
import { WordItem } from '@/widgets/word-list-container'
import { twMerge } from 'tailwind-merge'

export default async function ThemePage({ searchParams }: { searchParams: { id?: string } }) {
  const params = await searchParams
  const isParams = params.id ? true : false

  return (
    <div
      className={twMerge(
        'flex flex-col gap-3 p-3 bg-secondary rounded-b-md rounded-r-md',
        isParams && 'bg-white border border-gray-200',
      )}
    >
      {isParams ? <WordItem /> : <CategoryButton label="사랑" />}
    </div>
  )
}
