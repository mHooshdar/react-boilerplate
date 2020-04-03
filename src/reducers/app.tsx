// node_modules
import { Reducer } from 'redux';
// models
import { AppState } from '@models/states';
// types
import { AppActionTypes } from '@actions/app';

const initialState = {
  test: false,
};

const reducer: Reducer<AppState> = (state = initialState, action) => {
  switch (action.type) {
    case AppActionTypes.ENABLE_TEST:
      return {
        ...state,
        test: true,
      };
    case AppActionTypes.DISABLE_TEST:
      return {
        ...state,
        test: false,
      };
    default:
      return state;
  }
};

export default reducer;
