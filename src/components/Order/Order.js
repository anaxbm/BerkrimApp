import styles from './orderstyle.module.sass';
const Order = () => {
  return (
    <section className={styles.ordercontainer}>
      <div className={styles.orderName}>
        <h3> N de orden </h3>
        <h3> Atiende Barney </h3>
      </div>
      <div className={styles.orderDescription}>
        <h3>Cant</h3>
        <h3>Product</h3>
        <h3> Total</h3>
      </div>
      <div className={styles.totalCost}>
        <h3>Total</h3>
        <h3>$100</h3>
      </div>
    </section>
  );
};
export default Order;
