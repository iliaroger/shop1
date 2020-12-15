import React from 'react';
import styles from '../styles/grid.module.scss';
import Menu from '../components/MenuComponent';
import Footer from '../components/FooterComponent';

export default function UserProfileView() {
  return (
    <React.Fragment>
      <div className={styles.mainGrid}>
        <div className={styles.menuItem}>
          <Menu></Menu>
        </div>
        <div className={styles.productsItem}></div>
        <div className={styles.footerItem}>
          <Footer></Footer>
        </div>
      </div>
    </React.Fragment>
  );
}
