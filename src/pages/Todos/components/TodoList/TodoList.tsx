import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../store/rootReducer';
import TodoListItem from '../TodoListItem';
import { ListItem } from '../../types';
import {
  todosDeleteAsyncAction,
  todosUpdateAsyncAction,
} from '../../redux/actions';
import './TodoList.scss';

export const TodoList: React.FC = () => {
  const dispatch = useDispatch();
  const list = useSelector((state: RootState) => state.todos.data);

  const [editID, setEditId] = useState('');
  const [textValue, setTextValue] = useState('');

  const handleSetEditId = useCallback(
    (todo: ListItem) => () => {
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
      dispatch(todosDeleteAsyncAction(id));
    },
    [dispatch, todosDeleteAsyncAction]
  );

  const handleKeyPressInput = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      const editTodo = list.find((el) => el.id === editID);
      const isUpdate =
        e.key === 'Enter' &&
        textValue.length &&
        textValue !== (editTodo as ListItem).text;

      if (isUpdate) {
        dispatch(
          todosUpdateAsyncAction({
            id: editID,
            text: textValue,
          })
        );
        handleBlurInput();
      }
    },
    [dispatch, todosUpdateAsyncAction, textValue, editID, list]
  );

  return (
    <ul className="todo-list">
      {list &&
        list.map((todo: ListItem) => (
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
          />
        ))}
    </ul>
  );
};

export default TodoList;