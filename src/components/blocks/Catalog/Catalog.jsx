import styles from './style.module.css';
import {useState, useRef, useEffect} from 'react';
import Container from '../../layout/Container/Container';
import Title from '../../ui/Title/Title';
import PurchaseForm from '../PurchaseForm/PurchaseForm.jsx';
import ProductCard from '../../ui/ProductCard/ProductCard.jsx';

const Catalog = (props) => {
  const {products} = props;

  let selectedDefault = [];

  products.forEach((item) => {
    if (item.isChecked) {
      selectedDefault.push(item.id);
    }
  })

  const [selectedProducts, setSelectedProducts] = useState(selectedDefault);
  const [isProductAdded, setIsProductAdded] = useState(false);

  const cardRef = useRef();

  useEffect(() => {
    if (isProductAdded) {
      if (selectedProducts.length > 0) {
        const lastCardRef = cardRef.current;

        if (lastCardRef) {
          lastCardRef.scrollIntoView({block: "center"});
        }
      }
    }
  }, [isProductAdded, selectedProducts]);

  const renderProducts = () => {
    return selectedProducts.map((item, index) => {
      const selectedProduct = products.find((product) => product.id === item)

      return (
        <li key={selectedProduct.id} ref={el => index === selectedProducts.length - 1 && (cardRef.current = el)}>
          <ProductCard product={selectedProduct} />
        </li>
      )
    })
  }

  return (
    <section className={styles.root}>
      <Container>
        <Title className="visually-hidden">Каталог</Title>
        <div className={styles.wrapper}>
          <PurchaseForm
            products={products}
            selectedProducts={selectedProducts}
            onProductsChange={setSelectedProducts}
            setIsProductAdded={setIsProductAdded}
          />
          <ul className={styles.productList}>
            {renderProducts()}
          </ul>
        </div>
      </Container>
    </section>
  )
};

export default Catalog;