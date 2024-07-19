import { all } from "redux-saga/effects";
import watchAsyncData from "./fetchersSaga";

export function* rootSaga() {
    yield all([watchAsyncData()])
}