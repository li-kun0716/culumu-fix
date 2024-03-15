import translation_ja from './ja/translation';
import translation_en from './en/translation';
import auth_page_en from './en/auth-page';
import auth_page_ja from './ja/auth-page';
import common_en from './en/common';
import common_ja from './ja/common';

const locales = {
  ja: {
    translation: translation_ja,
    'auth-page': auth_page_ja,
    common: common_ja
  },
  en: {
    translation: translation_en,
    'auth-page': auth_page_en,
    common: common_en
  }
};

export default locales;
