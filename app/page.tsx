import { createServer } from '@/shared/api'
import { CategoryButton } from '@/features/category'

export default async function DayPage() {
  const supabase = await createServer()
  const { data } = await supabase.from('day_list').select('*')

  return (
    <div className="flex flex-col gap-3 p-3 bg-secondary rounded-b-md rounded-r-md">
      {data &&
        data.map((item) => <CategoryButton label={`day${item.id}`} key={item.id} id={item.id} />)}
    </div>
  )
}
