import React, { useState, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../store/rootReducer';
import TodoListItem from '../TodoListItem';
import { Todo } from '../../types';
import {
  deleteTodoAsyncAction,
  updateTodoAsyncAction,
} from '../../redux/actions';
import './TodoList.scss';

export const TodoList: React.FC = () => {
  const dispatch = useDispatch();
  const list = useSelector((state: RootState) => state.todos.data);
  const isFetching = useSelector((state: RootState) => state.todos.isFetching);
  const fetchingError = useSelector((state: RootState) => state.todos.error);

  const loadingText = useMemo(() => {
    if (isFetching && !fetchingError) {
      return 'Data is updating ...';
    }

    if (!isFetching && fetchingError) {
      return fetchingError;
    }

    return null;
  }, [isFetching, fetchingError]);

  const [editID, setEditId] = useState('');
  const [textValue, setTextValue] = useState('');

  const handleSetEditId = useCallback(
    (todo: Todo) => () => {
      setEditId(todo.id);
      setTextValue(todo.text);
    },
    [setEditId, setTextValue]
  );

  const handleChangeTextInput = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setTextValue(event.target.value);
    },
    [setTextValue]
  );

  const handleBlurInput = useCallback(() => {
    setEditId('');
  }, [setEditId]);

  const handleDelete = useCallback(
    (id: string) => () => {
      dispatch(deleteTodoAsyncAction(id));
    },
    [dispatch, deleteTodoAsyncAction]
  );

  const handleKeyPressInput = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      const editTodo = list.find((el) => el.id === editID);
      const isUpdate =
        e.key === 'Enter' &&
        textValue.trim().length &&
        textValue !== (editTodo as Todo).text;

      if (isUpdate) {
        dispatch(
          updateTodoAsyncAction({
            id: editID,
            text: textValue,
          })
        );
        handleBlurInput();
      }
    },
    [dispatch, updateTodoAsyncAction, textValue, editID]
  );

  return (
    <>
      <div className="loading-data">{loadingText}</div>
      {!list.length && (
        <p className="todo-list__no-data">Please add todo item</p>
      )}
      <ul className="todo-list">
        {list &&
          list.map((todo: Todo) => (
            <TodoListItem
              key={todo.id}
              todo={todo}
              editID={editID}
              deleteTodo={handleDelete}
              setEditId={handleSetEditId}
              handleChangeTextInput={handleChangeTextInput}
              handleKeyPressInput={handleKeyPressInput}
              handleBlurInput={handleBlurInput}
              textValue={textValue}
              isFetching={isFetching}
            />
          ))}
      </ul>
    </>
  );
};

export default TodoList;
