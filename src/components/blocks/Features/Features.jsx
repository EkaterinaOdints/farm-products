import styles from "./style.module.css";
import Container from '../../layout/Container/Container.jsx';
import Title from '../../ui/Title/Title.jsx';
import FeatureCard from '../../ui/FeatureCard/FeatureCard.jsx';
import Button from '../../ui/Button/Button.jsx';

const Features = ({features}) => {
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