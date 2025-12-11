'use client'

import { useToastStore } from '../store/toast-store'
import ToastItem from './ToastItem'

export function ToastContainer() {
  const toasts = useToastStore((s) => s.toasts)

  return (
    <div className="absolute top-15 right-4 flex flex-col gap-2 z-9999">
      {toasts.map((t) => (
        <ToastItem key={t.id} {...t} />
      ))}
    </div>
  )
}
