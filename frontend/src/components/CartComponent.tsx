import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../styles/cartComponent.module.scss';
import { getCart, removeItemFromCart } from '../actions/cartActions';
import { PayPalButton } from 'react-paypal-button-v2';

interface ICartData {
  productName: string;
  productQuantity: number;
  productPrice: number;
  _id: number;
}

export default function CartComponent() {
  const dispatch = useDispatch();
  const cartState = useSelector((state: any) => state.getCartList);
  const temporaryLoginState = true;
  const { loading, data } = cartState;
  const [sdkReady, setSdkReady] = useState(false);
  const [userPaid, setUserPaid] = useState(false);
  let totalPrice = 0;

  useEffect(() => {
    dispatch(getCart());

    const script = document.createElement('script');
    script.src =
      'https://www.paypal.com/sdk/js?client-id=AUmffDTqYkAXJHrNknmzTK8mxOUpTSzeARiTsgX5m9END2HNJyz3ETgmYcyU81IGJReOLbHRO9CAlRFh&currency=EUR';
    script.type = 'text/javascript';
    script.async = true;
    script.onload = () => {
      setSdkReady(true);
    };
    document.body.appendChild(script);
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
        {/* swap back to: data && data.auth*/}
        {temporaryLoginState ? (
          <React.Fragment>
            <div className={styles.centerBox}>
              <div className={styles.orderHeader}>
                <h2>Your current cart items:</h2>
              </div>
              <div className={styles.orderBox}>
                {loading ? (
                  <>Loading...</>
                ) : (
                  data.data.map((el: ICartData, i: number) => {
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
                          <button
                            onClick={() => {
                              dispatch(removeItemFromCart(el._id));
                              setTimeout(() => {
                                dispatch(getCart());
                              }, 500);
                            }}
                          >
                            Cancel
                          </button>
                        </div>
                      );
                    } else {
                      return null;
                    }
                  })
                )}
              </div>{' '}
            </div>
            <div className={styles.checkoutBox}>
              <h2>Checkout:</h2>
              <p
                className={styles.checkoutPrice}
              >{`Total Price: ${totalPrice}$`}</p>
              <p>Pay with:</p>
              <div className={styles.buttonGroup}>
                {sdkReady ? (
                  <PayPalButton
                    amount={totalPrice}
                    onSuccess={() => {
                      setUserPaid(true);
                    }}
                  ></PayPalButton>
                ) : null}
              </div>
            </div>
          </React.Fragment>
        ) : (
          <p className={styles.loginMessage}>Please login to view your cart</p>
        )}
      </div>
    </React.Fragment>
  );
}
