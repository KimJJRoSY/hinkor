import { useState } from 'react'

export function useHideWordsMeaning() {
  const [isHidden, setIsHidden] = useState(false)

  const handleHideMeaning = () => {
    setIsHidden(!isHidden)
  }

  return {
    isHidden,
    setIsHidden,
    handleHideMeaning,
  }
}
