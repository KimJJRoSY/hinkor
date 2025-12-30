import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { twMerge } from 'tailwind-merge'

interface Props {
  label: string
  isActive: boolean
}

export default function NavigationButton({ label, isActive }: Props) {
  const params = useSearchParams()
  const id = params.get('id')

  const getLabel = (label: string) => {
    if (label === 'DAY' && id && isActive) {
      return `DAY${id}`
    } else if (label === 'THEME' && id && isActive) {
      return id
    } else {
      return label
    }
  }
  return (
    <>
      <Link href={label === 'DAY' ? '/' : 'theme'} prefetch>
        <button
          className={twMerge(
            'bg-gray-200 rounded-t-md px-4 py-1 text-base font-bold hover:bg-gray-400 hover:cursor-pointer',
            isActive && 'text-white bg-primary ',
          )}
        >
          {getLabel(label)}
        </button>
      </Link>
    </>
  )
}
