/**
 * Header Text
 * @param {String} children - text string (required)
 *
 * @format
 * @flow
 */

import React from 'react';
import {withTheme} from 'react-native-paper';

import {ComponentText} from './component_typography_styled_text';

const Header1 = withTheme(props => {
  const {
    theme: {fonts},
    children
  } = props;
  return (
    <ComponentText
      fontFamily={fonts.light.fontFamily}
      fontSize={96}
      lineHeight={117}
      children={children}
      {...props}
    />
  );
});

const Header2 = withTheme(props => {
  const {
    theme: {fonts},
    children
  } = props;
  return (
    <ComponentText
      fontFamily={fonts.light.fontFamily}
      fontSize={60}
      lineHeight={73}
      children={children}
      {...props}
    />
  );
});

const Header3 = withTheme(props => {
  const {
    theme: {fonts},
    children
  } = props;
  return (
    <ComponentText
      fontFamily={fonts.regular.fontFamily}
      fontSize={48}
      lineHeight={58}
      children={children}
      {...props}
    />
  );
});

const Header4 = withTheme(props => {
  const {
    theme: {fonts},
    children
  } = props;
  return (
    <ComponentText
      fontFamily={fonts.regular.fontFamily}
      fontSize={34}
      lineHeight={41}
      children={children}
      {...props}
    />
  );
});

const Header5 = withTheme(props => {
  const {
    theme: {fonts},
    children
  } = props;
  return (
    <ComponentText
      fontFamily={fonts.regular.fontFamily}
      fontSize={24}
      lineHeight={29}
      children={children}
      {...props}
    />
  );
});

const Header6 = withTheme(props => {
  const {
    theme: {fonts},
    children
  } = props;
  return (
    <ComponentText
      fontFamily={fonts.thin.fontFamily}
      fontSize={20}
      lineHeight={24}
      children={children}
      {...props}
    />
  );
});

export {Header1, Header2, Header3, Header4, Header5, Header6};
