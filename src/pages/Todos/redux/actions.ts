import {
  TodosActionTypes,
  Todo,
  Todos,
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS,
  GET_TODOS_FAILURE,
  ErrorHttpAction,
  DELETE_TODO_REQUEST,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_FAILURE,
  UPDATE_TODO_REQUEST,
  UPDATE_TODO_SUCCESS,
  UPDATE_TODO_FAILURE,
  CREATE_TODO_REQUEST,
  CREATE_TODO_SUCCESS,
  CREATE_TODO_FAILURE,
} from '../types';

export function deleteTodoAsyncAction(id: string): TodosActionTypes {
  return {
    type: DELETE_TODO_REQUEST,
    payload: { id },
  };
}

export function deleteTodoSuccessAction(payload: Todos): TodosActionTypes {
  return {
    type: DELETE_TODO_SUCCESS,
    payload,
  };
}

export function deleteTodoFailureAction(
  payload: ErrorHttpAction
): TodosActionTypes {
  return {
    type: DELETE_TODO_FAILURE,
    payload,
  };
}

export function updateTodoAsyncAction(payload: Todo): TodosActionTypes {
  return {
    type: UPDATE_TODO_REQUEST,
    payload,
  };
}

export function updateTodoSuccessAction(payload: Todos): TodosActionTypes {
  return {
    type: UPDATE_TODO_SUCCESS,
    payload,
  };
}

export function updateTodoFailureAction(
  payload: ErrorHttpAction
): TodosActionTypes {
  return {
    type: UPDATE_TODO_FAILURE,
    payload,
  };
}

export function createTodoAsyncAction(payload: Todo): TodosActionTypes {
  return {
    type: CREATE_TODO_REQUEST,
    payload,
  };
}

export function createTodoSuccessAction(payload: Todos): TodosActionTypes {
  return {
    type: CREATE_TODO_SUCCESS,
    payload,
  };
}

export function createTodoFailureAction(
  payload: ErrorHttpAction
): TodosActionTypes {
  return {
    type: CREATE_TODO_FAILURE,
    payload,
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
