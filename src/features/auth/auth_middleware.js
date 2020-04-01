// @flow

import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {ActivityIndicator} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {ROUTE_NAME} from '../../routes/route';
import SignInScreen from './screens/auth_container_sign_in';

const Stack = createStackNavigator();

type Screen = {
  children: React$Node,
  navigation: NavigationProp,
  token: string,
  destinationRouteName?: string,
  mainRouteName?: string
};

const AuthMiddleware = (props: Screen) => {
  const {
    children,
    navigation,
    token,
    destinationRouteName,
    mainRouteName
  } = props;
  const routeName = destinationRouteName;

  useEffect(() => {
    if (routeName && token === '') {
      navigation.replace(ROUTE_NAME.SIGN_IN, {destinationRouteName});
    }
  }, []);

  if (token === '') {
    if (routeName) {
      return <ActivityIndicator />;
    }
    return (
      <Stack.Navigator headerMode="screen">
        <Stack.Screen
          name={ROUTE_NAME.SIGN_IN}
          component={SignInScreen}
          initialParams={{mainRouteName}}
        />
      </Stack.Navigator>
    );
  }
  return children;
};

const mapStateToProps = state => ({token: state.auth_store.token});

export default connect(mapStateToProps)(AuthMiddleware);
