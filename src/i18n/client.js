import { createI18nClient } from 'next-intl/client';
import { locales } from '@/lib/i18n';

export const { useMessages, useNow, useTimeZone, useFormatter } = createI18nClient({
  locales,
  defaultLocale: 'en',
  timeZone: 'UTC'
}); 