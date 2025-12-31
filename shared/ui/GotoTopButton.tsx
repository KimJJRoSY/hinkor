'use client'
import { ChevronUp } from 'lucide-react'
import { useGotoTop } from '../utils'

function GotoTopButton() {
  const { handleClick, visible } = useGotoTop()

  if (!visible) return null

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 rounded-full bg-gray-300 p-2 text-center shadow-2xl cursor-pointer hover:bg-accent active:bg-accent"
      aria-label="맨 위로 이동"
      title="맨 위로 이동"
    >
      <ChevronUp className="text-gray-950" />
    </button>
  )
}
export default GotoTopButton
