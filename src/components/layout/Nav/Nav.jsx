import styles from "./style.module.css";
import Button from '../../ui/Button/Button.jsx'
import {Link} from 'react-router-dom';

const Nav = (props) => {
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