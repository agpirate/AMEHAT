import i18n from '../index';

export const changeLanguage = async (lang) => {
  try {
    await i18n.changeLanguage(lang);
    // console.log('Language change failed:');
    
    return true;
  } catch (error) {
    // console.log('Language change failed:', error);
    return false;
  }
};

// For direct i18n instance access (rarely needed)
export const getI18nInstance = () => i18n;

export const currentLanguage = () => i18n.language;