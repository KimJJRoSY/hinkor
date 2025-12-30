import { createSupabaseServer } from '@/shared/api'

interface Props {
  label: string
}

export async function getServerCategoryList({ label }: Props) {
  const supabase = await createSupabaseServer()
  const { data, error } = await supabase.from(label).select('*')

  if (error) {
    return { ok: false, error: 'UNKNOWN' }
  }
  if (!data) {
    return { ok: false, error: 'NOT_FOUND' }
  }

  return { ok: true, data: data }
}
