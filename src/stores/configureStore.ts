// node_modules
import createSagaMiddleware from 'redux-saga';
import { Store, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import { History } from 'history';
// reducers
import createRootReducer from '@reducers/index';
// models
import { RootState } from '@models/states';
// sagas
import rootSaga from '@sagas/index';

const logger = createLogger();

const configureStore = (history: History): Store<RootState> => {
  const composeEnhancers = composeWithDevTools({});
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    createRootReducer(history),
    composeEnhancers(applyMiddleware(sagaMiddleware, logger)),
  );
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
