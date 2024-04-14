import { all } from "redux-saga/effects";
import { getUserSaga } from "./UserSaga.js";

export function* rootSaga() {
  yield all([
    // Xử lý user
    getUserSaga(),
  ]);
}
