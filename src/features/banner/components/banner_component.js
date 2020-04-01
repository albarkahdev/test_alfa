// @flow

import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import {ActivityIndicator} from 'react-native-paper';

import {styles} from './banner_component_styles';
import {BannerItem} from './banner_component_item';

const imageBanner =
  'https://image.freepik.com/free-vector/professional-website-banner-with-red-shapes_1361-1532.jpg';

const banners = [
  {
    key: 'banner 1',
    image: imageBanner
  },
  {
    key: 'banner 2',
    image: imageBanner
  },
  {
    key: 'banner 3',
    image: imageBanner
  }
];

export default ({loading, error, data}) => {
  if (loading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return null;
  }

  return (
    <AppIntroSlider
      renderItem={BannerItem}
      slides={data}
      paginationStyle={styles.pagination_dot}
      activeDotStyle={styles.active_dot}
      dotStyle={styles.inactive_dot}
      showNextButton={false}
      showDoneButton={false}
    />
  );
};
