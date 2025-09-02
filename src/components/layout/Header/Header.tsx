import styles from './style.module.css';

import Container from '../Container/Container.js'
import Logo from '../../ui/Logo/Logo.js'
import Nav from '../Nav/Nav.js'

interface Props {
  pageType: string
}

const Header = (props: Props) => {
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