//@flow

import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import NetInfo from '@react-native-community/netinfo';
import Snackbar from 'react-native-snackbar';

import SignInScreen from '../features/auth/screens/auth_container_sign_in';
import DashboardScreen from '../features/dashboard/screens/dashboard_screen';
import SplashScreen from '../features/splash/screens/splash_screen';

export const ROUTE_NAME = {
  SIGN_IN: 'Sign In',
  DASHBOARD: 'Dashboard',
  HOME: 'Home',
  EVENT: 'Event',
  ARTICLE: 'Articles',
  PROFILE: 'Profile',
  SPLASH: 'Splash'
};

const Stack = createStackNavigator();

const MainStack = () => {
  // Check connectivity
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      const snackbarText = state.isConnected
        ? "You're online"
        : "You're offline";
      return Snackbar.show({
        text: snackbarText,
        duration: Snackbar.LENGTH_SHORT
      });
    });
    return () => unsubscribe();
  }, []);

  // User cannot see dashboard without login
  const token = useSelector(state => state.auth_store.token);
  if (token === '') {
    return (
      <Stack.Navigator>
        <Stack.Screen name={ROUTE_NAME.SIGN_IN} component={SignInScreen} />
      </Stack.Navigator>
    );
  }

  return (
    <Stack.Navigator initialRouteName={ROUTE_NAME.SPLASH}>
      <Stack.Screen
        name={ROUTE_NAME.SPLASH}
        component={SplashScreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name={ROUTE_NAME.SIGN_IN}
        component={SignInScreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name={ROUTE_NAME.DASHBOARD}
        component={DashboardScreen}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
};

export default () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};
