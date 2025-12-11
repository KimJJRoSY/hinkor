'use client'

import { Word } from '@/entities/word'
import useToast from '@/shared/utils/useToast'
import { useState, useMemo } from 'react'
interface Props {
  data: Word[]
}

export function useQuiz({ data }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [wrongList, setWrongList] = useState<number[]>([])
  const { success, warn } = useToast()
  const shuffled = [...data].sort(() => Math.random() - 0.5)
  const isFinished = currentIndex === data.length

  const quizList = useMemo(() => {
    if (data.length === 0) return []
    return shuffled.map((item, index) => {
      const others = shuffled.filter((_, i) => i !== index)
      const wrong = others
        .map((v) => v.한국어)
        .sort(() => Math.random() - 0.5)
        .slice(0, 2)

      const chooseList = [
        { option: item.한국어, isSelected: false },
        { option: wrong[0], isSelected: false },
        { option: wrong[1], isSelected: false },
      ].sort(() => Math.random() - 0.5)

      return {
        index: index,
        question: item.힌디어,
        answer: item.한국어,
        chooseList,
      }
    })
  }, [data])

  const handleQuiz = (option: string) => {
    setSelectedOption(option)

    if (option === quizList[currentIndex].answer) {
      success('정답입니다!')
      setCurrentIndex((prev) => prev + 1)
      setSelectedOption(null)
    } else {
      warn('오답입니다!')
      setWrongList((prev) => {
        const set = new Set(prev)
        set.add(currentIndex)
        return [...set]
      })
    }
  }

  return {
    quizList,
    shuffled,
    wrongList,
    selectedOption,
    currentIndex,
    isFinished,
    handleQuiz,
  }
}
