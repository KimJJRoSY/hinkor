'use client'

import { Word } from '@/entities/word'
import { supabase } from '@/shared/api/supabase/client'
import { useEffect, useState } from 'react'
import { BookOpenCheck, Check, EyeClosed, Eye } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { MoveToButton } from '@/shared/ui'
import WordItem from './WordItem'

interface Props {
  params: string
}
function WordList({ params }: Props) {
  const router = useRouter()
  const [wordList, setData] = useState<Word[]>()
  const [opposition, setOpposition] = useState<string>()
  const [isHidden, setIsHidden] = useState(false)

  const getWordList = async () => {
    const { data } = await supabase.from('theme_list').select('*').eq('theme', params)
    if (!data) return
    setData(data[0].words)
    setOpposition(data[0].opposition)
  }

  const gotoCheckOpposition = () => {
    router.push(`/theme?id=${opposition}`)
  }

  const gotoQuiz = () => {
    router.push(`/quiz?label=theme&id=${params}`)
  }
  const handleHideMeaning = () => {
    setIsHidden(!isHidden)
  }

  useEffect(() => {
    getWordList()
    setIsHidden(false)
  }, [params])

  return (
    <>
      <div className="flex justify-between">
        <MoveToButton
          label={isHidden ? '뜻 보기' : '뜻 가리기'}
          icon={isHidden ? Eye : EyeClosed}
          onClick={handleHideMeaning}
        />
        <MoveToButton label="반의어 확인" icon={Check} onClick={gotoCheckOpposition} />
        {wordList && wordList.length > 3 && (
          <MoveToButton label="퀴즈" onClick={gotoQuiz} icon={BookOpenCheck} />
        )}
      </div>
      {wordList &&
        wordList.map((word) => <WordItem key={word.id} word={word} isHidden={isHidden} />)}
    </>
  )
}
export default WordList
