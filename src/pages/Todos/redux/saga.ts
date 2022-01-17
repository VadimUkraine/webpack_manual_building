import { delay, put, takeLatest } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';
import { GET_TODOS_REQUEST } from '../types';

import { getTodosSuccessAction, getTodosFailureAction } from './actions';

function* getTodosSagaAsync(): SagaIterator {
  try {
    yield delay(1000);

    const list = [
      {
        id: '123-sd',
        text: 'lectrum forever',
      },
      {
        id: 'dsfd-123-sd',
        text: 'No, only you',
      },
      {
        id: '123-sd-jfhsldf',
        text: 'forever you',
      },
    ];

    yield put(getTodosSuccessAction(list));
  } catch (err) {
    console.warn(err);
    yield put(getTodosFailureAction(err.message));
  }
}

export function* todoSagaWatcher(): SagaIterator {
  yield takeLatest(GET_TODOS_REQUEST, getTodosSagaAsync);
}
