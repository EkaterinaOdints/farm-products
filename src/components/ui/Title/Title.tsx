import styles from "./style.module.css";
import classNames from "classnames";
import type { ReactNode } from "react";

type TitleTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

interface Props {
  children: ReactNode,
  tag: TitleTag,
  className?: string | undefined,
}

const Title = (props: Props) => {
  const {children, tag = 'div', className} = props;
  
  const TagName = tag;

  return <TagName className={classNames(styles.root, styles[tag], className)}>{children}</TagName>
};

export default Title;