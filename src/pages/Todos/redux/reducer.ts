import {
  TodosActionTypes,
  TODOS_DELETE_ASYNC,
  TODOS_UPDATE_ASYNC,
  TODOS_CREATE_ASYNC,
  ListItem,
} from '../types';

export type TodosState = {
  data: ListItem[];
  isFetching: boolean;
  error: false;
};

const initialState: TodosState = {
  data: [
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
  ],
  isFetching: false,
  error: false,
};

export const todosReducer = (
  state = initialState,
  action: TodosActionTypes
): TodosState => {
  switch (action.type) {
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
