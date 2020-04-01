// @flow

import styled from 'styled-components';
import {View} from 'react-native';
import {Card} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';

import {rbr} from '../../../../utils/responsive';

const CardCover = styled(Card.Cover)`
  width: 100%;
  height: 100%;
  border-top-left-radius: ${props => rbr(props.borderTopLeftRadius || 0)}px;
  border-top-right-radius: ${props => rbr(props.borderTopRightRadius || 0)}px;
  border-bottom-left-radius: ${props =>
    rbr(props.borderBottomLeftRadius || 0)}px;
  border-bottom-right-radius: ${props =>
    rbr(props.borderBottomRightRadius || 0)}px;
`;

const CardCoverContainer = styled(LinearGradient)`
  width: 100%;
  height: 100%;
  border-top-left-radius: ${props => rbr(props.borderTopLeftRadius || 0)}px;
  border-top-right-radius: ${props => rbr(props.borderTopRightRadius || 0)}px;
  border-bottom-left-radius: ${props =>
    rbr(props.borderBottomLeftRadius || 0)}px;
  border-bottom-right-radius: ${props =>
    rbr(props.borderBottomRightRadius || 0)}px;
  position: absolute;
  z-index: 10;
`;

const CardCoverRow = styled(View)`
  flex: 1;
  flex-direction: row;
`;

const CardCoverColumn = styled(View)`
  flex: 1;
  flex-direction: column;
`;

export {CardCover, CardCoverContainer, CardCoverRow, CardCoverColumn};
