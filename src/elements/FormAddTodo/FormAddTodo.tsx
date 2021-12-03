import React, { useState, FC, ReactElement, useCallback } from 'react';
import Button from '../Button';
import TextInput from '../TextInput';
import './FormAddTodo.scss';

export const FormAddTodo: FC = (): ReactElement => {
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
      if (e.key == 'Enter') {
        setTextValue('');
      }
    },
    [setTextValue]
  );

  const handleAddTodo = useCallback(() => {
    setTextValue('');
  }, [setTextValue]);

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
