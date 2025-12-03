import { WordItem } from '@/widgets/word-list-container'

export default function DayPage() {
  return (
    <div className="flex flex-col gap-3 p-3 bg-white rounded-b-md rounded-r-md border border-gray-200">
      <WordItem />
      <WordItem />
    </div>
  )
}
