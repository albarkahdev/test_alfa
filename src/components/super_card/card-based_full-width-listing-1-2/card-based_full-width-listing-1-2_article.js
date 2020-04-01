// @flow

import React from 'react';

import SuperCardFullWidthListing_1_2 from './card-based_full-width-listing-1-2';

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

const SuperCardFullWidthListing_1_2_Article_1 = (props: Props) => {
  const {
    elevation = 3,
    borderRadius = 8,
    source,
    category,
    title,
    description,
    leftDescription,
    rightDescription
  } = props;
  return (
    <SuperCardFullWidthListing_1_2
      isVideoBanner={false}
      source={source}
      elevation={elevation}
      borderRadius={borderRadius}
      category={category}
      title={title}
      description={description}
      leftDescription={leftDescription}
      rightDescription={rightDescription}
      paddingBottom={8}
    />
  );
};

export {SuperCardFullWidthListing_1_2_Article_1};
