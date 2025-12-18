import { MoveToButton } from '@/shared/ui'
import { Eye, EyeClosed } from 'lucide-react'

interface Props {
  isHidden: boolean
  handleHideMeaning: () => void
}

export default function HideWordButton({ isHidden, handleHideMeaning }: Props) {
  return (
    <MoveToButton
      label={isHidden ? '뜻 보기' : '뜻 가리기'}
      icon={isHidden ? Eye : EyeClosed}
      onClick={handleHideMeaning}
    />
  )
}
