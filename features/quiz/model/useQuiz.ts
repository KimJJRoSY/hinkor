'use client'
import { Word } from '@/entities/word'
import { useState, useMemo } from 'react'

export function useQuiz(data: Word[]) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const quizList = useMemo(() => {
    if (data.length === 0) return []

    const shuffled = [...data].sort(() => Math.random() - 0.5)

    return shuffled.map((item, index) => {
      const others = shuffled.filter((_, i) => i !== index)

      const wrong = others
        .map((v) => v.한국어)
        .sort(() => Math.random() - 0.5)
        .slice(0, 2)

      const chooseList = [item.한국어, ...wrong].sort(() => Math.random() - 0.5)

      return {
        question: item.힌디어,
        answer: item.한국어,
        chooseList,
      }
    })
  }, [data])

  const handleQuiz = (answer: string) => {
    if (answer === quizList[currentIndex].answer) {
      alert('정답!')
      setCurrentIndex((prev) => prev + 1)
    } else {
      alert('오답!')
    }
  }

  return {
    quizList,
    currentIndex,
    handleQuiz,
  }
}
