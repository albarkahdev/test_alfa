// @flow

import React from 'react';

import SuperCardHalfWidth from './super_card_half-width';

type Source = {
  uri: string
};

type Tag = {
  name: string
};

type Props = {
  elevation?: number,
  borderRadius?: number,
  source?: Source | string,
  iconBanner1?: React$Node,
  centerBanner?: React$Node,
  category?: string,
  title?: string,
  description?: string,
  leftDescription?: string,
  tags?: Array<Tag>,
  iconAction1?: React$Node,
  action1?: string
};

const SuperCardHalfWidthMultimedia = (props: Props) => {
  const {
    elevation = 3,
    borderRadius = 8,
    source,
    iconBanner1,
    centerBanner,
    category,
    title,
    description,
    leftDescription,
    tags,
    iconAction1,
    action1
  } = props;
  return (
    <SuperCardHalfWidth
      isVideoBanner
      elevation={elevation}
      borderRadius={borderRadius}
      source={source}
      iconBanner1={iconBanner1}
      centerBanner={centerBanner}
      category={category}
      title={title}
      description={description}
      leftDescription={leftDescription}
      tags={tags}
      iconAction1={iconAction1}
      action1={action1}
    />
  );
};

export default SuperCardHalfWidthMultimedia;
