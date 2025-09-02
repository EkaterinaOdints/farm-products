import styles from './style.module.css';
import classNames from "classnames";

interface Props {
  name: string,
  placeholder: string,
  className?: string | undefined,
}

const TextInput = (props: Props) => {
  const {name, placeholder, className} = props;

  return (
    <label className={classNames(styles.root, className)}>
      <span className="visually-hidden">Адрес доставки</span>
      <input type="text" name={name} placeholder={placeholder} className={styles.input} />
    </label>
  )
};

export default TextInput;