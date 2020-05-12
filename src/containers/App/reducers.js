/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';

import { LOAD_CONFIG_SUCCESS } from './constants';

// The initial state of the App
export const initialState = {
  container: 'App',
};

const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case 'App/LOAD_CONFIG_SUCCESS':
        draft.config = action.payload;
        break;
    }
  });

export default appReducer;
