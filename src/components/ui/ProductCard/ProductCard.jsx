import styles from './style.module.css';
import {useState} from 'react';
import Title from '../Title/Title.jsx';
import Button from '../Button/Button.jsx';
import ProductDesc from '../ProductDesc/ProductDesc.jsx';
import ProductFeaturesList from '../ProductFeaturesList/ProductFeaturesList.jsx';

const ProductCard = (props) => {
  const {product} = props;

  const tabs = [
    {
      id: 'desc',
      title: 'Описание',
      content: <ProductDesc desc={product.description} />
    },
    {
      id: 'char',
      title: 'Характеристики',
      content: <ProductFeaturesList list={product.characteristics} />
    },
    {
      id: 'prop',
      title: 'Свойства',
      content: <ProductFeaturesList list={product.properties} />
    },
  ]

  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className={styles.root}>
      <div className={styles.image}>
        <img src={product.imgPath} alt={product.title} width="248" height="248" />
      </div>
      <div className={styles.text}>
        <Title tag="h3">{product.title}</Title>
        <div className={styles.tabButtons}>
          {tabs.map((tab) => {
            return (
              <Button
                key={tab.id}
                tag="button"
                type="button"
                id={tab.id}
                theme="buttonTab"
                onChange={setActiveTab}
                className={activeTab === tab.id ? styles.buttonTabIsActive : null}
              >
                {tab.title}
              </Button>
            )
          })}
        </div>
        <>
          {tabs.map((tab) => {
            if (tab.id === activeTab) {
              return <div key={tab.id} className={styles.tabContent}>{tab.content}</div>
            }
          })}
        </>
      </div>
    </div>
  )
};

export default ProductCard;