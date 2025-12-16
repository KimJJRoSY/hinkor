'use client'

import { ThemeCategory } from '@/entities/word'
import { useDebounce } from '@/shared/utils'
import { useEffect, useRef, useState } from 'react'

interface Props {
  data: ThemeCategory
}

export function useSearch({ data }: Props) {
  const [keyword, setKeyword] = useState('')
  const debouncedKeyword = useDebounce(keyword, 300)
  const [filteredData, setFilteredData] = useState(data)
  const inputRef = useRef<HTMLInputElement>(null)

  const onInputChange = (value: string) => {
    setKeyword(value)
  }

  const applyFilter = (text: string) => {
    const value = text.trim()

    if (value === '') {
      setFilteredData(data)
      return
    }

    const filtered = data.filter((item) => item.theme.startsWith(value))

    setFilteredData(filtered)
  }

  useEffect(() => {
    applyFilter(debouncedKeyword)
  }, [debouncedKeyword])
  return {
    inputRef,
    filteredData,
    onInputChange,
  }
}
