import styles from "./style.module.css";
import type { Feature } from '../../../types.ts';

import Container from '../../layout/Container/Container.js';
import Title from '../../ui/Title/Title.js';
import FeatureCard from '../../ui/FeatureCard/FeatureCard.js';
import Button from '../../ui/Button/Button.js';

interface Props {
  features: Feature[]
}

const Features = (props: Props) => {
  const {features} = props;

  let featuresList;

  if (Array.isArray(features)) {
    featuresList = features.map((feature) => {
      return <FeatureCard key={feature.id} feature={feature} />
    })
  }

  return (
    <section>
      <Container>
        <div className={styles.wrapper}>
          <Title tag="h2" className={styles.title}>Почему фермерские продукты лучше?</Title>
          <div className={styles.list}>{featuresList}</div>
          <Button tag="a" href="/farm-products/catalog" theme="buttonDefault">Купить</Button>
        </div>
      </Container>
    </section>
  )
};

export default Features;