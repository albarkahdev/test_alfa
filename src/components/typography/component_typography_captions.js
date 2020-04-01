/**
 * Caption Text
 * @param {String} children - text string (required)
 *
 * @format
 * @flow
 */

import React from 'react';
import {withTheme} from 'react-native-paper';

import {ComponentText} from './component_typography_styled_text';

const Caption1 = withTheme(props => {
  const {
    theme: {fonts},
    children
  } = props;
  return (
    <ComponentText
      fontFamily={fonts.regular.fontFamily}
      fontSize={12}
      lineHeight={15}
      children={children}
      {...props}
    />
  );
});

const Caption2 = withTheme(props => {
  const {
    theme: {fonts},
    children
  } = props;
  return (
    <ComponentText
      fontFamily={fonts.medium.fontFamily}
      fontSize={12}
      lineHeight={17}
      children={children}
      {...props}
    />
  );
});

const Caption3 = withTheme(props => {
  const {
    theme: {fonts},
    children
  } = props;
  return (
    <ComponentText
      fontFamily={fonts.thin.fontFamily}
      fontSize={12}
      lineHeight={17}
      children={children}
      {...props}
    />
  );
});

const Caption4 = withTheme(props => {
  const {
    theme: {fonts},
    children
  } = props;
  return (
    <ComponentText
      fontFamily={fonts.regular.fontFamily}
      fontSize={12}
      lineHeight={20}
      children={children}
      {...props}
    />
  );
});

export {Caption1, Caption2, Caption3, Caption4};
