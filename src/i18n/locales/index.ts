import translation_ja from './ja/translation';
import client_page_ja from './ja/client-page';
import second_page_ja from './ja/second-page';
import translation_en from './en/translation';
import client_page_en from './en/client-page';
import second_page_en from './en/second-page';

const locales = {
  ja: {
    translation: translation_ja,
    'client-page': client_page_ja,
    'second-page': second_page_ja
  },
  en: {
    translation: translation_en,
    'client-page': client_page_en,
    'second-page': second_page_en
  }
};

export default locales;
