import { all } from 'redux-saga/effects';
import { todoSagaWatcher } from '../pages/Todos/redux/saga';

export default function* rootSaga(): Generator {
  yield all([todoSagaWatcher()]);
}
