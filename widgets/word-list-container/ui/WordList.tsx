'use client'

import { Word } from '@/entities/word'
import { supabase } from '@/shared/api/supabase/client'
import { useEffect, useState } from 'react'
import WordItem from './WordItem'
import { Check } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface Props {
  params: string
}
function WordList({ params }: Props) {
  const router = useRouter()
  const [wordList, setData] = useState<Word[]>()
  const [opposition, setOpposition] = useState<string>()

  const getWordList = async () => {
    const { data } = await supabase.from('theme_list').select('*').eq('theme', params)
    if (!data) return
    setData(data[0].words)
    setOpposition(data[0].opposition)
  }

  const gotoCheckOpposition = () => {
    router.push(`/theme?id=${opposition}`)
  }

  useEffect(() => {
    getWordList()
  }, [params])

  return (
    <>
      <div>
        <button
          className="flex items-center px-2 py-1 rounded border border-gray-200 text-gray-500"
          onClick={gotoCheckOpposition}
        >
          <Check className="w-4" /> <p className="text-sm">반의어 확인</p>
        </button>
      </div>
      {wordList && wordList.map((word) => <WordItem key={word.id} word={word} />)}
    </>
  )
}
export default WordList
