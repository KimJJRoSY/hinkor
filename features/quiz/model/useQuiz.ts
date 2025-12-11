'use client'
import { Word } from '@/entities/word'
import useToast from '@/shared/utils/useToast'
import { useState, useMemo } from 'react'

export function useQuiz(data: Word[]) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const { success, warn } = useToast()

  const quizList = useMemo(() => {
    if (data.length === 0) return []

    const shuffled = [...data].sort(() => Math.random() - 0.5)

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
    }
  }

  return {
    quizList,
    selectedOption,
    currentIndex,
    handleQuiz,
  }
}
