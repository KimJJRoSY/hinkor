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
        'flex flex-col gap-3 items-center justify-center ',
        mode === 'dark' &&
          'text-white bg-secondary min-h-[calc(100dvh-220px)] dark:bg-gray-800 dark:border-none',
        mode === 'light' &&
          'text-gray-900 min-h-[calc(100dvh-160px)] bg-white rounded-b-md rounded-r-md dark:bg-gray-800 dark:border-none dark:text-gray-50',
      )}
    >
      <CircleAlert
        className={twMerge(
          'min-x-5',
          mode === 'light' && 'text-gray-600  dark:text-white',
          mode === 'dark' && 'text-white',
        )}
      />
      {text}
    </div>
  )
}
