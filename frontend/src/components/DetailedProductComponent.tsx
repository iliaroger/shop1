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
    console.log(productData);
  }, []);

  return (
    <div className={styles.box}>
      {loading ? (
        <>
          <p className={styles.loadingSpinner}>Loading...</p>
        </>
      ) : (
        <>
          <div className={styles.detailBox}>
            <img src={product.productUrl} alt={product.productName}></img>
            <h3>{product.productName}</h3>
            <p>{product.productDescription}</p>
            <p>{`Price: ${product.productPrice}$`}</p>
            <button>Add to cart</button>
          </div>
        </>
      )}
    </div>
  );
}
