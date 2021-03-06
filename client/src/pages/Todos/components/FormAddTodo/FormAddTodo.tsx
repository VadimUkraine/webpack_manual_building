import React, { useState, FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../../../elements/Button';
import TextInput from '../../../../elements/TextInput';
import { createTodoAsyncAction } from '../../redux/actions';
import './FormAddTodo.scss';

export const FormAddTodo: FC = () => {
  const dispatch = useDispatch();
  const [textValue, setTextValue] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleChangeTextInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setTextValue(e.target.value);
    },
    [setTextValue]
  );

  const handleKeyDownTextInput = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' && textValue.trim().length) {
        dispatch(
          createTodoAsyncAction({
            text: textValue,
            id: `${textValue}${Math.random()}`,
          })
        );
        setTextValue('');
      }
    },
    [setTextValue, textValue, dispatch, createTodoAsyncAction]
  );

  const handleAddTodo = useCallback(() => {
    if (textValue.trim().length) {
      dispatch(
        createTodoAsyncAction({
          text: textValue,
          id: `${textValue}${Math.random()}`,
        })
      );
    }
    setTextValue('');
  }, [setTextValue, textValue, dispatch, createTodoAsyncAction]);

  return (
    <form
      className="form-add-todo"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextInput
        placeholder="Add Todo Item"
        value={textValue}
        onChange={handleChangeTextInput}
        onKeyDown={handleKeyDownTextInput}
      />
      <Button
        customText="Add Todo"
        buttonClass="primary"
        onClick={handleAddTodo}
      />
    </form>
  );
};
