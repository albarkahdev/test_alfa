// @flow

import {DispatchProp} from 'react-redux';
import {REQUEST_SIGNIN, REQUEST_SIGNOUT} from '../../redux/constants';

export const signIn = (value: string) => (dispatch: DispatchProp) =>
  dispatch({type: REQUEST_SIGNIN, payload: value});

export const signOut = () => (dispatch: DispatchProp) =>
  dispatch({type: REQUEST_SIGNOUT});
