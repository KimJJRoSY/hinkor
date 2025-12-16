import { useRef, useCallback } from 'react'

export function useThrottle<Args extends unknown[]>(
  fn: (...args: Args) => void,
  delay: number,
): (...args: Args) => void {
  const lastRef = useRef(0)

  return useCallback(
    (...args: Args) => {
      const now = Date.now()
      if (now - lastRef.current < delay) return

      lastRef.current = now
      fn(...args)
    },
    [fn, delay],
  )
}
