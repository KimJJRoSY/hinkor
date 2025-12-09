'use client'

import { ThemeWord, Word } from '@/entities/word'
import { Speech } from 'lucide-react'
import { twMerge } from 'tailwind-merge'
interface Props {
  word: Word | ThemeWord
}

export default function WordItem({ word }: Props) {
  const getColors = (position: string) => {
    if (position === 'noun_m') return 'bg-[#ABD8F5]'
    else if (position === 'noun_f') return 'bg-[#FF9595]'
    else if (position === 'verb_i') return 'bg-[#FEE99D]'
    else if (position === 'verb_t') return 'bg-[#FFB200]'
    else if (position === 'adj') return 'bg-[#A5D993]'
    else if (position === 'adv') return 'bg-[#D9D9D9]'
    else return 'bg-[#C59BFF]'
  }
  const getPosition = (position: string) => {
    if (position === 'noun_m') return 'n'
    else if (position === 'noun_f') return 'fn'
    else if (position === 'verb_i') return 'vi'
    else if (position === 'verb_t') return 'vt'
    else if (position === 'adj') return 'a'
    else if (position === 'adv') return 'ad'
    else return '정보없음'
  }

  const onSpeak = () => {
    const utter = new SpeechSynthesisUtterance(word.힌디어)
    utter.lang = 'hi-IN'
    speechSynthesis.speak(utter)
  }

  return (
    <div className="bg-white p-4 border-b border-gray-200 flex gap-2 items-start">
      <span
        className={twMerge(
          'flex items-center justify-center rounded-md w-5 h-5 text-xs mt-2',
          getColors(word.품사),
        )}
      >
        {getPosition(word.품사)}
      </span>
      <div className="flex-1 gap-2 items-start">
        <div className="flex gap-2 items-center">
          <h3 className="font-bold text-lg ">{word.힌디어}</h3>
          <p className="flex-1 text-gray-400 text-xs">{word.힌디어한글발음}</p>
        </div>

        <h3 className="text-base">{word.한국어}</h3>
      </div>
      <button onClick={onSpeak}>
        <Speech className="w-4 text-gray-400" />
      </button>
    </div>
  )
}
