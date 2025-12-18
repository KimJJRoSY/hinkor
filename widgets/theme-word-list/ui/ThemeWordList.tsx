'use client'

import { Word } from '@/entities/word'
import { supabase } from '@/shared/api/supabase/client'
import { useCallback, useEffect, useState } from 'react'
import { Check } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { MoveToButton } from '@/shared/ui'
import { WordItem } from '@/features/word-list'
import { useToast } from '@/shared/utils'
import { HideWordButton, useHideWordsMeaning } from '@/features/hide-word'
import { GotoQuizButton, useGotoQuiz } from '@/features/go-to-quiz'

interface Props {
  params: string
}
function ThemeWordList({ params }: Props) {
  const router = useRouter()
  const [wordList, setData] = useState<Word[]>()
  const [opposition, setOpposition] = useState<string>()
  const { isHidden, setIsHidden, handleHideMeaning } = useHideWordsMeaning()
  const gotoQuiz = useGotoQuiz({ params })
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

  useEffect(() => {
    getWordList()
    setIsHidden(false)
  }, [params])

  return (
    <>
      <div className="flex justify-between">
        <HideWordButton isHidden={isHidden} handleHideMeaning={handleHideMeaning} />
        <MoveToButton label="반의어 확인" icon={Check} onClick={gotoCheckOpposition} />
        {wordList && wordList.length > 3 && <GotoQuizButton gotoQuiz={gotoQuiz} />}
      </div>
      {wordList &&
        wordList.map((word) => <WordItem key={word.id} word={word} isHidden={isHidden} />)}
    </>
  )
}
export default ThemeWordList
