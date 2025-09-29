import { useTranslation } from 'react-i18next';

function WelcomeBanner() {
  const { t, i18n } = useTranslation();
  
  return (
    <View>
      <Text>{t('common:welcome')}</Text>
      <Text>{t('userGreeting', { name: 'John' })}</Text>
      <Text>{t('pluralExample', { count: 5 })}</Text>
      
      <Button 
        title={t('menu:changeLanguage')} 
        onPress={() => i18n.changeLanguage('ti')} 
      />
    </View>
  );
}