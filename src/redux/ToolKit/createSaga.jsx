import { takeLatest, takeEvery, put, call } from "redux-saga/effects";
function* genericActionSaga(actionType, sagaConfig, action) {
  try {
    if (sagaConfig.processor == undefined) {
      throw new Error(
        `Saga failed: no processor function found for ${actionType}`
      );
    }
    const response = yield call(sagaConfig.processor, action.payload || {});
    if (sagaConfig.successActionType != undefined) {
      yield put({ type: sagaConfig.successActionType, payload: response });
    }
  } catch (e) {
    if (sagaConfig.failureActionType != undefined) {
      yield put({ error: e.message, type: sagaConfig.failureActionType });
    }
  }
}

export function createLatestSaga(actionType, processor) {
  return takeLatest(actionType, genericActionSaga, actionType, {
    processor,
    successActionType: `${actionType}Success`,
    failureActionType: `${actionType}Error`
  });
}

export function createEverySaga(actionType, processor) {
  return takeEvery(actionType, genericActionSaga, actionType, {
    processor,
    successActionType: `${actionType}Success`,
    failureActionType: `${actionType}Error`
  });
}
