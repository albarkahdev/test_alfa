// @flow

import {connect} from 'react-redux';

import ProfileScreen from './profile_screen';
import {signOut} from '../../auth/auth_actions';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileScreen);
