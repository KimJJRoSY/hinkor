'use client'

import { useToastStore } from '../store/toast-store'

export function useToast() {
  const addToast = useToastStore((s) => s.addToast)
  return {
    success: (msg: string) => addToast(msg, 'success'),
    error: (msg: string) => addToast(msg, 'error'),
    warn: (msg: string) => addToast(msg, 'warn'),
  }
}
