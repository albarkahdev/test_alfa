// @flow

import {Surface} from 'react-native-paper';
import styled from 'styled-components';

import {rh, rw, rbr} from '../../../../utils/responsive';
import {Body2} from '../../../typography/component_typography_bodies';

/**
 * Menu card
 */

const Container = styled(Surface)`
  border-radius: ${rbr(8)}px;
  width: ${rw(112)}px;
  height: ${rh(112)}px;
  justify-content: center;
  position: absolute;
  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.4;
  shadow-radius: 8px;
  elevation: 2;
  left: 63.41%;
  right: 2.44%;
  top: 4px;
  bottom: 21.65%;
  z-index: 10;
`;

/**
 * Action Menu card
 * @param {Function} onPress - action onpress (required)
 */

const ActionMenuCard = styled.TouchableOpacity`
  height: ${rh(48)}px;
  justify-content: center;
  align-items: flex-start;
  padding-left: ${rw(16)}px;
`;

/**
 * Action Name card
 */

const ActionNameCard = styled(Body2)`
  line-height: ${rh(17)}px;
`;

export {Container, ActionMenuCard, ActionNameCard};
