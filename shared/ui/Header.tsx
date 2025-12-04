'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { X } from 'lucide-react'

export default function Header() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const isDetailPage = searchParams.get('id')

  return (
    <div>
      {isDetailPage ? (
        <div className="flex w-full justify-end">
          <button onClick={() => router.back()}>
            <X className="w-6" />
          </button>
        </div>
      ) : (
        <div className="flex gap-1 text-2xl font-bold font-hinko mb-4">
          <h1 className="text-accent">HIN</h1>
          <h1 className="text-primary">KOR</h1>
        </div>
      )}
    </div>
  )
}
