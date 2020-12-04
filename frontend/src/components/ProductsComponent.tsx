import React from 'react';
import styles from '../styles/productsComponent.module.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productsAction } from '../actions/productActions';

interface Productdata {
  productName: string;
  productId: number;
  productRelease: string;
  productPrice: number;
  productUrl: string;
}

export default function ProductsComponent(): JSX.Element {
  const dispatch = useDispatch();
  const productList = useSelector((state: any) => state.productList);
  const { loading, products } = productList;

  useEffect(() => {
    dispatch(productsAction());
  }, []);

  return (
    <React.Fragment>
      <div className={styles.box}>
        {loading ? (
          <p>Loading data...</p>
        ) : (
          <>
            {products.map((el: Productdata) => {
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
          </>
        )}
      </div>
    </React.Fragment>
  );
}
