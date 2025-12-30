'use client'

import { ThemeWord, Word } from '@/entities/word'
import { Speech } from 'lucide-react'
import { twMerge } from 'tailwind-merge'
import useWord from '../model/useWord'

interface Props {
  word: Word | ThemeWord
  isHidden: boolean
  isLast: boolean
}

export default function WordItem({ word, isHidden, isLast }: Props) {
  const { getBackgroundColors, getPosition, onSpeak } = useWord()
  return (
    <div
      className={twMerge(
        'bg-white p-4 border-b border-gray-200 flex gap-2 items-start rounded',
        isLast && 'border-none',
      )}
    >
      <span
        className={twMerge(
          'flex items-center justify-center rounded-md w-5 h-5 text-xs mt-1.5',
          getBackgroundColors(word.품사),
        )}
      >
        {getPosition(word.품사)}
      </span>
      <div className="flex-1 gap-2 items-start">
        <div className="flex gap-2 items-center">
          <h3 className="font-bold text-lg ">{word.힌디어}</h3>
          <p className="flex-1 text-gray-400 text-xs">{word.힌디어한글발음}</p>
        </div>

        {isHidden ? (
          <div className="bg-black w-20 ">숨김</div>
        ) : (
          <h3 className="text-base">{word.한국어}</h3>
        )}
      </div>
      <button
        onClick={() => onSpeak(word.힌디어)}
        className="cursor-pointer hover:translate-y-0.5 p-2 rounded hover:bg-gray-200 active:bg-gray-200 "
      >
        <Speech className="w-4 text-gray-400" />
      </button>
    </div>
  )
}
