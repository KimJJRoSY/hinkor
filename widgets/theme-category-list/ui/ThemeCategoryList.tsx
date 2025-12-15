'use client'
import { ThemeCategory } from '@/entities/word'
import { CategoryButton } from '@/features/category'
import { SearchBar } from '@/features/search'
import { useDebounce } from '@/shared/utils/useDebounce'
import { useEffect, useRef, useState } from 'react'

interface Props {
  data: ThemeCategory
}

function ThemeCategoryList({ data }: Props) {
  const [keyword, setKeyword] = useState('')
  const debouncedKeyword = useDebounce(keyword, 300)

  const [filteredData, setFilteredData] = useState(data)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleChange = (value: string) => {
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

  return (
    <>
      <SearchBar inputRef={inputRef} onChange={handleChange} />
      {filteredData &&
        filteredData.map((item) => (
          <CategoryButton label={item.theme} id={item.theme} key={item.id} />
        ))}
      {filteredData.length === 0 && (
        <div className="flex justify-center min-h-[70vh] text-white ">검색 결과가 없습니다</div>
      )}
    </>
  )
}
export default ThemeCategoryList
