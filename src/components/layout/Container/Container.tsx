import styles from './style.module.css';
import classNames from "classnames";
import { type ReactNode } from "react";

interface Props {
  children: ReactNode,
  className?: string | undefined,
}

const Container = (props: Props) => {
  const {children, className} = props;

  return <div className={classNames(styles.root, className)}>{children}</div>
};

export default Container;