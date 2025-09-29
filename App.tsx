
import React, { useRef,useEffect,useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import AppNavigator from "./src/core/routes/index"
import { NavigationContainer } from '@react-navigation/native';

// providers
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';

import { ThemeProvider } from './src/shared/contexts/themProvider';
import { PageSettingsProvider } from './src/shared/contexts/pageSettingsProvider';

// reducers, computors
import i18n from './src/shared/i18n/index';
import store from './src/core/stores/index'; // Import your configured store

import SplashScreen from './src/core/screens/SplashScreen.tsx'

function App(): React.JSX.Element {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading process
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }
  
  return (
    <Provider store={store}>
    <I18nextProvider i18n={i18n}>
  <SafeAreaProvider> 
<ThemeProvider>
  
<PageSettingsProvider>

    <NavigationContainer>  
          <AppNavigator />
    </NavigationContainer>

  </PageSettingsProvider>

  </ThemeProvider>
  </SafeAreaProvider>
  </I18nextProvider>
  </Provider>
  );
}


export default App;
