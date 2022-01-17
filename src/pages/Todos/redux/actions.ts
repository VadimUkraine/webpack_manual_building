import {
  TodosActionTypes,
  TODOS_DELETE_ASYNC,
  TODOS_UPDATE_ASYNC,
  Todo,
  Todos,
  TODOS_CREATE_ASYNC,
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS,
  GET_TODOS_FAILURE,
  ErrorHttpAction,
} from '../types';

export function todosDeleteAsyncAction(id: string): TodosActionTypes {
  return {
    type: TODOS_DELETE_ASYNC,
    payload: { id },
  };
}

export function todosUpdateAsyncAction(todo: Todo): TodosActionTypes {
  return {
    type: TODOS_UPDATE_ASYNC,
    payload: { todo },
  };
}

export function todosCreateAsyncAction(todo: Todo): TodosActionTypes {
  return {
    type: TODOS_CREATE_ASYNC,
    payload: { todo },
  };
}

export function getTodosAsyncAction(): TodosActionTypes {
  return {
    type: GET_TODOS_REQUEST,
  };
}

export function getTodosSuccessAction(payload: Todos): TodosActionTypes {
  return {
    type: GET_TODOS_SUCCESS,
    payload,
  };
}

export function getTodosFailureAction(
  payload: ErrorHttpAction
): TodosActionTypes {
  return {
    type: GET_TODOS_FAILURE,
    payload,
  };
}
