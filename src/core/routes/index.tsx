import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useMemo } from 'react';

// Core Screens
import NotFoundScreen from '../screens/NotFound';
import WellcomeScreen from '../screens/WellcomeScreen';

// Auth Routes
import MainAppTabs from './tabs/mainTab';
import AuthRoutes from '../../features/auth/routes';

import { ROUTES, RootStackParamList } from '../../app/config/routes';
import theStore from "../../features/auth/stores/store"

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  // Store data - this should come from your state management (Redux, Context, etc.)

  const { YieldItem }  = theStore()
  const isLoggedIn = YieldItem.item.authenticated;

  // Memoize the screen options to prevent unnecessary re-renders
  const screenOptions = useMemo(() => ({ 
    headerShown: false 
  }), []);

  // Auth stack screens - for non-authenticated users
  const authScreens = useMemo(() => (
    <>
      {/* <Stack.Screen 
        name={ROUTES.CORE.NAV_SCREEN} 
        options={screenOptions}
      >
        {() => (
          <Stack.Navigator 
            initialRouteName={ROUTES.CORE.NAV.WELCOME}
            screenOptions={screenOptions}
          >
            <Stack.Screen 
              name={ROUTES.CORE.NAV.WELCOME} 
              component={WellcomeScreen} 
            />
          </Stack.Navigator>
        )}
      </Stack.Screen>
       */}
      <Stack.Screen 
        name={ROUTES.AUTH.NAV_SCREEN} 
        component={AuthRoutes} 
        options={screenOptions} 
      />
    </>
  ), [screenOptions]);

  // App stack screens - for authenticated users
  const appScreens = useMemo(() => (
    <Stack.Screen 
      name={ROUTES.MAIN_TAB.NAV_SCREEN} 
      component={MainAppTabs} 
      options={screenOptions} 
    />
  ), [screenOptions]);

  return (
    <Stack.Navigator 
      // initialRouteName={
      //   isLoggedIn ? ROUTES.MAIN_TAB.GATEWAY : ROUTES.CORE.NAV_SCREEN
      // }
      screenOptions={screenOptions}
    >
      {isLoggedIn ? appScreens : authScreens}
    </Stack.Navigator>
  );
};

export default AppNavigator;