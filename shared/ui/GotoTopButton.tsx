'use client'

import { ChevronUp } from 'lucide-react'
import { useEffect, useState } from 'react'

function GotoTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  if (!visible) return null

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 rounded-full bg-gray-300 p-2 text-center shadow-2xl cursor-pointer hover:bg-accent"
    >
      <ChevronUp />
    </button>
  )
}
export default GotoTopButton
