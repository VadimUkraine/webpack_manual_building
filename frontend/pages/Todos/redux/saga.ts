import { delay, put, takeLatest, call } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';
import {
  GET_TODOS_REQUEST,
  DELETE_TODO_REQUEST,
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

import TodoService from './service';

function* getTodosSagaAsync(): SagaIterator {
  try {
    yield delay(500);

    const list = yield call(TodoService.getAllTodos);

    yield put(getTodosSuccessAction(list));
  } catch (err) {
    yield put(getTodosFailureAction((err as Error).message));
  }
}

function* deleteTodoSagaAsync(action: DeleteTodoAsyncAction): SagaIterator {
  try {
    yield delay(500);

    const list = yield call(TodoService.deleteTodoById, action.payload.id);

    yield put(deleteTodoSuccessAction(list));
  } catch (err) {
    yield put(deleteTodoFailureAction((err as Error).message));
  }
}

function* updateTodoSagaAsync(action: UpdateTodoAsyncAction): SagaIterator {
  try {
    yield delay(500);

    const list = yield call(TodoService.updateTodoById, action.payload);

    yield put(updateTodoSuccessAction(list));
  } catch (err) {
    yield put(updateTodoFailureAction((err as Error).message));
  }
}

function* createTodoSagaAsync(action: CreateTodoAsyncAction): SagaIterator {
  try {
    yield delay(500);

    const list = yield call(TodoService.createTodo, action.payload);

    yield put(createTodoSuccessAction(list));
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
