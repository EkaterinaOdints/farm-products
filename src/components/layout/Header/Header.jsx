import styles from './style.module.css';
import Container from '../Container/Container.jsx'
import Logo from '../../ui/Logo/Logo.jsx'
import Nav from '../../layout/Nav/Nav.jsx'

const Header = (props) => {
  const {pageType} = props;

  return (
    <header className={styles.root}>
      <Container className={styles.container}>
        <Logo />
        <Nav pageType={pageType} />
      </Container>
    </header>
  )
};

export default Header;