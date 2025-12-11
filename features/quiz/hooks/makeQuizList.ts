import { Word } from '@/entities/word'

export type QuizList = { question: string; answer: string; chooseList: string[] }[]

export function makeQuizList(data: Word[]) {
  if (data.length === 0) {
    return []
  }

  const shuffled = [...data].sort(() => Math.random() - 0.5)
  const quizList = shuffled.map((item, index) => {
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
  return quizList
}
