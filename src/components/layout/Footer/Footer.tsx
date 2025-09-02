import styles from './style.module.css';

import Container from '../Container/Container.js'
import Logo from "../../ui/Logo/Logo.js"

const Footer = () => {
  return (
    <footer className={styles.root}>
      <Container className={styles.container}>
        <Logo />
        <div className="footer__copyright">
          <span className="footer__copyright-text">Создано 2021</span>
        </div>
      </Container>
    </footer>
  )
};

export default Footer;