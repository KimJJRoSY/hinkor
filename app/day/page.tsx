import { WordItem } from '@/widgets/word-list-container'

export const metadata = {
  title: '날짜',
  description: '힌디어 단어장 - 날짜별 목록입니다',
}

export default function DayPage() {
  return (
    <div className="flex flex-col gap-3 p-3 bg-white rounded-b-md rounded-r-md border border-gray-200">
      <WordItem />
      <WordItem />
    </div>
  )
}
