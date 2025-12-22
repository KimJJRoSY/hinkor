import { createServer } from '@/shared/api'

interface Props {
  label: string
}

export async function getCategoryList({ label }: Props) {
  const supabase = await createServer()
  const { data, error } = await supabase.from(label).select('*')

  if (error) {
    return { ok: false, error: 'UNKNOWN' }
  }
  if (!data) {
    return { ok: false, error: 'NOT_FOUND' }
  }

  return { ok: true, data: data }
}
