import React from 'react';
import styles from '../styles/cartComponent.module.scss';

export default function CartComponent() {
  return (
    <div className={styles.box}>
      <div className={styles.item}>
        <h2>Your items are:</h2>
      </div>
    </div>
  );
}
