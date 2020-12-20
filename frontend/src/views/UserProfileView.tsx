import React from 'react';
import styles from '../styles/grid.module.scss';
import Menu from '../components/MenuComponent';
import Footer from '../components/FooterComponent';
import Login from '../components/LoginComponent';
import UserProfile from '../components/UserProfileComponent';
import { useSelector } from 'react-redux';

export default function UserProfileView() {
  const userAuthenticated = useSelector((state: any) => state.login);
  const { authenticated } = userAuthenticated;
  return (
    <React.Fragment>
      <div className={styles.mainGrid}>
        <div className={styles.menuItem}>
          <Menu></Menu>
        </div>
        <div className={styles.productsItem}>
          {authenticated ? <UserProfile></UserProfile> : <Login></Login>}
        </div>
        <div className={styles.footerItem}>
          <Footer></Footer>
        </div>
      </div>
    </React.Fragment>
  );
}
