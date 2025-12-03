'use client'
import { ChevronRight } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'

export default function CategoryButton() {
  const router = useRouter()
  const path = usePathname()

  const goToDetailPage = () => {
    if (path === '/theme') {
      router.push('/theme?=1')
    } else {
      router.push('/day?=1')
    }
  }

  return (
    <button
      className="flex bg-white rounded-md p-2 justify-between items-center border border-gray-100"
      onClick={goToDetailPage}
    >
      day1
      <ChevronRight size={20} />
    </button>
  )
}
