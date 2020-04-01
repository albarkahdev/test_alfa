// @flow

import {connect} from 'react-redux';

import SignInScreen from './auth_screen_sign_in';
import {signIn} from '../auth_actions';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  signIn: (value: string) => dispatch(signIn(value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInScreen);
