import styles from "./style.module.css";
import { Link } from 'react-router-dom';

import Button from '../../ui/Button/Button.js'

interface Props {
  pageType: string
}

const Nav = (props: Props) => {
  const {pageType} = props;

  const navigation = () => {
    switch(pageType) {
      case "index":
        return <Button tag="a" href="/farm-products/catalog" theme="buttonDefault">Купить</Button>
      case "inner":
        return (
          <ul className={styles.list}>
            <li>
              <Link to="/farm-products/" className={styles.link}>Главная</Link>
            </li>
          </ul>
        )
      default:
        break
    }
  }

  return (
    <nav>
      {navigation()}
    </nav>
  )
};

export default Nav;