import styles from "./style.module.css";
import classNames from "classnames";

const Title = (props) => {
  const {children, tag = 'div', className} = props;
  
  const TagName = tag;

  return <TagName className={classNames(styles.root, styles[tag], className)}>{children}</TagName>
};

export default Title;