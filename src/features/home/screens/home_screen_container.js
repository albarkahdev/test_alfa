// @flow

import {connect} from 'react-redux';

import HomeScreen from './home_screen';
import {reqBanner} from '../../banner/banner_action';

const mapStateToProps = state => ({
  loadingBanner: state?.banner_store?.loadingBanner,
  errorBanner: state?.banner_store?.errorBanner,
  banners: state?.banner_store?.data
});

const mapDispatchToProps = dispatch => ({
  getBanner: () => dispatch(reqBanner())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
