import styles from './style.module.css';
import classNames from "classnames";
import { type ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';

interface Props {
  children: ReactNode,
  pageType: string,
}

const PageWrapper = (props: Props) => {
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