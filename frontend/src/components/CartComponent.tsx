import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../styles/cartComponent.module.scss';
import { getCart } from '../actions/cartActions';

interface ICartData {
  productName: string;
  productQuantity: number;
  productPrice: number;
}

export default function CartComponent() {
  const dispatch = useDispatch();
  const cartState = useSelector((state: any) => state.getCartList);
  const { loading, cartData } = cartState;
  let totalPrice = 0;
  useEffect(() => {
    dispatch(getCart());
  }, []);

  const calculateFullPrice = (
    elementPrice: number,
    elementQuantity: number
  ) => {
    totalPrice += elementPrice * elementQuantity;
    return elementPrice * elementQuantity;
  };
  return (
    <React.Fragment>
      <div className={styles.box}>
        <div className={styles.centerBox}>
          <div className={styles.orderHeader}>
            <h2>Your current cart items:</h2>
          </div>
          <div className={styles.orderBox}>
            {loading ? (
              <>Loading...</>
            ) : (
              cartData.map((el: ICartData, i: number) => {
                if (el.productQuantity > 0) {
                  return (
                    <div key={i} className={styles.orderItem}>
                      <p>{el.productName}</p>
                      <p>Quantity: {el.productQuantity}</p>
                      <p>
                        Total Price:{' '}
                        {calculateFullPrice(
                          el.productPrice,
                          el.productQuantity
                        )}
                        $
                      </p>
                      <button>Cancel</button>
                    </div>
                  );
                } else {
                  return null;
                }
              })
            )}
          </div>
        </div>
        <div className={styles.checkoutBox}>
          <h2>Checkout:</h2>
          <p
            className={styles.checkoutPrice}
          >{`Total Price: ${totalPrice}$`}</p>
          <p>Pay with: </p>
          <div className={styles.buttonGroup}>
            <button>Pay with Paypal</button>
            <p>Or</p>
            <button>Pay with Stripe</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
