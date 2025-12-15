'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { ChevronLeft } from 'lucide-react'

export default function Header() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const isDetailPage = searchParams.get('id')

  return (
    <>
      <div className="flex gap-1 items-center justify-center mb-2 relative max-w-3xl mx-auto">
        {isDetailPage && (
          <button
            className="flex items-center text-gray-800 absolute left-0"
            onClick={() => router.back()}
          >
            <ChevronLeft className="w-5" /> <p className="text-sm">뒤로</p>
          </button>
        )}
        <div className="flex gap-1 text-2xl font-bold font-hinko">
          <h1 className="text-accent">HIN</h1>
          <h1 className="text-primary">KOR</h1>
        </div>
      </div>
    </>
  )
}
