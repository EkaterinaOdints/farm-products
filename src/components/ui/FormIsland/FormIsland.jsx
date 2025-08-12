import styles from './style.module.css';

const FormIsland = (props) => {
  const {children, title} = props;

  return (
    <div className={styles.root}>
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>{title}</legend>
        {children}
      </fieldset>
    </div>
  )
};

export default FormIsland;