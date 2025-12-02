'use client'
import { useState } from 'react'
import NavigationButton from './NavigationButton'

const menu = [
  {
    label: 'Day',
    isActive: true,
  },
  {
    label: 'Theme',
    isActive: false,
  },
  {
    label: 'Quiz',
    isActive: false,
  },
]

export default function NavigationBar() {
  const [navigation, setNavigation] = useState(menu)

  const handleNavigation = (label: string) => {
    const updated = navigation.map((item) => ({ ...item, isActive: item.label === label }))
    setNavigation(updated)
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
