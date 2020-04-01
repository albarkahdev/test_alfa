// @flow

import axios from 'axios';

import {
  REQUEST_BANNER,
  REQUEST_BANNER_SUCCESS,
  REQUEST_BANNER_FAIL
} from '../../redux/constants';

const reqBanner = () => async (dispatch: DispatchProp) => {
  dispatch({type: REQUEST_BANNER});

  try {
    let response = await axios.get(
      'https://my-json-server.typicode.com/UADACID/fake-api/banner'
    );

    if (response?.status === 200) {
      dispatch({
        type: REQUEST_BANNER_SUCCESS,
        payload: response?.data
      });
    } else {
      dispatch({
        type: REQUEST_BANNER_FAIL
      });
    }
  } catch (error) {
    dispatch({type: REQUEST_BANNER_FAIL});
  }
};

export {reqBanner};
