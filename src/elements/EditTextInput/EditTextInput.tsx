import React, {
  FC,
  ReactElement,
  MutableRefObject,
  FocusEvent,
  KeyboardEvent,
  ChangeEvent,
} from 'react';
import './EditTextInput.scss';

type EditInputTextProps = {
  inputClass?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyPress: (e: KeyboardEvent<HTMLInputElement>) => void;
  onBlur: (e: FocusEvent<HTMLInputElement>) => void;
  children?: never;
  value: string;
  id?: string;
  refInput: MutableRefObject<HTMLInputElement>;
};

export const EditTextInput: FC<EditInputTextProps> = ({
  value = '',
  onChange,
  onKeyPress,
  onBlur,
  inputClass = 'edit-standart',
  id,
  refInput,
}: EditInputTextProps): ReactElement => (
  <input
    id={id}
    className={inputClass}
    type="text"
    value={value}
    onChange={onChange}
    onKeyPress={onKeyPress}
    onBlur={onBlur}
    ref={refInput}
  />
);
