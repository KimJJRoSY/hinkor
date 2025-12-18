import { useRouter } from 'next/navigation'

interface Props {
  params: string
}
export function useGotoQuiz({ params }: Props) {
  const router = useRouter()
  const gotoQuiz = () => {
    router.push(`/quiz?label=day&id=${params}`)
  }
  return gotoQuiz
}
