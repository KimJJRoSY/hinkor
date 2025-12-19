import { useRouter } from 'next/navigation'

interface Props {
  params: string
  label: string
}
export function useGotoQuiz({ params, label }: Props) {
  const router = useRouter()
  const gotoQuiz = () => {
    router.push(`/quiz?label=${label}&id=${params}`)
  }
  return gotoQuiz
}
