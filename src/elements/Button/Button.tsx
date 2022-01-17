import React, { FC, ReactElement } from 'react';
import './Button.scss';

type ButtonProps = {
  type: 'button' | 'submit' | 'reset' | undefined;
  customText?: string;
  buttonClass: string;
  onClick?: () => void;
  disabled?: boolean;
  children?: never;
};

export const Button: FC<ButtonProps> = ({
  type = 'button',
  customText,
  buttonClass,
  onClick,
  disabled,
}: ButtonProps): ReactElement => (
  <button
    className={buttonClass}
    onClick={onClick}
    type={type}
    disabled={disabled}
  >
    {customText || 'Click me'}
  </button>
);
