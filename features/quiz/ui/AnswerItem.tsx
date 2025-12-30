import { twMerge } from 'tailwind-merge'

interface Props {
  option: string
  isSelected: boolean
  onChoose: (answer: string) => void
}

export default function AnswerItem({ option, isSelected, onChoose }: Props) {
  return (
    <button className="flex gap-3 cursor-pointer" onClick={() => onChoose(option)}>
      <p
        className={twMerge(
          'bg-white min-w-40 max-w-3/4 rounded-md border border-gray-100 p-4 hover:bg-gray-300 hover:translate-0.5 active:bg-gray-300 active:translate-0.5 dark:hover:bg-gray-500 dark:active:bg-gray-500 dark:bg-gray-800 dark:border dark:border-gray-300 ',
          isSelected && 'bg-accent border-accent',
        )}
      >
        {option}
      </p>
    </button>
  )
}
