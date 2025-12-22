import { getCategoryList } from '@/entities/category'
import { CategoryButton } from '@/features/category'

import { EmptyData } from '@/shared/ui'

export default async function DayPage() {
  const result = await getCategoryList({ label: 'day_list' })

  if (!result.ok) {
    switch (result.error) {
      case 'NOT_FOUND':
        return <EmptyData text="데이터가 없습니다." mode="dark" />
      default:
        return <EmptyData text="알 수 없는 오류가 발생하였습니다." mode="dark" />
    }
  }

  return (
    <div className="flex flex-col gap-3 p-3 bg-secondary rounded-b-md rounded-r-md">
      {result.data &&
        result.data.map((item) => (
          <CategoryButton label={`day${item.id}`} key={item.id} id={item.id} />
        ))}
    </div>
  )
}
