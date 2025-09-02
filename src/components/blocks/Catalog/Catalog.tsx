import styles from './style.module.css';
import {useState, useRef, useEffect} from 'react';
import type { Product } from '../../../types.ts';

import Container from '../../layout/Container/Container.js';
import Title from '../../ui/Title/Title.js';
import PurchaseForm from '../PurchaseForm/PurchaseForm.js';
import ProductCard from '../../ui/ProductCard/ProductCard.js';

interface Props {
  products: Product[],
}

const Catalog = (props: Props) => {
  const {products} = props;

  let selectedDefault: string[] = [];

  products.forEach((item) => {
    if (item.isChecked) {
      selectedDefault.push(item.id);
    }
  })

  const [selectedProducts, setSelectedProducts] = useState(selectedDefault);
  const [isProductAdded, setIsProductAdded] = useState(false);

  const cardRef = useRef<HTMLLIElement | null>(null);

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

      if (!selectedProduct) {
        return
      }

      return (
        <li 
          key={selectedProduct.id} 
          ref={(el) => {
            if (index === selectedProducts.length - 1) {
              cardRef.current = el
            }
          }}>
            <ProductCard product={selectedProduct} />
        </li>
      )
    })
  }

  return (
    <section className={styles.root}>
      <Container>
        <Title className="visually-hidden" tag="h1">Каталог</Title>
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