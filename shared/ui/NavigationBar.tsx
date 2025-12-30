'use client'

import NavigationButton from './NavigationButton'
import { usePathname } from 'next/navigation'

export default function NavigationBar() {
  const path = usePathname()

  return (
    <div className="flex gap-2">
      <NavigationButton label={'DAY'} isActive={path.startsWith('/day') || path === '/'} />
      <NavigationButton label={'THEME'} isActive={path.startsWith('/theme')} />
    </div>
  )
}
