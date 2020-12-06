import React from 'react';
import Menu from '../components/MenuComponent';
import Footer from '../components/FooterComponent';
import Product from '../components/DetailedProductComponent';
import styles from '../styles/grid.module.scss';

export default function DetailedProductView(props: any): JSX.Element {
  return (
    <div>
      <React.Fragment>
        <div className={styles.mainGrid}>
          <div className={styles.menuItem}>
            <Menu></Menu>
          </div>
          <div className={styles.productsItem}>
            <Product props={props}></Product>
          </div>
          <div className={styles.footerItem}>
            <Footer></Footer>
          </div>
        </div>
      </React.Fragment>
    </div>
  );
}
