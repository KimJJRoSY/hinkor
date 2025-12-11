import { useEffect } from 'react'
import { ToastType, useToastStore } from '../store/toast-store'
import { twMerge } from 'tailwind-merge'
import { X } from 'lucide-react'

interface Props {
  id: string
  message: string
  type: ToastType
}
export default function ToastItem({ id, message, type }: Props) {
  const removeToast = useToastStore((s) => s.removeToast)

  useEffect(() => {
    const timer = setTimeout(() => removeToast(id), 3000)
    return () => clearTimeout(timer)
  }, [])
  return (
    <div
      className={twMerge(
        'flex items-center justify-between min-w-50 px-4 py-2 rounded-lg shadow-md text-sm animate-slide-up',
        type === 'success' && 'bg-green-200',
        type === 'warn' && 'bg-orange-200 ',
        type === 'error' && 'bg-red-200 ',
        type === 'info' && 'bg-blue-200',
      )}
    >
      <span>{message}</span>

      <button onClick={() => removeToast(id)} className="ml-3 opacity-80 hover:opacity-100">
        <X size={16} />
      </button>
    </div>
  )
}
