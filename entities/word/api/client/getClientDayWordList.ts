import { supabase } from '@/shared/api/supabase/client'
import { Word } from '../type'

interface Props {
  params: string
}

export async function getClientDayWordList({ params }: Props) {
  const { data, error } = await supabase.from('day_list').select('*').eq('id', params)

  if (error) {
    return { ok: false as const, error: 'UNKNOWN' }
  }

  if (data && data.length > 0) {
    const dayWordList = data[0].words as Word[]
    return { ok: true as const, data: dayWordList }
  }

  return { ok: false as const, error: 'NOT_FOUND' }
}
