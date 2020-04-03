// node_modules
import { all, AllEffect } from 'redux-saga/effects';
// import appSaga from '@sagas/app';

export default function* rootSaga(): Generator<AllEffect<never>> {
  yield all([]);
}
