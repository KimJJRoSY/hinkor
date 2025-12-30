import { createSupabaseServer } from '@/shared/api'

interface Props {
  params?: string
  label: string
  field: string
}

export async function getServerWordList({ params, label, field }: Props) {
  const supabase = await createSupabaseServer()
  const { data, error } = await supabase.from(label).select('*').eq(field, params)

  if (error) {
    return { ok: false, error: 'UNKNOWN' }
  }
  if (!data) {
    return { ok: false, error: 'NOT_FOUND' }
  }

  return { ok: true, data: data[0].words }
}
