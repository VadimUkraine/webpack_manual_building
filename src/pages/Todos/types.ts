export type Todo = {
  id: string;
  text: string;
};

export type Todos = Todo[];

export type ErrorHttpAction = string;

// Async
export const DELETE_TODO_REQUEST = 'DELETE_TODO_REQUEST';
export type DeleteTodoAsyncAction = {
  type: typeof DELETE_TODO_REQUEST;
  payload: { id: string };
};

export const DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS';
export type DeleteTodoSuccessAction = {
  type: typeof DELETE_TODO_SUCCESS;
  payload: Todos;
};

export const DELETE_TODO_FAILURE = 'DELETE_TODO_FAILURE';
export type DeleteTodoFailureAction = {
  type: typeof DELETE_TODO_FAILURE;
  payload: ErrorHttpAction;
};

export const UPDATE_TODO_REQUEST = 'UPDATE_TODO_REQUEST';
export type UpdateTodoAsyncAction = {
  type: typeof UPDATE_TODO_REQUEST;
  payload: Todo;
};

export const UPDATE_TODO_SUCCESS = 'UPDATE_TODO_SUCCESS';
export type UpdateTodoSuccessAction = {
  type: typeof UPDATE_TODO_SUCCESS;
  payload: Todos;
};

export const UPDATE_TODO_FAILURE = 'UPDATE_TODO_FAILURE';
export type UpdateTodoFailureAction = {
  type: typeof UPDATE_TODO_FAILURE;
  payload: ErrorHttpAction;
};

export const CREATE_TODO_REQUEST = 'CREATE_TODO_REQUEST';
export type CreateTodoAsyncAction = {
  type: typeof CREATE_TODO_REQUEST;
  payload: Todo;
};

export const CREATE_TODO_SUCCESS = 'CREATE_TODO_SUCCESS';
export type CreateTodoSuccessAction = {
  type: typeof CREATE_TODO_SUCCESS;
  payload: Todos;
};

export const CREATE_TODO_FAILURE = 'CREATE_TODO_FAILURE';
export type CreateTodoFailureAction = {
  type: typeof CREATE_TODO_FAILURE;
  payload: ErrorHttpAction;
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
  | GetTodosAsyncAction
  | GetTodosSuccessAction
  | GetTodosFailureAction
  | DeleteTodoAsyncAction
  | DeleteTodoSuccessAction
  | DeleteTodoFailureAction
  | UpdateTodoAsyncAction
  | UpdateTodoSuccessAction
  | UpdateTodoFailureAction
  | CreateTodoAsyncAction
  | CreateTodoSuccessAction
  | CreateTodoFailureAction;
