// @flow

import styled from 'styled-components';
import {COLORS} from '../../../utils/colors';
import {rw, rh, rbr} from '../../../utils/responsive';

const Container = styled.View`
  flex: 1;
  background: ${props => props.theme.background};
`;

const HeaderScreen = styled.View`
  padding: ${rw(16)}px;
  flex-direction: row;
  align-items: center;
`;

const IconProfile = styled.Image`
  width: ${rw(30)}px;
  height: ${rw(30)}px;
  margin-right: ${rw(24)}px;
`;

const ContainerSuperCard = styled.View`
  padding: ${rh(6)}px ${rw(16)}px;
  align-self: center;
`;

const ContainerList = styled.View`
  margin: ${rh(6)}px ${rw(16)}px;
  padding: ${rw(16)}px;
  border-color: ${COLORS.GRAY};
  border-width: 1px;
  border-radius: ${rbr(8)}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export {
  Container,
  HeaderScreen,
  IconProfile,
  ContainerSuperCard,
  ContainerList
};
