import { createSupabaseServer } from '@/shared/api'
interface Props {
  label: string
  id: string
}

export default async function getServerQuizList({ label, id }: Props) {
  const supabase = await createSupabaseServer()

  const { data: base, error } =
    label === 'day'
      ? await supabase.from('day_list').select('*').eq('id', id)
      : await supabase.from('theme_list').select('*').eq('theme', id)

  if (error) {
    return { ok: false, error: 'UNKNOWN' }
  }

  if (!base) {
    return { ok: false, error: 'NOT_FOUND' }
  }

  const current = base[0]

  if (label === 'theme') {
    const { data: themeQuiz } = await supabase
      .from('theme_list')
      .select('*')
      .eq('theme', current.opposition)
    const opposition = themeQuiz?.[0]

    const merged = {
      ...current,
      words: [...(current.words ?? []), ...(opposition?.words ?? [])],
    }

    return { ok: true, data: merged }
  }

  return { ok: true, data: current }
}
