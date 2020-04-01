// @flow

import styled from 'styled-components';
import {View} from 'react-native';

import {rw} from '../../../utils/responsive';

/**
 * Container Header List
 */

export const Container = styled(View)`
  margin: ${rw(16)}px;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;
