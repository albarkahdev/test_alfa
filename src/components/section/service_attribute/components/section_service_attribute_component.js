// @flow

import styled from 'styled-components';
import {View} from 'react-native';

import {rw, rh, rbr} from '../../../../utils/responsive';
import {Body2} from '../../../typography/component_typography_bodies';

/**
 * Service Attribute Container
 * @param {Number} marginTop - custom margint top (optional)
 */

const ServiceAttributeContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  margin-top: ${props => rh(props.marginTop ? props.marginTop : 12)}px;
`;

/**
 * Service Attribute Description
 * @param {String Color} color - color text (required)
 */

const ServiceAttributeDescription = styled(Body2)`
  line-height: ${rh(17)}px;
  color: ${props => props.color};
`;

/**
 * Dot Divider
 * @param {String Color} color - color dot (required)
 */

const DotDivider = styled(View)`
  width: ${rw(5)}px;
  height: ${rw(5)}px;
  border-radius: ${rbr(3)}px;
  background-color: ${props => props.color};
  margin: ${rw(8)}px;
`;

export {ServiceAttributeContainer, ServiceAttributeDescription, DotDivider};
