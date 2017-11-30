import changeTextSaga from './changeText';
import getItemsSaga from './getItems';

const sagas = [
  changeTextSaga(),
  getItemsSaga(),
];

export default function* () {
  yield [
    ...sagas,
  ];
}
