import React, { useState, FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../../../elements/Button';
import TextInput from '../../../../elements/TextInput';
import { todosCreateAsyncAction } from '../../redux/actions';
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
      if (e.key === 'Enter' && textValue.length) {
        dispatch(
          todosCreateAsyncAction({
            text: textValue,
            id: `${textValue}${Math.random()}`,
          })
        );
        setTextValue('');
      }
    },
    [setTextValue, textValue, dispatch, todosCreateAsyncAction]
  );

  const handleAddTodo = useCallback(() => {
    if (textValue.length) {
      dispatch(
        todosCreateAsyncAction({
          text: textValue,
          id: `${textValue}${Math.random()}`,
        })
      );
    }
    setTextValue('');
  }, [setTextValue, textValue, dispatch, todosCreateAsyncAction]);

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
        type="button"
        buttonClass="primary"
        onClick={handleAddTodo}
      />
    </form>
  );
};
