import { createServer } from '@/shared/api'
import { Word } from '@/entities/word'
import { DayWordList } from '@/widgets/day-word-list'
import { EmptyData } from '@/shared/ui'

export const metadata = {
  title: '날짜',
  description: '힌디어 단어장 - 날짜별 목록입니다',
}

export default async function DayPage({ searchParams }: { searchParams: { id?: string } }) {
  const supabase = await createServer()
  const params = await searchParams

  if (!params.id) {
    return <EmptyData label={'데이터'} mode="dark" />
  }

  const { data } = await supabase.from('day_list').select('*').eq('id', params.id)
  const words: Word[] = data![0].words

  return (
    <div className="flex flex-col gap-3 p-3 bg-white rounded-b-md rounded-r-md border border-gray-200">
      <DayWordList wordList={words} params={params.id} />
    </div>
  )
}
