import classNames from 'classnames';
import pageStyles from './Page.module.scss';
import type { PageProps } from './interface';

// TODO: If need be , provide ref forwarding for this component later on

export const Page: React.FC<PageProps> = ({ className, children }) => {
  const pageClasses = classNames({
    [pageStyles.pageMainContainer]: true,
  });

  const appliedClasses = `${pageClasses} ${className}`;

  return <main className={appliedClasses}>{children}</main>;
};
