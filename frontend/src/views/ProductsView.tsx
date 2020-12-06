import React from 'react';
import styles from '../styles/grid.module.scss';
import Menu from '../components/MenuComponent';
import Products from '../components/ProductsComponent';
import Footer from '../components/FooterComponent';

export default function ProductsView() {
  return (
    <React.Fragment>
      <div className={styles.mainGrid}>
        <div className={styles.menuItem}>
          <Menu></Menu>
        </div>
        <div className={styles.productsItem}>
          <Products></Products>
        </div>
        <div className={styles.footerItem}>
          <Footer></Footer>
        </div>
      </div>
    </React.Fragment>
  );
}
