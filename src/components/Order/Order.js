import styles from './orderstyle.module.sass';
import SendButton from '../SendButton/SendButton';
import { v4 as uuid } from 'uuid';

const Order = (props) => {
  const orders = props.orders.map((order) => {
    return (
      <div className={styles.orderItemsContainer} key={uuid()}>
        <h4>{order.quantity}</h4>
        <h4>{order.name}</h4>
        <h4>{order.total}</h4>
      </div>
    );
  });
  return (
    <section className={styles.ordercontainer}>
      <div className={styles.orderName}>
        <h3> N de orden </h3>
        <h3> Atiende: Barney </h3>
      </div>
      <div className={styles.orderDescription}>
        <h3>Cant</h3>
        <h3>Product</h3>
        <h3> Total</h3>
      </div>
      <div className={styles.productContainer}>{orders}</div>

      <div className={styles.totalCost}>
        <h3>Total 100</h3>
      </div>
      <SendButton />
    </section>
  );
};
export default Order;
