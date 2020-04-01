// @flow

import React from 'react';
import {WIDTH} from '../../../utils/helpers';
import {BannerArea, BannerSpace, BannerImage} from './banner_component_area';
import Shimmer from '../../../components/shimmer/component_shimmer';

type ComponentScreen = {
  image: string
};

export const BannerItem = ({item}: {item: ComponentScreen}) => {
  return (
    <BannerArea width={WIDTH}>
      <BannerSpace width={WIDTH}>
        <Shimmer
          autoRun
          width={WIDTH - 32}
          height={192}
          borderRadius={8}
          duration={1300}
          longShimmer={5000}>
          <BannerImage width={WIDTH} source={{uri: item.cover}} />
        </Shimmer>
      </BannerSpace>
    </BannerArea>
  );
};
