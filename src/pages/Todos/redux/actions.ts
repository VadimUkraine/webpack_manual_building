import {
  TodosActionTypes,
  TODOS_DELETE_ASYNC,
  TODOS_UPDATE_ASYNC,
  ListItem,
  TODOS_CREATE_ASYNC,
} from '../types';

export function todosDeleteAsyncAction(id: string): TodosActionTypes {
  return {
    type: TODOS_DELETE_ASYNC,
    payload: { id },
  };
}

export function todosUpdateAsyncAction(todo: ListItem): TodosActionTypes {
  return {
    type: TODOS_UPDATE_ASYNC,
    payload: { todo },
  };
}

export function todosCreateAsyncAction(todo: ListItem): TodosActionTypes {
  return {
    type: TODOS_CREATE_ASYNC,
    payload: { todo },
  };
}
