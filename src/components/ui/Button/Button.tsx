import styles from "./style.module.css";
import classNames from "classnames";
import { Link } from 'react-router-dom';
import type { ReactNode } from "react";

type ButtonTag = "a" | "button" | "div"

interface Props {
  children: ReactNode,
  className?: string | undefined,
  tag: ButtonTag,
  type?: "button" | "submit" | "reset";
  href?: string,
  id?: string,
  isDisabled?: boolean,
  theme?: string,
  onChange?: React.Dispatch<React.SetStateAction<string>>,
}

const Button = (props: Props) => {
  const {children, className, tag = "div", type, href, id, isDisabled, theme, onChange} = props;

  const styleClass = () => {
    switch(theme) {
      case 'buttonDefault':
        return styles.buttonDefault
      case 'buttonTab':
        return styles.buttonTab
      default:
        break
    }
  };

  if (tag === "a" && href) {
    return (
      <Link 
        className={classNames(styles.root, className, styleClass())}
        to={href}
        id={id}
        onClick={() => id && onChange?.(id)}
      >
        {children}
      </Link>
    )
  } else if (tag === "button") {
      const TagName = tag;

      return (
        <TagName
          className={classNames(styles.root, className, styleClass())}
          type={type}
          id={id}
          disabled={isDisabled}
          onClick={() => id && onChange?.(id)}
        >
          {children}
        </TagName>
      )
    } else {
      const TagName = tag;

      return (
        <TagName
          className={classNames(styles.root, className, styleClass())}
          id={id}
          onClick={() => id && onChange?.(id)}
        >
          {children}
        </TagName>
      )
    }
};

export default Button;