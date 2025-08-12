import styles from './style.module.css';
import classNames from "classnames";

const Container = (props) => {
  const {children, className} = props;

  return <div className={classNames(styles.root, className)}>{children}</div>
};

export default Container;