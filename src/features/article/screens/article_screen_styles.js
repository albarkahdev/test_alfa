// @flow

import styled from 'styled-components';
import {ScrollView} from 'react-native';

import {rh} from '../../../utils/responsive';

const Container = styled(ScrollView)`
  flex: 1;
  background: ${props => props.theme.background};
  padding: ${rh(12)}px 0px;
`;

export {Container};
