/**
 * Subtitle Text
 * @param {String} children - text string (required)
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleProp} from 'react-native';
import {withTheme, Theme} from 'react-native-paper';

import {ComponentText} from './component_typography_styled_text';

type TypographyType = $Exact<{
  theme: Theme,
  children: React$Node,
  style?: StyleProp
}>;

const Subtitle1 = withTheme((props: TypographyType) => {
  const {
    theme: {fonts},
    children
  } = props;
  return (
    <ComponentText
      fontFamily={fonts.thin.fontFamily}
      fontSize={16}
      lineHeight={19}
      children={children}
      {...props}
    />
  );
});

const Subtitle2 = withTheme(props => {
  const {
    theme: {fonts},
    children
  } = props;
  return (
    <ComponentText
      fontFamily={fonts.thin.fontFamily}
      fontSize={14}
      lineHeight={19}
      children={children}
      {...props}
    />
  );
});

export {Subtitle1, Subtitle2};
