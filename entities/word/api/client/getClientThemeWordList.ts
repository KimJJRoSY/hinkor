import { supabase } from '@/shared/api/supabase/client'
import { ThemeItem } from '../type'

interface Props {
  params: string
}

export async function getClientThemeWordList({ params }: Props) {
  const { data, error } = await supabase.from('theme_list').select('*').eq('theme', params)

  if (error) {
    return { ok: false as const, error: 'UNKNOWN' }
  }

  if (data) {
    return { ok: true as const, data: data[0] as ThemeItem }
  }

  return { ok: false as const, error: 'NOT_FOUND' }
}
