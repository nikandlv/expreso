import {
  configureStore,
  getDefaultMiddleware,
  combineReducers
} from "@reduxjs/toolkit";
import ApplicationSaga from "./Containers/Application/Saga";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import ApplicationSlice from "./Containers/Application/Slice";
import { progressReducer } from "redux-saga-tools";

const containers = [ApplicationSlice];
const reducers = {};
containers.forEach(container => (reducers[container.name] = container.reducer));

function* sagas() {
  yield all([...ApplicationSaga]);
}

// configure middleware
const sagaMiddleware = createSagaMiddleware();

const Store = configureStore({
  reducer: combineReducers(reducers),
  middleware: [sagaMiddleware, ...getDefaultMiddleware()]
});

export default Store;
sagaMiddleware.run(sagas);

Store.dispatch(ApplicationSlice.actions.decrement());
Store.dispatch(ApplicationSlice.actions.decrement());
Store.dispatch(ApplicationSlice.actions.decrement());
