import styles from './waiterscreenstyle.module.sass';
import Order from '../Order/Order';
import { useState } from 'react';
import MenuProducts from '../MenuProducts/MenuProducts';

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

  return (
    <main className={styles.mainWaiterSection}>
      <MenuProducts setOrders={setOrders} orders={orders} />
      <Order orders={orders} />
    </main>
  );
};
export default WaiterScreen;
