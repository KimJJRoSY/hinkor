import { DayWordList } from '@/widgets/day-word-list'
import { EmptyData } from '@/shared/ui'
import getWordList from '@/entities/word/api/getWordList'

export const metadata = {
  title: '날짜',
  description: '힌디어 단어장 - 날짜별 목록입니다',
}

export default async function DayPage({ searchParams }: { searchParams: { id?: string } }) {
  const params = await searchParams

  if (!params.id) {
    return <EmptyData text={'데이터'} mode="dark" />
  }

  const result = await getWordList({ params: params.id, label: 'day_list' })

  if (!result.ok) {
    switch (result.error) {
      case 'NOT_FOUND':
        return <EmptyData text="데이터가 없습니다." mode="dark" />
      default:
        return <EmptyData text="알 수 없는 오류가 발생하였습니다." mode="dark" />
    }
  }

  return (
    <div className="flex flex-col gap-3 p-3 bg-white rounded-b-md rounded-r-md border border-gray-200">
      {result.data && <DayWordList wordList={result.data} params={params.id} />}
    </div>
  )
}
