import classNames from 'classnames';
import { Type, Size } from './types';

export const generateButtonClasses = (
  outlined: boolean,
  type: string,
  size: string
) => {
  const validButtonType =
    type && (Object.values(Type) as string[]).includes(type)
      ? type
      : Type.PRIMARY;

  return classNames({
    button: true,
    'button--primary': validButtonType === Type.PRIMARY,
    'button--secondary': validButtonType === Type.SECONDARY,
    'button--outlined': outlined,
    'button--outlined--secondary': type === Type.SECONDARY && outlined,
    'button--small': size === Size.SMALL,
    'button--medium': size === Size.MEDIUM,
    'button--large': size === Size.LARGE,
  });
};
