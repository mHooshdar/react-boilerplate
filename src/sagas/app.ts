// node_modules
import {
  all, call, put, takeEvery,
} from 'redux-saga/effects';
// actions
import { AppActionTypes, enableTest, disableTest } from '@actions/app';
import { ReduxAction } from '@models/action';
// apis
import appApi from '@apis/app';

export function* workerEnableTest({ payload }: ReduxAction) {
  try {
    yield call(appApi.enableTest, payload);
    yield put(enableTest(payload.payload));
    if (payload.onSuccessCallback) payload.onSuccessCallback();
  } catch (err) {
    // err
  }
}

export function* workerDisableTest({ payload }: ReduxAction) {
  try {
    const res = yield call(appApi.disableTest, payload);
    yield put(disableTest(res));
    payload.onSuccessCallback && payload.onSuccessCallback();
  } catch (err) {
    // err
  }
}

// wathcer
function* testSaga() {
  yield all([
    yield takeEvery(AppActionTypes.ENABLE_TEST, workerEnableTest),
    yield takeEvery(AppActionTypes.DISABLE_TEST, workerDisableTest),
  ]);
}

export default testSaga;
