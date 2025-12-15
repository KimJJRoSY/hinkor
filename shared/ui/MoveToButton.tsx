'use client'

import { LucideIcon } from 'lucide-react'

interface Props {
  onClick: () => void
  icon: LucideIcon
  label: string
}

export default function MoveToButton({ label, icon: Icon, onClick }: Props) {
  return (
    <button
      className="flex gap-1 items-center px-2 py-1 rounded border border-gray-200 text-gray-500 cursor-pointer hover:bg-gray-100"
      onClick={onClick}
    >
      <Icon className="w-4" /> <p className="text-sm ">{label}</p>
    </button>
  )
}
