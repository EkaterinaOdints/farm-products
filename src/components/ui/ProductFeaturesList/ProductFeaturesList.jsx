import styles from './style.module.css';

const ProductFeaturesList = (props) => {
  const {list} = props;

  return (
    <ul className={styles.root}>
      {list.map((item) => {
        return (
          <li key={item.id}>
            <span className={styles.title}>{`${item.title}: `}</span>
            <span className={styles.value}>{item.value}</span>
          </li>
        )
      })}
    </ul>
  )
};

export default ProductFeaturesList;