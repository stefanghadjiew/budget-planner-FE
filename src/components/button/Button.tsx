import { forwardRef } from 'react';
import classNames from 'classnames';
import buttonStyles from './Button.module.scss';
import type { ButtonProps } from './interface';

enum Size {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

enum Type {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

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

    const validButtonType = (Object.values(Type) as string[]).includes(type)
      ? type
      : Type.PRIMARY;

    const buttonClasses = classNames({
      [buttonStyles.button]: true,
      [buttonStyles['button--primary']]: validButtonType === Type.PRIMARY,
      [buttonStyles['button--secondary']]: validButtonType === Type.SECONDARY,
      [buttonStyles['button--outlined']]: outlined,
      [buttonStyles['button--outlined--secondary']]:
        type === Type.SECONDARY && outlined,
      [buttonStyles['button--small']]: size === Size.SMALL,
      [buttonStyles['button--medium']]: size === Size.MEDIUM,
      [buttonStyles['button--large']]: size === Size.LARGE,
    });

    const appliedClasses = `${buttonClasses} ${className}`;

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
