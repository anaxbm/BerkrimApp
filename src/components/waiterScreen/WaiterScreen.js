import styles from './waiterscreenstyle.module.sass';
import Menu from '../Menu/Menu';
import Order from '../Order/Order';
import { useState } from 'react';

const WaiterScreen = () => {
  const [orders, setOrders] = useState([
    {
      quantity: 2,
      name: ' Greek Yogurt + Toppings',
      total: 130,
    },
    {
      quantity: 3,
      name: 'Hazenul Chocolate + Toppings',
      total: 195,
    },
  ]);
  console.log(orders);
  return (
    <main className={styles.mainWaiterSection}>
      <Menu setOrders={setOrders} orders={orders} />
      <Order orders={orders} />
    </main>
  );
};
export default WaiterScreen;
