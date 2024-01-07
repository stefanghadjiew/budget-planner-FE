import classNames from 'classnames';
import { FlexProps } from './interface';

const flexWrapValues = ['wrap', 'nowrap', 'wrap-reverse'];

const justifyContentValues = [
  'flex-start',
  'flex-end',
  'start',
  'end',
  'center',
  'space-between',
  'space-around',
  'space-evenly',
  'stretch',
  'normal',
  'left',
  'right',
];

const alignItemsValues = [
  'center',
  'start',
  'end',
  'flex-start',
  'flex-end',
  'self-start',
  'self-end',
  'baseline',
  'normal',
  'stretch',
];

const generateFlexGapClasses = (props: FlexProps) => {
  const gapClasses: Record<PropertyKey, boolean> = {};
  for (let i = 1; i <= 24; i += 1) {
    gapClasses[`flex-component--gap-${i}`] = props.gap === i;
  }
  return gapClasses;
};

const generateFlexWrapClasses = (props: FlexProps) => {
  const wrapClasses: Record<PropertyKey, boolean> = {};
  flexWrapValues.forEach((cssKey) => {
    wrapClasses[`flex-component--flex-wrap-${cssKey}`] = props.wrap === cssKey;
  });
  return wrapClasses;
};

const generateJustifyClasses = (props: FlexProps) => {
  const justifyClasses: Record<PropertyKey, boolean> = {};
  justifyContentValues.forEach((cssKey) => {
    justifyClasses[`flex-component--justify-${cssKey}`] =
      props.justify === cssKey;
  });
  return justifyClasses;
};

const generateAlignItemsClasses = (props: FlexProps) => {
  const alignItemsClasses: Record<PropertyKey, boolean> = {};
  alignItemsValues.forEach((cssKey) => {
    alignItemsClasses[`flex-component--align-items-${cssKey}`] =
      props.align === cssKey;
  });
  return alignItemsClasses;
};

export const createFlexClassnames = (props: FlexProps) => {
  return classNames({
    ...generateFlexWrapClasses(props),
    ...generateJustifyClasses(props),
    ...generateAlignItemsClasses(props),
    ...generateFlexGapClasses(props),
  });
};
