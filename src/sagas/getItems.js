import { call, put, takeEvery } from 'redux-saga/effects';
import { GET_ITEMS, LOAD_ITEMS } from '../actions/todo';
import getItems from '../api';

function* action() {
  const items = yield call(getItems, []);
  yield put({ type: LOAD_ITEMS, items });
}

export default function* () {
  yield takeEvery(GET_ITEMS, action);
}
