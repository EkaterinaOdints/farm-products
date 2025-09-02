import styles from './style.module.css';
import type { ProductBase } from '../../../types.ts';

interface Props {
  list: ProductBase[]
}

const ProductFeaturesList = (props: Props) => {
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