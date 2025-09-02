import styles from './style.module.css';
import { useState } from 'react';
import type { Product } from '../../../types.ts';

import FormIsland from '../../ui/FormIsland/FormIsland.js';
import Button from '../../ui/Button/Button.js';
import Checkbox from '../../ui/Checkbox/Checkbox.js';
import TextInput from '../../ui/TextInput/TextInput.js';

interface Props {
  products: Product[],
  selectedProducts: string[],
  onProductsChange: React.Dispatch<React.SetStateAction<string[]>>,
  setIsProductAdded: React.Dispatch<React.SetStateAction<boolean>>,
}

const PurchaseForm = (props: Props) => {
  const {products, selectedProducts, onProductsChange, setIsProductAdded} = props;

  let defaultPrice = 0;

  selectedProducts.forEach((item) => {
    const product = products.find((product) => product.id === item);

    if (!product) {
      return
    }

    defaultPrice += product.description.priceNumber;
  })

  const [price, setTotalPrice] = useState(defaultPrice);

  let selectedCheckboxes = [...selectedProducts];

  const onCheckboxChange = (productId: string) => {
    const product = products.find((product) => product.id === productId);

    if (!product) {
      return
    }

    if (selectedCheckboxes.includes(productId)) {
      selectedCheckboxes = selectedCheckboxes.filter((item) => item !== productId);
      setTotalPrice(price - product.description.priceNumber);
      setIsProductAdded(false)
    } else {
      selectedCheckboxes.push(productId);
      setTotalPrice(price + product.description.priceNumber);
      setIsProductAdded(true)
    }
    
    onProductsChange(selectedCheckboxes);
  };
  
  return (
    <form className={styles.root} action="" method="post">
      <FormIsland title="Выберите продукты" className={styles.productListFieldset}>
        <div className={styles.productList}>
          {products.map((product) => {
            return (
              <Checkbox
                name={product.id}
                title={product.title}
                key={product.id}
                onChange={onCheckboxChange}
                isChecked={selectedCheckboxes.includes(product.id)}
                isDisabled={false}
              />
            )
          })}
        </div>
      </FormIsland>
      <FormIsland title="Сделать заказ">
        <TextInput name="address" placeholder="Введите адрес доставки" className={styles.addressInput} />
        <div className={styles.priceWrapper}>
          <span className={styles.priceText}>Цена</span>
          <div className={styles.priceNumber}>{`${price} руб.`}</div>
        </div>
        <Button tag="button" type="submit" theme="buttonDefault" isDisabled={selectedCheckboxes.length === 0}>Купить</Button>
      </FormIsland>
    </form>
  )
};

export default PurchaseForm;