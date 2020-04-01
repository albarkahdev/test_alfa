/**
 * Card Wrapper with Shadow
 * @param {Number} width - width card (required)
 *
 * @format
 * @flow
 */

import styled from 'styled-components';

import {rh, rbr} from '../../utils/responsive';

const Card = styled.View`
  width: ${props => props.width - 32}px;
  height: ${rh(192)}px;
  border-radius: ${rbr(8)}px;
  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.4;
  shadow-radius: 8px;
  elevation: 2;
`;

export default Card;
