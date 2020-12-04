import React from 'react';
import styles from '../styles/cartView.module.scss';
import Menu from '../components/MenuComponent';
import Footer from '../components/FooterComponent';
import Cart from '../components/CartComponent';

export default function CartComponent() {
  return (
    <React.Fragment>
      <div className={styles.mainGrid}>
        <div className={styles.menuItem}>
          <Menu></Menu>
        </div>
        <div className={styles.productsItem}>
          <Cart></Cart>
        </div>
        <div className={styles.footerItem}>
          <Footer></Footer>
        </div>
      </div>
    </React.Fragment>
  );
}
