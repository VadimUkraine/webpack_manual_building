export type Todo = {
  id: string;
  text: string;
};

export type Todos = Todo[];

export type ErrorHttpAction = string;

// Async
export const TODOS_DELETE_ASYNC = 'TODOS_DELETE_ASYNC';
export type TodosDeleteAsyncAction = {
  type: typeof TODOS_DELETE_ASYNC;
  payload: { id: string };
};

export const TODOS_UPDATE_ASYNC = 'TODOS_UPDATE_ASYNC';
export type TodosUpdateAsyncAction = {
  type: typeof TODOS_UPDATE_ASYNC;
  payload: { todo: Todo };
};

export const TODOS_CREATE_ASYNC = 'TODOS_CREATE_ASYNC';
export type TodosCreateAsyncAction = {
  type: typeof TODOS_CREATE_ASYNC;
  payload: { todo: Todo };
};

export const GET_TODOS_REQUEST = 'GET_TODOS_REQUEST';
export type GetTodosAsyncAction = {
  type: typeof GET_TODOS_REQUEST;
};

export const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS';
export type GetTodosSuccessAction = {
  type: typeof GET_TODOS_SUCCESS;
  payload: Todos;
};

export const GET_TODOS_FAILURE = 'GET_TODOS_FAILURE';
export type GetTodosFailureAction = {
  type: typeof GET_TODOS_FAILURE;
  payload: ErrorHttpAction;
};

export type TodosActionTypes =
  | TodosDeleteAsyncAction
  | TodosUpdateAsyncAction
  | TodosCreateAsyncAction
  | GetTodosAsyncAction
  | GetTodosSuccessAction
  | GetTodosFailureAction;
