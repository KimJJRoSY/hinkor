import { MoveToButton } from '@/shared/ui'
import { BookOpenCheck } from 'lucide-react'

interface Props {
  gotoQuiz: () => void
}

export default function GotoQuizButton({ gotoQuiz }: Props) {
  return <MoveToButton label="퀴즈" onClick={gotoQuiz} icon={BookOpenCheck} />
}
