import React from 'react';
import styles from '../styles/menu.module.scss';
import { Link } from 'react-router-dom';

export default function MenuComponent(props: any): JSX.Element {
  return (
    <React.Fragment>
      <div className={styles.menuBox}>
        <div className={styles.menuLeftBox}>
          <h2>Szuee</h2>
        </div>
        <div className={styles.menuRightBox}>
          <Link className={styles.link} to="/">
            Products
          </Link>
          <Link className={styles.link} to="/cart">
            Cart
          </Link>
          <Link className={styles.link} to="/profile">
            Profile
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
}
