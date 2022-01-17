import {
  TodosActionTypes,
  TODOS_DELETE_ASYNC,
  TODOS_UPDATE_ASYNC,
  TODOS_CREATE_ASYNC,
  Todos,
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS,
  GET_TODOS_FAILURE,
  ErrorHttpAction,
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
      return {
        ...state,
        data: action.payload,
        isFetching: false,
      };
    case GET_TODOS_FAILURE:
      return {
        ...state,
        data: [],
        isFetching: false,
        error: action.payload,
      };
    case GET_TODOS_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case TODOS_DELETE_ASYNC:
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.payload.id),
      };
    case TODOS_UPDATE_ASYNC:
      const { id, text } = action.payload.todo;
      const index = state.data.findIndex((el) => el.id === id);
      const newData = state.data;
      newData[index].text = text;

      return {
        ...state,
        data: newData,
      };
    case TODOS_CREATE_ASYNC:
      return {
        ...state,
        data: [...state.data, action.payload.todo],
      };
    default:
      return state;
  }
};
