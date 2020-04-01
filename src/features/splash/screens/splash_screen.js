// @flow

import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

import {Container, Logo} from './splash_screen_styles';
import {ROUTE_NAME} from '../../../routes/route';
import {IMAGES} from '../../../utils/images';

export default () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      return navigation.reset({
        index: 0,
        routes: [{name: ROUTE_NAME.DASHBOARD}]
      });
    }, 1000);
  }, []);

  return (
    <Container>
      <Logo source={IMAGES.LOGO_METEOR} />
    </Container>
  );
};
