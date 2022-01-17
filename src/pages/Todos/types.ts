export type ListItem = {
  id: string;
  text: string;
};

// Async
export const TODOS_DELETE_ASYNC = 'TODOS_DELETE_ASYNC';
export type TodosDeleteAsyncAction = {
  type: typeof TODOS_DELETE_ASYNC;
  payload: { id: string };
};

export const TODOS_UPDATE_ASYNC = 'TODOS_UPDATE_ASYNC';
export type TodosUpdateAsyncAction = {
  type: typeof TODOS_UPDATE_ASYNC;
  payload: { todo: ListItem };
};

export const TODOS_CREATE_ASYNC = 'TODOS_CREATE_ASYNC';
export type TodosCreateAsyncAction = {
  type: typeof TODOS_CREATE_ASYNC;
  payload: { todo: ListItem };
};

export type TodosActionTypes =
  | TodosDeleteAsyncAction
  | TodosUpdateAsyncAction
  | TodosCreateAsyncAction;
