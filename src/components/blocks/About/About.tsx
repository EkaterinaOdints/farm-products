import styles from "./style.module.css";

import Container from '../../layout/Container/Container.js'
import Title from '../../ui/Title/Title.js'

const About = () => {
  return (
    <section className={styles.root}>
      <Container className={styles.container}>
        <div className={styles.wrapper}>
          <Title tag="h1">Магазин фермерских продуктов с&nbsp;доставкой</Title>
          <div className={styles.description}>
            <p>Все продукты изготавливаются под заказ. Фермеры начинают готовить продукты за&nbsp;день до&nbsp;отправки заказа клиентам. Именно поэтому мы&nbsp;принимаем заказы заранее и&nbsp;доставляем продукты максимально свежими.</p>
          </div>
        </div>
      </Container>
    </section>
  ) 
};

export default About;