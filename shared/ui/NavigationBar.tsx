'use client'

import NavigationButton from './NavigationButton'
import { usePathname, useSearchParams } from 'next/navigation'

export default function NavigationBar() {
  const path = usePathname()
  const params = useSearchParams()

  return (
    <div className="flex gap-2">
      <NavigationButton
        label={'DAY'}
        isActive={path.startsWith('/day') || path === '/' || params.get('label') === 'day'}
      />
      <NavigationButton
        label={'THEME'}
        isActive={path.startsWith('/theme') || params.get('label') === 'theme'}
      />
    </div>
  )
}
