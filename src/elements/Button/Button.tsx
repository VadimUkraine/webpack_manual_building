import React, { FC, ReactElement } from 'react';
import './Button.scss';

export type ButtonProps = {
  customText?: string;
  buttonClass: string;
  onClick: () => void;
};

export const Button: FC<ButtonProps> = ({
  customText = 'Click me',
  buttonClass,
  onClick,
}: ButtonProps): ReactElement => (
  <button className={buttonClass} onClick={onClick} type="button">
    {customText}
  </button>
);
