import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

type ClassValue = Parameters<typeof clsx>[0]

export function classMerge(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs))
}
