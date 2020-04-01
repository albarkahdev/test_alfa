// @flow

import React from 'react';

import SuperCardFullWidth from './super_card_full-width';

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
  iconBanner2?: React$Node,
  category?: string,
  title?: string,
  description?: string,
  leftDescription?: string,
  rightDescription?: string,
  tags?: Array<Tag>,
  iconAction1?: React$Node,
  iconAction2?: React$Node,
  action1?: string,
  action2?: string
};

const SuperCardFullWidthArticle = (props: Props) => {
  const {
    elevation = 3,
    borderRadius = 8,
    source,
    iconBanner1,
    iconBanner2,
    category,
    title,
    description,
    leftDescription,
    rightDescription,
    tags,
    iconAction1,
    iconAction2,
    action1,
    action2
  } = props;
  return (
    <SuperCardFullWidth
      isVideoBanner={false}
      elevation={elevation}
      borderRadius={borderRadius}
      source={source}
      iconBanner1={iconBanner1}
      iconBanner2={iconBanner2}
      category={category}
      title={title}
      description={description}
      leftDescription={leftDescription}
      rightDescription={rightDescription}
      tags={tags}
      iconAction1={iconAction1}
      iconAction2={iconAction2}
      action1={action1}
      action2={action2}
    />
  );
};

export default SuperCardFullWidthArticle;
