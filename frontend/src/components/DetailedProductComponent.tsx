import { useEffect } from 'react';
import styles from '../styles/productDetailComponent.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { productDetailAction } from '../actions/productActions';

export default function DetailedProductComponent({ props }: any): JSX.Element {
  const productData = useSelector((state: any) => state.productDetail);
  const { loading, product } = productData;
  const dispatch = useDispatch();

  useEffect(() => {
    const productId = props.match.params.id;
    dispatch(productDetailAction(productId));
  }, []);
  return (
    <div className={styles.box}>
      {loading ? (
        <>
          <h2 className={styles.loadingSpinner}>Loading...</h2>
        </>
      ) : (
        <>
          <div className={styles.detailBox}>
            <img src={product.productUrl} alt={product.productName}></img>
            <h3>{product.productName}</h3>
            <p>{`Price: ${product.productPrice}$`}</p>
            <button>Buy</button>
          </div>
        </>
      )}
    </div>
  );
}
