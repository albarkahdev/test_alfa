// @flow

import React from 'react';

import {
  CardCover,
  CardCoverContainer,
  CardCoverRow,
  CardCoverColumn
} from './components/section_cover_box_component';
import {COLORS} from '../../../utils/colors';

type SourceImage = {
  uri: string
};

type Component = {
  isBannerService?: boolean,
  isVideoBanner?: boolean,
  maskedGradient?: boolean,
  borderTopRadius?: number,
  borderLeftRadius?: number,
  borderRightRadius?: number,
  source?: SourceImage | string,
  topLeft?: React$Node,
  topCenter?: React$Node,
  topRight?: React$Node,
  centerLeft?: React$Node,
  centerCenter?: React$Node,
  centerRight?: React$Node,
  bottomLeft?: React$Node,
  bottomCenter?: React$Node,
  bottomRight?: React$Node
};

const BannerSuperCard = (props: Component) => {
  const {
    isBannerService = false,
    isVideoBanner = false,
    maskedGradient = true,
    borderTopRadius,
    borderLeftRadius,
    borderRightRadius,
    source,
    topLeft,
    topCenter,
    topRight,
    centerLeft,
    centerCenter,
    centerRight,
    bottomLeft,
    bottomCenter,
    bottomRight
  } = props;
  const borderBottomRadius = isBannerService
    ? borderTopRadius !== undefined
      ? borderTopRadius
      : borderLeftRadius
    : 0;
  const colorGradient = maskedGradient
    ? COLORS.TWENTY_PERSEN_TRANSPARENT_BLACK
    : COLORS.TRANSPARENT_BLACK;
  const locations = isVideoBanner ? [0.5, 1] : [0.1, 1];
  const colors = isVideoBanner
    ? [COLORS.HALF_TRANSPARENT_BLACK, COLORS.HALF_TRANSPARENT_BLACK]
    : [colorGradient, COLORS.TRANSPARENT_BLACK];
  const borderTopLeftRadius =
    borderTopRadius !== undefined ? borderTopRadius : borderLeftRadius;
  const borderTopRightRadius =
    borderTopRadius !== undefined ? borderTopRadius : borderRightRadius;
  const borderBottomLeftRadius =
    borderBottomRadius !== 0 ? borderBottomRadius : borderLeftRadius;
  const borderBottomRightRadius =
    borderBottomRadius !== 0 ? borderBottomRadius : borderRightRadius;
  if (!source) {
    return null;
  }
  return (
    <>
      <CardCover
        borderTopLeftRadius={borderTopLeftRadius}
        borderTopRightRadius={borderTopRightRadius}
        borderBottomLeftRadius={borderBottomLeftRadius}
        borderBottomRightRadius={borderBottomRightRadius}
        source={source}
      />
      <CardCoverContainer
        borderTopLeftRadius={borderTopLeftRadius}
        borderTopRightRadius={borderTopRightRadius}
        borderBottomLeftRadius={borderBottomLeftRadius}
        borderBottomRightRadius={borderBottomRightRadius}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        locations={locations}
        colors={colors}>
        <CardCoverRow>
          <CardCoverColumn>{topLeft}</CardCoverColumn>
          <CardCoverColumn>{topCenter}</CardCoverColumn>
          <CardCoverColumn>{topRight}</CardCoverColumn>
        </CardCoverRow>
        <CardCoverRow>
          <CardCoverColumn>{centerLeft}</CardCoverColumn>
          <CardCoverColumn>{centerCenter}</CardCoverColumn>
          <CardCoverColumn>{centerRight}</CardCoverColumn>
        </CardCoverRow>
        <CardCoverRow>
          <CardCoverColumn>{bottomLeft}</CardCoverColumn>
          <CardCoverColumn>{bottomCenter}</CardCoverColumn>
          <CardCoverColumn>{bottomRight}</CardCoverColumn>
        </CardCoverRow>
      </CardCoverContainer>
    </>
  );
};

export {BannerSuperCard};
