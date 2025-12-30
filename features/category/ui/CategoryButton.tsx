'use client'
import { ChevronRight } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'

interface Props {
  label: string
  id: number | string
}

export default function CategoryButton({ label, id }: Props) {
  const router = useRouter()
  const path = usePathname()

  const goToDetailPage = () => {
    if (path === '/theme') {
      router.push(`/theme?id=${id}`)
    } else if (path === '/') {
      router.push(`/day?id=${id}`)
    } else if (path === '/quiz') {
      router.push(`/quiz?id=${id}`)
    }
  }

  return (
    <button
      className="flex w-full bg-white rounded-md p-2 justify-between items-center border border-gray-100 text-base cursor-pointer 
      hover:bg-gray-300 hover:translate-y-0.5 active:bg-gray-300 active:translate-y-0.5 "
      onClick={goToDetailPage}
    >
      {label}
      <ChevronRight size={20} />
    </button>
  )
}
