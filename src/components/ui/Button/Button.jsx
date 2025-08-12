import styles from "./style.module.css";
import classNames from "classnames";
import {Link} from 'react-router-dom';

const Button = (props) => {
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

  if (tag === "a") {
    return (
      <Link 
        className={classNames(styles.root, className, styleClass())}
        to={href}
        disabled={isDisabled}
        onClick={() => onChange?.(id)}
      >
        {children}
      </Link>
    )
  } else {
    const TagName = tag;

    return (
      <TagName
        className={classNames(styles.root, className, styleClass())}
        href={href}
        type={type}
        id={id}
        disabled={isDisabled}
        onClick={() => onChange?.(id)}
      >
        {children}
      </TagName>
    )
  }
};

export default Button;