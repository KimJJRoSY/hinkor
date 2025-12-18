import { Word } from '@/entities/word'
import { supabase } from '@/shared/api/supabase/client'
import { useToast } from '@/shared/utils'
import { useRouter } from 'next/navigation'
import { useCallback, useState } from 'react'

interface Props {
  params: string
}

export function useSwitchOpposite({ params }: Props) {
  const router = useRouter()
  const [wordList, setData] = useState<Word[]>()
  const [opposition, setOpposition] = useState<string>()
  const { error } = useToast()

  const getWordList = useCallback(async () => {
    const { data } = await supabase.from('theme_list').select('*').eq('theme', params)
    if (!data) return error('테마 단어 데이터가 없습니다.')
    setData(data[0].words)
    setOpposition(data[0].opposition)
  }, [params, error])

  const gotoCheckOpposition = () => {
    if (!opposition) return error('반의어 데이터가 없습니다.')
    router.push(`/theme?id=${opposition}`)
  }

  return {
    wordList,
    getWordList,
    gotoCheckOpposition,
  }
}
