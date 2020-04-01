// @flow

import styled from 'styled-components';
import {View} from 'react-native';

import {rh, rw, rbr} from '../../../../utils/responsive';

/**
 * Time Container
 * @param {String Color} backgroundColor - background color time container (required)
 */

const TimeContainer = styled(View)`
  background-color: ${props => props.backgroundColor};
  width: 100%;
  height: ${rh(19)}px;
  justify-content: center;
  align-items: center;
  opacity: 0.8;
  border-radius: ${rbr(4)}px;
  padding: ${rh(2)}px ${rw(8)}px;
`;

export {TimeContainer};
