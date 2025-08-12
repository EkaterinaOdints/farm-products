import styles from './style.module.css';
import classNames from "classnames";
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PageWrapper = (props) => {
  const {children, pageType} = props;

  const {pathname} = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);


  return (
    <div className={classNames(styles.root, styles.rootInner)}>
      <Header pageType={pageType} />
      {children}
      <Footer />
    </div>
  )
};

export default PageWrapper;