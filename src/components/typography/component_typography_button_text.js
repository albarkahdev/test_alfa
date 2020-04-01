/**
 * Button Text
 * @param {String} children - text string (required)
 *
 * @format
 * @flow
 */

import React from 'react';
import {withTheme} from 'react-native-paper';

import {ComponentText} from './component_typography_styled_text';

const ButtonText = withTheme(props => {
  const {
    theme: {fonts},
    children
  } = props;
  return (
    <ComponentText
      fontFamily={fonts.thin.fontFamily}
      fontSize={14}
      lineHeight={17}
      children={children}
      {...props}
    />
  );
});

export {ButtonText};
