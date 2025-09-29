import { useTranslation } from 'react-i18next';
// const { t } = useTranslation();

// const [value, ...rest] = str.split(' ');
//   const text = rest.join(' ');
//   return `${value} ${i18n.t(text)}`;

 const translateTimeString = (timeStr) => {
  if(!timeStr) return ''
  // Match patterns like "2 hours ago" or "5 minutes"
  const match = timeStr.match(/^(\d+)\s+([a-z]+)(?:\s+([a-z]+))?$/i);
  if (!match) return timeStr; // return original if no match
  
  const { t } = useTranslation();
 
  // const [count, unit,suffix ] = match;
  let count = match[1] ?? false
  let timeUnit = match[2] ?? false
  // Get translated unit (assuming your i18n has "hours" key)
  const translatedUnit = timeUnit ? t(`common|timeUnits|${timeUnit}`) : '';

  return   match[3] 
    ? `${t(`common|timeSuffix|${match[3]}`)} ${count} ${timeUnit ? t(`common|timeUnits|${timeUnit}`) : ''} `
    : (timeUnit ? t(`common|timeUnits|${timeUnit}`) : '');
};

export default translateTimeString


 const ttime = (timeStr) => {
  if(!timeStr) return ''
  // Match patterns like "2 hours ago" or "5 minutes"
  const match = timeStr.match(/^(\d+)\s+([a-z]+)(?:\s+([a-z]+))?$/i);
  if (!match) return timeStr; // return original if no match
  
  const { translate } = useLanguage();
 
  // const [count, unit,suffix ] = match;
  let count = match[1] ?? false
  let timeUnit = match[2] ?? false

  return   match[3] 
    ? `${translate(`common.timeSuffix.${match[3]}`)} ${count} ${timeUnit ? translate(`common.timeUnits.${timeUnit}`) : ''} `
    : (timeUnit ? translate(`common.timeUnits.${timeUnit}`) : '');
};