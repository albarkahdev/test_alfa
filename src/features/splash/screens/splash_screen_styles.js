// @flow

import styled from 'styled-components';

import {COLORS} from '../../../utils/colors';

const Container = styled.View`
  flex: 1;
  background-color: ${COLORS.WHITE};
  justify-content: center;
  align-items: center;
`;

const Logo = styled.Image`
  width: 98px;
  height: 48px;
  margin: 51px 16px;
`;

export {Container, Logo};
