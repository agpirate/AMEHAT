import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

export const useLocalization = (ns = 'common') => {
  const { t, i18n } = useTranslation(ns);
  
  // console.log('Language changed successfully',t);

  // Memoize translations to avoid unnecessary recalculations
  const memoizedT = useMemo(() => t, [i18n.language, ns]);
  
// Fix: Return a pre-bound function
// const changeLanguage = (lang) => i18n.changeLanguage(lang);
  const changeLanguage = async (lang) => {
    try {
      await i18n.changeLanguage(lang);
      // console.log('Language changed successfully');
      return true;
    } catch (error) {
      // console.log('Language change failed:', error);
      return false;
    }
  };

  // const changeLanguage = (lang) => i18n.changeLanguage(lang);
  return {
    t:memoizedT,
    language: i18n.language,
    changeLanguage
  };
};

// import { useLocalization, changeLanguage } from '../i18n/service';