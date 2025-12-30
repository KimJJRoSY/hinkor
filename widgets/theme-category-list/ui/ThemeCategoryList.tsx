'use client'
import { getClientCategoryList } from '@/entities/category/api/getClientCategoryList'
import { ThemeCategory } from '@/entities/word'
import { CategoryButton } from '@/features/category'
import { SearchBar, useSearch } from '@/features/search'
import { EmptyData } from '@/shared/ui'
import { useQuery } from '@tanstack/react-query'

function ThemeCategoryList() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['category', 'theme_list'],
    queryFn: () => getClientCategoryList({ label: 'theme_list' }),
  })
  const { keyword, filteredData, onInputChange } = useSearch({
    data: (data?.ok ? data.data : []) as ThemeCategory,
  })

  if (isLoading) return null
  if (isError) return <EmptyData text="알 수 없는 오류가 발생하였습니다." mode="dark" />
  if (!data?.ok) return <EmptyData text="데이터가 없습니다." mode="dark" />

  return (
    <div className="flex flex-col ">
      <div className="sticky top-18 z-40 y py-3 flex items-center bg-white dark:bg-gray-800 ">
        <SearchBar value={keyword} onChange={onInputChange} />
      </div>

      <div className="min-h-[calc(100dvh-230px)]">
        {filteredData.map((item) => (
          <div className="mb-3" key={item.id}>
            <CategoryButton label={item.theme} id={item.theme} />
          </div>
        ))}
        {filteredData.length === 0 && <EmptyData text="검색결과가 없습니다" mode="dark" />}
      </div>
    </div>
  )
}
export default ThemeCategoryList
