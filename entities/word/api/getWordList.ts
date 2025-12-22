import { createServer } from '@/shared/api'

interface Props {
  params?: string
  label: string
}

export default async function getWordList({ params, label }: Props) {
  const supabase = await createServer()

  if (!params) {
    return { ok: false, error: 'NOT_FOUND' }
  }
  const { data, error } = await supabase.from(label).select('*').eq('id', params)
  if (error || !data) {
    return { ok: false, error: 'UNKNOWN' }
  }
  return { ok: true, data: data[0].words }
}
