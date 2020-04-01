// @flow

import React from 'react';
import {useNavigation, RouteProp} from '@react-navigation/native';

import {ROUTE_NAME} from '../../../routes/route';
import {Container, ButtonSignIn} from './auth_screen_styles';

type Screen = {
  signIn: Function,
  route: RouteProp
};

export default (props: Screen) => {
  const {signIn, route} = props;
  const navigation = useNavigation();
  const singingIn = () => {
    const routeName = route?.params?.destinationRouteName;
    const mainRouteName = route?.params?.mainRouteName;

    signIn(`token from screen screen ${routeName}`);
    if (routeName) {
      return navigation.replace(routeName);
    }

    if (mainRouteName) {
      return navigation.navigate(mainRouteName);
    }

    return navigation.reset({
      index: 0,
      routes: [{name: ROUTE_NAME.DASHBOARD}]
    });
  };

  return (
    <Container>
      <ButtonSignIn mode="contained" onPress={singingIn}>
        Sign In
      </ButtonSignIn>
    </Container>
  );
};
