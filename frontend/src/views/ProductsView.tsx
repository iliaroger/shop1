import React, { useState } from 'react';
import styles from '../styles/products.module.scss';
import Menu from '../components/MenuComponent';
import Products from '../components/ProductsComponent';
import Footer from '../components/FooterComponent';

export default function ProductsView() {
  const [newText, setNewtext] = useState(['one', 'two', 'three']);

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
