/**
 * Body Text
 * @param {String} children - text string (required)
 *
 * @format
 * @flow
 */

import React from 'react';
import {withTheme} from 'react-native-paper';

import {ComponentText} from './component_typography_styled_text';

const Body1 = withTheme(props => {
  const {
    theme: {fonts},
    children
  } = props;
  return (
    <ComponentText
      fontFamily={fonts.regular.fontFamily}
      fontSize={16}
      lineHeight={19}
      children={children}
      {...props}
    />
  );
});

const Body2 = withTheme(props => {
  const {
    theme: {fonts},
    children
  } = props;
  return (
    <ComponentText
      fontFamily={fonts.regular.fontFamily}
      fontSize={14}
      lineHeight={19}
      children={children}
      {...props}
    />
  );
});

export {Body1, Body2};
