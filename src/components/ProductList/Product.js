import styles from './product.module.sass';
import { useState } from 'react';

const Product = (props) => {
  const [productQuantity, setQuantity] = useState(0);
  const increaseQuantity = () => {
    console.log('sumando');
    setQuantity((prevCount) => prevCount + 1);
    props.setOrders([
      ...props.orders,
      {
        quantity: 1,
        name: 'Matcha + Toppings',
        total: 65,
      },
    ]);
  };
  const decreaseQuantity = () => {
    console.log('restando');
    setQuantity((prevCount) => prevCount - 1);
  };
  return (
    <div className={styles.productContainer}>
      <h2 className={styles.productName}> {props.name} </h2>
      <h2 className={styles.productPrice}>{props.price} </h2>
      <button onClick={decreaseQuantity} className={styles.buttonStyle}>
        -
      </button>
      <input className={styles.inputStyle} type="text" />
      <button onClick={increaseQuantity} className={styles.buttonStyle}>
        +
      </button>
    </div>
  );
};
export default Product;
