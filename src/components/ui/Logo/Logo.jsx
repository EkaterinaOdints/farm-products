import styles from "./style.module.css";
import logoDesktop from '../../../assets/img/logo-desktop.svg';
import logoMobile from '../../../assets/img/logo-mobile.svg';
import {Link} from 'react-router-dom';

const Logo = () => {
  return (
    <Link className={styles.root} to="/">
      <picture>
        <source media="(min-width: 769px)" srcSet={logoDesktop} type="image/svg+xml" width="398" height="44" />
        <img src={logoMobile} width="44" height="44" alt="Логотип компании" />
      </picture>
    </Link>
  )
};

export default Logo;