import styles from './product.module.sass';

const Product = (props) => {
  return (
    <div className={styles.productContainer}>
      <h2 className={styles.productName}> {props.name} </h2>
      <h2 className={styles.productPrice}>{props.price} </h2>
      <button className={styles.buttonStyle}>-</button>
      <input className={styles.inputStyle} type="text" />
      <button className={styles.buttonStyle}>+</button>
    </div>
  );
};
export default Product;
