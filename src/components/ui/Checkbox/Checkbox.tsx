import styles from './style.module.css';
import classNames from "classnames";

interface Props {
  name: string,
  title: string,
  onChange: (name: string) => void,
  isChecked: boolean,
  isDisabled: boolean,
}

const Checkbox = (props: Props) => {
  const {name, title, onChange, isChecked, isDisabled} = props;
  
  return (
    <label className={classNames(styles.root, isDisabled && styles.isDisabled)}>
      <input 
      type="checkbox" 
      name={name} 
      className={styles.input} 
      onChange={() => onChange(name)} 
      checked={isChecked}
      disabled={isDisabled}
      />
      <span className={styles.text}>{title}</span>
    </label>
  )
};

export default Checkbox;