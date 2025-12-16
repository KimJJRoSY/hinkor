'use client'
import { ThemeCategory } from '@/entities/word'
import { CategoryButton } from '@/features/category'
import { SearchBar, useSearch } from '@/features/search'
import { EmptyData } from '@/shared/ui'

interface Props {
  data: ThemeCategory
}

function ThemeCategoryList({ data }: Props) {
  const { inputRef, filteredData, onInputChange } = useSearch({ data })

  return (
    <div className="flex flex-col ">
      <div className="sticky top-18 z-40 bg-secondary h-16 flex items-center">
        <SearchBar inputRef={inputRef} onChange={onInputChange} />
      </div>

      <div className="min-h-[calc(100dvh-230px)]">
        {filteredData &&
          filteredData.map((item) => (
            <div className="mb-3" key={item.id}>
              <CategoryButton label={item.theme} id={item.theme} />
            </div>
          ))}
        {filteredData.length === 0 && <EmptyData label="검색결과" mode="light" />}
      </div>
    </div>
  )
}
export default ThemeCategoryList
