import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// import * as RNLocalize from 'react-native-localize';

export const localizationLanguages = {
    'ti-ET':    { id: 'ti-ET',value:'ti-ET', name: 'ትግርኛ', type: 'TV', language: 'Tigrinya',icon: '🇬🇧' },
   'en':   { id: 'en',value:'en', name: 'English', type: 'TV', language: 'English',icon: '🇬🇧'  },
     'am': { id: 'am',value:'am', name: 'አማርኛ', type: 'TV', language: 'Amharic', icon: '🇬🇧'  },

  //  'er':   { id: 'er',value:'er', name: 'Erob', type: 'TV', language: 'Arabic', icon: '🇬🇧'  },
  //   'ku':  { id: 'ku',value:'ku', name: 'Kunama', type: 'TV', language: 'Oromo', icon: '🇬🇧'  },
  //    'ar': { id: 'ar',value:'ar', name:'Arabic', type: 'TV', language: 'Arabic', icon: '🇬🇧'  },
};

// 1. Define namespaces
const namespaces = ['common','categories','menu','news','live','radio','more','tv'];

// 2. Dynamic resource loader

const resources = { 
  en:{
    categories: require(`./locals/en/categories.json`),
    news:       require(`./locals/en/news.json`),
    common:  require(`./locals/en/common.json`),
    menu: require(`./locals/en/menu.json`),
    tv: require(`./locals/en/tv.json`),
    live: require(`./locals/en/live.json`),
    radio: require(`./locals/en/radio.json`),
    more: require(`./locals/en/more.json`), 
  },
    'ti-ET':{
    categories: require(`./locals/ti-ET/categories.json`),
    news:       require(`./locals/ti-ET/news.json`),
    common:  require(`./locals/ti-ET/common.json`),
    menu: require(`./locals/ti-ET/menu.json`),
    tv: require(`./locals/ti-ET/tv.json`),
    live: require(`./locals/ti-ET/live.json`),
    radio: require(`./locals/ti-ET/radio.json`),
    more: require(`./locals/ti-ET/more.json`), 
  },
      am:{
    categories: require(`./locals/am/categories.json`),
    news:       require(`./locals/am/news.json`),
    common:  require(`./locals/am/common.json`),
  menu: require(`./locals/am/menu.json`),
    tv: require(`./locals/am/tv.json`),
  live: require(`./locals/am/live.json`),
  radio: require(`./locals/am/radio.json`),   
  more: require(`./locals/am/more.json`), 
  },
  //   er:{
  //   categories: require(`./locals/er/categories.json`),
  //   news:       require(`./locals/er/news.json`),
  //   common:  require(`./locals/er/common.json`),
  // menu: require(`./locals/er/menu.json`),
  //   tv: require(`./locals/er/tv.json`),
  // live: require(`./locals/er/live.json`),     
  // radio: require(`./locals/er/radio.json`),
  // more: require(`./locals/er/more.json`), 
  // },
  //   ku:{
  //   categories: require(`./locals/ku/categories.json`),
  //   news:       require(`./locals/ku/news.json`),
  //   common:  require(`./locals/ku/common.json`),
  // menu: require(`./locals/ku/menu.json`),
  //   tv: require(`./locals/ku/tv.json`),
  // live: require(`./locals/ku/live.json`),
  // radio: require(`./locals/ku/radio.json`),
  // more: require(`./locals/ku/more.json`), 
  // },

  //   ar:{
  //   categories: require(`./locals/ar/categories.json`),
  //   news:       require(`./locals/ar/news.json`),
  //   common:  require(`./locals/ar/common.json`),
  // menu: require(`./locals/ar/menu.json`),
  //   videos: require(`./locals/ar/tv.json`),
  // live: require(`./locals/ar/live.json`),
  // radio: require(`./locals/ar/radio.json`),   
  // more: require(`./locals/ar/more.json`), 
  // }
 }

// 3. Initialize i18n
i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources,
  ns: namespaces,

  keySeparator: false, // Disable default ':'
  nsSeparator: '|',   // Use a different namespace separator

  lng: 'ti-ET',
  fallbackLng: 'ti-ET',
  defaultNS: 'common',

  // / ... other config
  interpolation: { 
    escapeValue: false,
    format: (value, format, lng) => {
        if (format === 'number') return new Intl.NumberFormat(lng).format(value);
        return value;
      }
   },
  initImmediate: false, // Loads translations synchronously
  cleanCode: true, // Removes empty translations
  react: { 
    useSuspense: false,
    bindI18nStore: 'added removed' // React to language changes
  }
});



export default i18n;