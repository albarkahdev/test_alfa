// @flow

import React, {useEffect} from 'react';
import {withTheme} from 'react-native-paper';

import {Container} from './home_screen_styles';
import {WIDTH} from '../../../utils/helpers';
import {BackgroundHome} from '../components/home_component_background';
import BannerComponent from '../../banner/components/banner_component';
import EventList from '../../event/components/event_component_list';
import ArticleList from '../../article/components/article_component_list';

// loadingBanner: state?.banner_store?.loadingBanner,
// errorBanner: state?.banner_store?.errorBanner,
// banners: state?.banner_store?.data

const Home = props => {
  const {
    theme: {fonts},
    getBanner,
    loadingBanner,
    errorBanner,
    banners
  } = props;
  useEffect(() => {
    getBanner();
  }, []);

  return (
    <Container>
      <BackgroundHome width={WIDTH} />
      <BannerComponent
        loading={loadingBanner}
        error={errorBanner}
        data={banners}
      />
      <EventList />
      <ArticleList />
    </Container>
  );
};

export default withTheme(Home);
