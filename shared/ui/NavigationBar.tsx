'use client'
import { useState } from 'react'
import NavigationButton from './NavigationButton'
import { useRouter } from 'next/navigation'

const menu = [
  {
    label: 'DAY',
    isActive: true,
  },
  {
    label: 'THEME',
    isActive: false,
  },
  {
    label: 'QUIZ',
    isActive: false,
  },
]

export default function NavigationBar() {
  const [navigation, setNavigation] = useState(menu)
  const router = useRouter()

  const handleNavigation = (label: string) => {
    const updated = navigation.map((item) => ({ ...item, isActive: item.label === label }))
    setNavigation(updated)
    if (label === 'DAY') {
      router.push(`/`)
    } else {
      router.push(`/${label.toLowerCase()}`)
    }
  }

  return (
    <div className="flex gap-2">
      {navigation.map((item) => (
        <NavigationButton
          key={item.label}
          label={item.label}
          isActive={item.isActive}
          onClick={handleNavigation}
        />
      ))}
    </div>
  )
}
