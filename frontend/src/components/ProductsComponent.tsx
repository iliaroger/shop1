import React from 'react';
import styles from '../styles/productsComponent.module.scss';
import { products } from '../data/products';
import { env } from 'process';
import { ELOOP } from 'constants';

export default function ProductsComponent(): JSX.Element {
  return (
    <React.Fragment>
      <div className={styles.box}>
        {products.map((el) => {
          return (
            <React.Fragment key={el.productId}>
              <div className={styles.item}>
                <img
                  src={process.env.PUBLIC_URL + el.productUrl}
                  alt={el.productName}
                ></img>
                <hr></hr>
                <h6>{el.productName}</h6>
                <p>{`Release: ${el.productRelease}`}</p>
                <p>{`Price: ${el.productPrice}$`}</p>
                <button>Add to Cart</button>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </React.Fragment>
  );
}
