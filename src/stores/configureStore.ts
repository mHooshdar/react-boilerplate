// node_modules
import { Store, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
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

export default function configureStore(
  history: History,
  initialState: RootState,
): Store<RootState> {
  const composeEnhancers = composeWithDevTools({});
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    createRootReducer(history),
    initialState,
    composeEnhancers(applyMiddleware(sagaMiddleware, logger)),
  );
  sagaMiddleware.run(rootSaga);
  return store;
}
