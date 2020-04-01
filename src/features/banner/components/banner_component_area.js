// @flow

import styled from 'styled-components';

import Card from '../../../components/card/component_card';
import {rw, rh, rbr} from '../../../utils/responsive';

const BannerArea = styled.View`
  width: ${props => props.width}px;
  height: ${rh(230)}px;
  margin-top: ${rh(32)}px;
  z-index: 10;
`;

const BannerSpace = styled(Card)`
  margin-horizontal: ${rw(16)}px;
`;

const BannerImage = styled.Image`
  resize-mode: cover;
  width: ${props => props.width - 32}px;
  height: ${rh(192)}px;
  border-radius: ${rbr(8)}px;
`;

export {BannerArea, BannerSpace, BannerImage};
