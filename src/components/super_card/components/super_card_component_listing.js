// @flow

import styled from 'styled-components';
import {View} from 'react-native';
import {Card} from 'react-native-paper';

import {rh, rw, rbr} from '../../../utils/responsive';

const CardContainer = styled(Card)`
  width: ${props => rw(props.width)}px;
  flex-direction: row;
  background: ${props => props.theme.backgroundCard};
  border-radius: ${props => rbr(props.borderRadius)}px;
  elevation: ${props => props.elevation};
`;

const CardCover = styled(View)`
  width: ${props => rw(props.width)}px;
  height: ${props => rw(props.height)}px;
  align-self: flex-start;
`;

const TopLeft = styled(View)`
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
  padding: ${rw(8)}px;
  min-width: ${props => rw(props.minWidth)}px;
  flex: 1;
`;

const CenterCenter = styled(View)`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const CardContent = styled(View)`
  justify-content: space-between;
  width: ${props => rw(props.width)}px;
  padding-top: ${rh(0)}px;
  padding-left: ${rw(12)}px;
  padding-right: ${rw(12)}px;
  padding-bottom: ${props => rh(props.paddingBottom)}px;
`;

const Row = styled(View)`
  flex-direction: row;
`;

const AttributeCard = styled(View)``;

export {
  CardContainer,
  CardCover,
  TopLeft,
  CenterCenter,
  CardContent,
  Row,
  AttributeCard
};
