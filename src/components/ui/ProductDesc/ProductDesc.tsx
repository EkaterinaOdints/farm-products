import styles from './style.module.css';

interface Props {
  desc: {
    text: string,
    weight: string,
    priceNumber: number,
  }
}

const ProductDesc = (props: Props) => {
  const {desc} = props;

  return (
    <div className={styles.root}>
      <div className={styles.description}>
        <p dangerouslySetInnerHTML={{ __html: desc.text }} />
      </div>
      <div className={styles.price}>
        <span>{`${desc.priceNumber} руб. / ${desc.weight}`}</span>
      </div>
    </div>
  )
};

export default ProductDesc;