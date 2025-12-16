'use client'

import { ThemeCategory } from '@/entities/word'
import { useDebounce } from '@/shared/utils'
import { useEffect, useState } from 'react'

interface Props {
  data: ThemeCategory
}

export function useSearch({ data }: Props) {
  const [keyword, setKeyword] = useState('')
  const debouncedKeyword = useDebounce(keyword, 300)
  const [filteredData, setFilteredData] = useState(data)

  const onInputChange = (value: string) => {
    setKeyword(value)
  }

  const applyFilter = (text: string) => {
    const value = text.trim()

    if (value === '') {
      setFilteredData(data)
      return
    }

    const filtered = data.filter((item) => item.theme.includes(value))

    setFilteredData(filtered)
  }

  useEffect(() => {
    applyFilter(debouncedKeyword)
  }, [debouncedKeyword])
  return {
    keyword,
    filteredData,
    onInputChange,
  }
}
