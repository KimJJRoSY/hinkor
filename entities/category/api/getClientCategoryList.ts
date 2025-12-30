import { supabase } from '@/shared/api/supabase/client'

interface Props {
  label: string
}

export async function getClientCategoryList({ label }: Props) {
  const { data, error } = await supabase.from(label).select('*')

  if (error) {
    return { ok: false, error: 'UNKNOWN' }
  }
  if (!data) {
    return { ok: false, error: 'NOT_FOUND' }
  }

  return { ok: true, data: data }
}
