import { twMerge } from 'tailwind-merge'

interface Props {
  label: string
  isActive: boolean
  onClick: (label: string) => void
}

export default function NavigationButton({ label, isActive, onClick }: Props) {
  return (
    <button
      className={twMerge(
        'bg-gray-200 rounded-t-md px-4 py-1 text-base font-bold hover:bg-gray-400 hover:cursor-pointer',
        isActive && 'text-white bg-primary ',
      )}
      onClick={() => onClick(label)}
    >
      {label}
    </button>
  )
}
