import styles from './style.module.css';
import type { ReactNode } from 'react';
import classNames from "classnames";

interface Props {
  children: ReactNode,
  title: string,
  className?: string | undefined,
}

const FormIsland = (props: Props) => {
  const {children, title, className} = props;

  return (
    <div className={classNames(styles.root, className)}>
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>{title}</legend>
        {children}
      </fieldset>
    </div>
  )
};

export default FormIsland;