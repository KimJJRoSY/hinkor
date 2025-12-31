import { getRequestConfig } from 'next-intl/server'
import { cookies, headers } from 'next/headers'

export const locales = ['en', 'ko'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'ko'

function getLocaleFromAcceptLanguage(acceptLanguage: string | null): Locale | null {
  if (!acceptLanguage) return null

  const languages = acceptLanguage.split(',').map((lang) => {
    const [code] = lang.trim().split(';')
    return code.split('-')[0].toLowerCase()
  })

  for (const lang of languages) {
    if (locales.includes(lang as Locale)) {
      return lang as Locale
    }
  }

  return null
}

export default getRequestConfig(async () => {
  const cookieStore = await cookies()
  const headerStore = await headers()

  // 1. cookie에서 먼저 확인 (사용자가 직접 선택한 경우)
  const localeCookie = cookieStore.get('locale')?.value as Locale | undefined
  if (localeCookie && locales.includes(localeCookie)) {
    return {
      locale: localeCookie,
      messages: (await import(`./messages/${localeCookie}.json`)).default,
    }
  }

  // 2. Accept-Language 헤더에서 브라우저 언어 감지
  const acceptLanguage = headerStore.get('accept-language')
  const browserLocale = getLocaleFromAcceptLanguage(acceptLanguage)
  if (browserLocale) {
    return {
      locale: browserLocale,
      messages: (await import(`./messages/${browserLocale}.json`)).default,
    }
  }

  // 3. 기본값
  return {
    locale: defaultLocale,
    messages: (await import(`./messages/${defaultLocale}.json`)).default,
  }
})
