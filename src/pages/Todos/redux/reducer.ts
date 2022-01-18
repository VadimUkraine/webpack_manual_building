import {
  TodosActionTypes,
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

export type TodosState = {
  data: Todos;
  isFetching: boolean;
  error: false | ErrorHttpAction;
};

const initialState: TodosState = {
  data: [],
  isFetching: false,
  error: false,
};

export const todosReducer = (
  state = initialState,
  action: TodosActionTypes
): TodosState => {
  switch (action.type) {
    case GET_TODOS_SUCCESS:
    case DELETE_TODO_SUCCESS:
    case UPDATE_TODO_SUCCESS:
    case CREATE_TODO_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isFetching: false,
      };
    case GET_TODOS_FAILURE:
    case DELETE_TODO_FAILURE:
    case UPDATE_TODO_FAILURE:
    case CREATE_TODO_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case GET_TODOS_REQUEST:
    case DELETE_TODO_REQUEST:
    case UPDATE_TODO_REQUEST:
    case CREATE_TODO_REQUEST:
      return {
        ...state,
        isFetching: true,
      };

    default:
      return state;
  }
};
