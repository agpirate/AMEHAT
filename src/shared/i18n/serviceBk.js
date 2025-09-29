import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as RNLocalize from 'react-native-localize';

// Load translations dynamically
const loadLocaleResources = (lang) => ({
  common: require(`./locales/${lang}/common.json`),
  categories: require(`./locales/${lang}/categories.json`)
});

i18n
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    fallbackLng: 'en',
    resources: {
      en: loadLocaleResources('en'),
      ti: loadLocaleResources('ti-ET')
    },
    ns: ['common', 'categories'],
    defaultNS: 'common',
    interpolation: { escapeValue: false },
    react: { useSuspense: false }
  });

export const changeLanguage = async (lang) => {
  if (!i18n.hasResourceBundle(lang, 'common')) {
    i18n.addResourceBundle(lang, 'common', loadLocaleResources(lang).common);
  }
  await i18n.changeLanguage(lang);
};

export default i18n;