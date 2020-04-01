// @flow

import styled from 'styled-components';
import {View} from 'react-native';
import {Card} from 'react-native-paper';

import {rh, rw, rbr} from '../../../utils/responsive';

const CardContainer = styled(Card)`
  width: ${props => rw(props.width)}px;
  background: ${props => props.theme.backgroundCard};
  border-radius: ${props => rbr(props.borderRadius)}px;
  elevation: ${props => props.elevation};
`;

const CardCover = styled(View)`
  width: 100%;
  height: ${props => rh(props.height)}px;
  align-self: center;
`;

const IconBanner = styled(View)`
  margin-right: ${props => rw(props.marginRight ? 8 : 0)}px;
`;

const TopRight = styled(View)`
  justify-content: flex-end;
  align-items: flex-start;
  flex-direction: row;
  padding: ${rw(8)}px;
`;

const CenterCenter = styled(View)`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const BottomLeft = styled(View)`
  justify-content: flex-end;
  align-items: flex-start;
  min-width: ${props => rw(props.minWidth)}px;
  flex: 1;
  padding-left: ${rw(12)}px;
`;

const CardContent = styled(View)`
  padding-top: ${rh(0)}px;
  padding-left: ${rw(12)}px;
  padding-right: ${rw(12)}px;
  padding-bottom: ${rh(12)}px;
`;

export {
  CardContainer,
  CardCover,
  IconBanner,
  TopRight,
  CenterCenter,
  BottomLeft,
  CardContent
};
