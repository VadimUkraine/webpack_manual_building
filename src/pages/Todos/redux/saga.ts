import { select, delay, put, takeLatest } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';
import {
  GET_TODOS_REQUEST,
  DELETE_TODO_REQUEST,
  Todo,
  DeleteTodoAsyncAction,
  UPDATE_TODO_REQUEST,
  UpdateTodoAsyncAction,
  CREATE_TODO_REQUEST,
  CreateTodoAsyncAction,
} from '../types';

import {
  getTodosSuccessAction,
  getTodosFailureAction,
  deleteTodoSuccessAction,
  deleteTodoFailureAction,
  updateTodoSuccessAction,
  updateTodoFailureAction,
  createTodoSuccessAction,
  createTodoFailureAction,
} from './actions';

import { getTodos } from './selectors';

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
    yield put(getTodosFailureAction((err as Error).message));
  }
}

function* deleteTodoSagaAsync(action: DeleteTodoAsyncAction): SagaIterator {
  try {
    yield delay(1000);

    const { id } = action.payload;
    const list = yield select(getTodos);

    yield put(
      deleteTodoSuccessAction(list.filter((item: Todo) => item.id !== id))
    );
  } catch (err) {
    yield put(deleteTodoFailureAction((err as Error).message));
  }
}

function* updateTodoSagaAsync(action: UpdateTodoAsyncAction): SagaIterator {
  try {
    yield delay(1000);

    const { id, text } = action.payload;
    const list = yield select(getTodos);
    const index = list.findIndex((el: Todo) => el.id === id);
    list[index].text = text;

    yield put(updateTodoSuccessAction(list));
  } catch (err) {
    yield put(updateTodoFailureAction((err as Error).message));
  }
}

function* createTodoSagaAsync(action: CreateTodoAsyncAction): SagaIterator {
  try {
    yield delay(1000);

    const list = yield select(getTodos);
    const newList = [...list, action.payload];

    yield put(createTodoSuccessAction(newList));
  } catch (err) {
    yield put(createTodoFailureAction((err as Error).message));
  }
}

export function* todoSagaWatcher(): SagaIterator {
  yield takeLatest(GET_TODOS_REQUEST, getTodosSagaAsync);
  yield takeLatest(DELETE_TODO_REQUEST, deleteTodoSagaAsync);
  yield takeLatest(UPDATE_TODO_REQUEST, updateTodoSagaAsync);
  yield takeLatest(CREATE_TODO_REQUEST, createTodoSagaAsync);
}
