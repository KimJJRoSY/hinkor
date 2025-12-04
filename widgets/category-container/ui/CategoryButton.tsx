'use client'
import { ChevronRight } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'

interface Props {
  label: string
}

export default function CategoryButton({ label }: Props) {
  const router = useRouter()
  const path = usePathname()

  const goToDetailPage = () => {
    if (path === '/theme') {
      router.push(`/theme?id=${1}`)
    } else if (path === '/') {
      router.push(`/day?id=${1}`)
    } else if (path === '/quiz') {
      router.push(`/quiz?id=${1}`)
    }
  }

  return (
    <button
      className="flex bg-white rounded-md p-2 justify-between items-center border border-gray-100"
      onClick={goToDetailPage}
    >
      {label}
      <ChevronRight size={20} />
    </button>
  )
}
