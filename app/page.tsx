import { getServerCategoryList } from '@/entities/category/api/getServerCategoryList'
import { CategoryButton } from '@/features/category'
import { EmptyData } from '@/shared/ui'
import { getTranslations } from 'next-intl/server'

export default async function DayPage() {
  const t = await getTranslations('Common')
  const result = await getServerCategoryList({ label: 'day_list' })

  if (!result.ok) {
    switch (result.error) {
      case 'NOT_FOUND':
        return <EmptyData text={t('noData')} mode="dark" />
      default:
        return <EmptyData text={t('unknownError')} mode="dark" />
    }
  }

  return (
    <div className="flex flex-col gap-3 p-3 bg-secondary rounded-b-md rounded-r-md dark:bg-gray-800 dark:border dark:border-none">
      {result.data &&
        result.data.map((item) => (
          <CategoryButton label={`day${item.id}`} key={item.id} id={item.id} />
        ))}
    </div>
  )
}
