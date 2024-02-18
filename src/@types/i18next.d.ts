import 'i18next';
import locales from '@/i18n/locales';

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: typeof locales.en;
  }
}
