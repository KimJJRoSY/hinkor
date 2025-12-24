'use client'

import { ThemeCategory } from '@/entities/word'
import { useDebounce } from '@/shared/utils'
import { useMemo, useState } from 'react'

interface Props {
  data: ThemeCategory
}
export function useSearch({ data }: Props) {
  const [keyword, setKeyword] = useState('')
  const debouncedKeyword = useDebounce(keyword, 300)

  const filteredData = useMemo(() => {
    const value = debouncedKeyword.trim()
    if (!value) return data
    return data.filter((item) => item.theme.includes(value))
  }, [debouncedKeyword, data])

  const onInputChange = (value: string) => {
    setKeyword(value)
  }

  return {
    keyword,
    filteredData,
    onInputChange,
  }
}
