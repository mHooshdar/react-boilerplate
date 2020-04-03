// node_modules
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
// reducers
import appReducer from '@reducers/app';

const createRootReducer = (history: History) =>
  combineReducers({
    app: appReducer,
    router: connectRouter(history),
  });

export default createRootReducer;
