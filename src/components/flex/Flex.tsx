import './Flex.scss';
import { forwardRef } from 'react';
import classNames from 'classnames';
import type { FlexProps } from './interface';
import { createFlexClassnames } from './utils';

// TODO: work on vertical and gap

export const Flex = forwardRef<HTMLElement, FlexProps>(
  (props, ref): JSX.Element => {
    const {
      vertical,
      wrap,
      justify,
      align,
      flex,
      gap,
      children,
      className,
      ...rest
    } = props;

    const appliedClasses = classNames(
      'flex-component',
      className,
      createFlexClassnames(props),
      { 'flex-component--vertical': vertical }
    );

    return (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <section className={appliedClasses} ref={ref} {...rest}>
        {children}
      </section>
    );
  }
);
