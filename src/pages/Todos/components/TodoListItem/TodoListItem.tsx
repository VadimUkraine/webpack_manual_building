import React, {
  useEffect,
  FC,
  useRef,
  MutableRefObject,
  ChangeEvent,
  KeyboardEvent,
  FocusEvent,
} from 'react';
import Button from '../../../../elements/Button';
import EditTextInput from '../../../../elements/EditTextInput';
import './TodoListItem.scss';
import { Todo } from '../../types';

type ListItemProps = {
  todo: Todo;
  editID: string;
  textValue: string;
  handleChangeTextInput: (e: ChangeEvent<HTMLInputElement>) => void;
  handleKeyPressInput: (e: KeyboardEvent<HTMLInputElement>) => void;
  handleBlurInput: (e: FocusEvent<HTMLInputElement>) => void;
  deleteTodo: (id: string) => () => void;
  setEditId: (todo: Todo) => () => void;
};

export const TodoListItem: FC<ListItemProps> = ({
  todo,
  editID,
  handleChangeTextInput,
  handleKeyPressInput,
  handleBlurInput,
  deleteTodo,
  setEditId,
  textValue,
}: ListItemProps) => {
  const refInput = useRef() as MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    if (editID === todo.id && refInput.current) {
      refInput.current.focus();
    }
  }, [editID, todo]);

  return (
    <li className="todo-list__item">
      {editID !== todo.id && (
        <>
          <p className="todo-list__item-content" title={todo.text}>
            {todo.text}
          </p>
          <span className="todo-list__item-buttons-wrap">
            <Button
              customText="Edit"
              buttonClass="todo-list__item-button-edit"
              onClick={setEditId(todo)}
            />
            <Button
              customText="Delete"
              buttonClass="todo-list__item-button-delete"
              onClick={deleteTodo(todo.id)}
            />
          </span>
        </>
      )}
      {editID === todo.id && (
        <EditTextInput
          value={textValue}
          onChange={handleChangeTextInput}
          onKeyPress={handleKeyPressInput}
          onBlur={handleBlurInput}
          id={todo.id}
          refInput={refInput}
        />
      )}
    </li>
  );
};

export default TodoListItem;
