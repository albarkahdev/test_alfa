// @flow

type InitialState = {
  value: boolean
};

type Action = {
  type: string,
  payload: boolean
};

const initialState: InitialState = {
  value: false
};

export const event_store = (
  state: InitialState = initialState,
  action: Action
) => {
  switch (action.type) {
    default:
      return {...state};
  }
};
