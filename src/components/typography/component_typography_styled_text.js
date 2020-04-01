/**
 * Styled Text
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleProp, Text} from 'react-native';
import {Theme} from 'react-native-paper';
import styled from 'styled-components';

import {COLORS} from '../../utils/colors';
import {rh, rf} from '../../utils/responsive';

type ComponentTextType = $Exact<{
  fontFamily: string,
  fontSize: number,
  lineHeight: number,
  numberOfLines?: number,
  children: React$Node,
  theme: Theme,
  style?: StyleProp
}>;

export const StyledText = styled(Text)`
  font-family: ${props => props.fontFamily};
  font-style: normal;
  font-size: ${props => rf(props.fontSize)}px;
  line-height: ${props => rh(props.lineHeight)}px;
  color: ${props => props.color};
`;

export const ComponentText = (props: ComponentTextType) => {
  const {fontFamily, fontSize, lineHeight, children} = props;
  return (
    <StyledText
      color={COLORS.BLACK}
      fontFamily={fontFamily}
      fontSize={fontSize}
      lineHeight={lineHeight}
      {...props}>
      {children}
    </StyledText>
  );
};
