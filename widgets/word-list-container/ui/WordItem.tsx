import { Speech } from 'lucide-react'
import { twMerge } from 'tailwind-merge'

export default function WordItem() {
  return (
    <div className="bg-white p-4 border-b border-gray-200 flex gap-2 items-start">
      <span
        className={twMerge(
          'bg-[#A5D993] rounded-md w-5 h-5 text-center text-sm mt-1 text-gray-600',
        )}
      >
        vi
      </span>
      <div className="flex-1 gap-2 items-start">
        <div className="flex gap-2 items-center">
          <h3 className="font-bold ">힌디어</h3>
          <p className="flex-1 text-gray-400 text-xs">발음</p>
        </div>

        <h3 className="text-sm">한국어</h3>
      </div>
      <Speech className="w-4 text-gray-400" />
    </div>
  )
}
