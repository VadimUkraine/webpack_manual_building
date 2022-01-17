import React, { FC, ReactElement } from 'react';
import './TextInput.scss';

type InputTextProps = {
  inputClass?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  children?: never;
  placeholder?: string;
  value: string;
  id?: string;
};

export const TextInput: FC<InputTextProps> = ({
  value = '',
  onChange,
  disabled,
  onKeyDown,
  inputClass = 'standart',
  placeholder,
  id,
}: InputTextProps): ReactElement => (
  <input
    id={id}
    className={inputClass}
    type="text"
    value={value}
    onChange={onChange}
    onKeyDown={onKeyDown}
    disabled={disabled}
    placeholder={placeholder}
  />
);
