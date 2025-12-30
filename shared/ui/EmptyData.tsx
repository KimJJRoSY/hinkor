import { CircleAlert } from 'lucide-react'
import { twMerge } from 'tailwind-merge'
interface Props {
  text: string
  mode: 'dark' | 'light'
}

export default function EmptyData({ text, mode }: Props) {
  return (
    <div
      className={twMerge(
        'flex flex-col gap-3 items-center justify-center text-gray-900 min-h-[calc(100dvh-140px)] bg-white rounded-b-md rounded-r-md border border-gray-200',
        mode === 'light' && 'text-white bg-secondary  border-secondary min-h-[calc(100dvh-220px)]',
      )}
    >
      <CircleAlert className={twMerge('text-gray-600 min-x-5', mode === 'light' && 'text-white')} />
      {text}
    </div>
  )
}
