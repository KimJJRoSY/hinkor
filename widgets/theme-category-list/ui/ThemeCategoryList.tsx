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
    <div className="flex flex-col min-h-[calc(100dvh-160px)]">
      <div className="sticky top-18 z-40 bg-secondary h-16 flex items-center">
        <SearchBar inputRef={inputRef} onChange={handleChange} />
      </div>

      <div>
        {filteredData &&
          filteredData.map((item) => (
            <div className="mb-3" key={item.id}>
              <CategoryButton label={item.theme} id={item.theme} />
            </div>
          ))}
        {filteredData.length === 0 && (
          <div className="flex-1 flex items-center justify-center text-white ">
            검색 결과가 없습니다
          </div>
        )}
      </div>
    </div>
  )
}
export default ThemeCategoryList
