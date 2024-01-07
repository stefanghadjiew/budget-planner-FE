import './Button.scss';
import { forwardRef } from 'react';
import classNames from 'classnames';
import { Type, Size } from './types';
import type { ButtonProps } from './interface';
import { generateButtonClasses } from './utils';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref): JSX.Element => {
    const {
      submit,
      outlined = false,
      type = Type.PRIMARY,
      size = Size.MEDIUM,
      text = 'Default',
      style,
      className,
      onClick,
      children,
      ...rest
    } = props;

    const buttonClasses = generateButtonClasses(outlined, type, size);

    const appliedClasses = classNames(className, buttonClasses);

    return (
      <button
        type={submit ? 'submit' : 'button'}
        ref={ref}
        style={style}
        className={appliedClasses}
        onClick={onClick}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
      >
        {children ?? text}
      </button>
    );
  }
);
