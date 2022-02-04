import React, {
  useEffect,
  FC,
  useRef,
  MutableRefObject,
  ChangeEvent,
  KeyboardEvent,
  FocusEvent,
  useMemo,
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
  isFetching: boolean;
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
  isFetching,
}: ListItemProps) => {
  const refInput = useRef() as MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    if (editID === todo.id && refInput.current) {
      refInput.current.focus();
    }
  }, [editID, todo]);

  const listItemClasses = useMemo(() => {
    if (isFetching) {
      return 'todo-list__item todo-list__item-disabled';
    }

    return 'todo-list__item';
  }, [isFetching]);

  const deleteButtonClasses = useMemo(() => {
    if (isFetching) {
      return 'todo-list__item-button-delete todo-list__item-button-delete-disabled';
    }

    return 'todo-list__item-button-delete';
  }, [isFetching]);

  const editButtonClasses = useMemo(() => {
    if (isFetching) {
      return 'todo-list__item-button-edit todo-list__item-button-edit-disabled';
    }

    return 'todo-list__item-button-edit';
  }, [isFetching]);

  return (
    <li className={listItemClasses}>
      {editID !== todo.id && (
        <>
          <p className="todo-list__item-content" title={todo.text}>
            {todo.text}
          </p>
          <span className="todo-list__item-buttons-wrap">
            <Button
              customText="Edit"
              buttonClass={editButtonClasses}
              onClick={setEditId(todo)}
              disabled={isFetching}
            />
            <Button
              customText="Delete"
              buttonClass={deleteButtonClasses}
              onClick={deleteTodo(todo.id)}
              disabled={isFetching}
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
