// @flow

import {
  REQUEST_BANNER,
  REQUEST_BANNER_SUCCESS,
  REQUEST_BANNER_FAIL
} from '../../redux/constants';

type InitialState = {
  loadingBanner: boolean,
  errorBanner: boolean,
  data: Array<Object>
};

type Action = {
  type: string,
  payload: boolean
};

const initialState: InitialState = {
  loadingBanner: false,
  errorBanner: false,
  data: []
};

export const banner_store = (
  state: InitialState = initialState,
  action: Action
) => {
  switch (action.type) {
    case REQUEST_BANNER:
      return {
        ...state,
        errorBanner: false,
        loadingBanner: true
      };
    case REQUEST_BANNER_SUCCESS: {
      return {
        ...state,
        errorBanner: false,
        loadingBanner: false,
        data: action.payload
      };
    }
    case REQUEST_BANNER_FAIL: {
      return {
        ...state,
        errorBanner: true,
        loadingBanner: false
      };
    }
    default:
      return {...state};
  }
};
