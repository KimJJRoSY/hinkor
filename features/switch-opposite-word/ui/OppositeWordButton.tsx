import { MoveToButton } from '@/shared/ui'
import { Check } from 'lucide-react'

interface Props {
  gotoCheckOpposition: () => void
}

export default function OppositeWordButton({ gotoCheckOpposition }: Props) {
  return <MoveToButton label="반의어 확인" icon={Check} onClick={gotoCheckOpposition} />
}
