import { WordItem } from '@/widgets/word-list-container'
import { createServer } from '@/shared/api'
import { Word } from '@/entities/word'

export const metadata = {
  title: '날짜',
  description: '힌디어 단어장 - 날짜별 목록입니다',
}

export default async function DayPage({ searchParams }: { searchParams: { id?: string } }) {
  const supabase = await createServer()
  const params = await searchParams
  const { data } = await supabase.from('day_list').select('*').eq('id', params.id)
  const words: Word[] = data![0].words

  return (
    <div className="flex flex-col gap-3 p-3 bg-white rounded-b-md rounded-r-md border border-gray-200">
      {words.map((word) => (
        <WordItem key={word.id} word={word} />
      ))}
    </div>
  )
}
