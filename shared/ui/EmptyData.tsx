import { CircleQuestionMark } from 'lucide-react'

export default function EmptyData() {
  return (
    <div className="flex flex-col gap-3 items-center justify-center text-gray-900 min-h-10/12">
      <CircleQuestionMark className="text-gray-600 min-x-5" />
      데이터가 없습니다.
    </div>
  )
}
