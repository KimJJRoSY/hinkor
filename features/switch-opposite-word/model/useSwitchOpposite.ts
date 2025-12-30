import { getClientThemeWordList } from '@/entities/word/api/client'
import { useToast } from '@/shared/utils'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

interface Props {
  params: string
}

export function useSwitchOpposite({ params }: Props) {
  const router = useRouter()
  const { error } = useToast()

  const { data, isLoading, isError } = useQuery({
    queryKey: ['wordList', `theme_list_${params}`],
    queryFn: () => getClientThemeWordList({ params }),
  })

  const themeData = data?.ok ? data.data : undefined
  const wordList = themeData?.words
  const oppositeList = themeData?.opposition

  const gotoCheckOpposition = () => {
    if (!oppositeList) return error('반의어 데이터가 없습니다.')
    router.push(`/theme?id=${oppositeList}`)
  }

  return {
    wordList,
    isLoading,
    isError,
    gotoCheckOpposition,
  }
}
