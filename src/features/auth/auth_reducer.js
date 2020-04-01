// @flow

import {REQUEST_SIGNIN, REQUEST_SIGNOUT} from '../../redux/constants';

type InitialState = {
  token: string
};

type Action = {
  type: string,
  payload: string
};

const initialState: InitialState = {
  token: ''
};

export const auth_store = (
  state: InitialState = initialState,
  action: Action
) => {
  switch (action.type) {
    case REQUEST_SIGNIN:
      return {
        ...state,
        token: action.payload
      };
    case REQUEST_SIGNOUT:
      return initialState;
    default:
      return {...state};
  }
};
