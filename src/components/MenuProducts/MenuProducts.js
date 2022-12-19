import styles from './menuproducts.module.sass';
import { v4 as uuid } from 'uuid';
import Product from '../ProductList/Product';
import { useState, useEffect } from 'react';
import axios from 'axios';
import IceCreamBtn from '../IceCreamButton/IceCreambtn';
import SnackButton from '../SnackButton/SnackButton';

const MenuProducts = (props) => {
  const [Menus, setMenus] = useState({
    iceCreamMenu: [],
    snacksMenu: [],
  });
  const [ShowIceCream, setShowIceCream] = useState(true);

  const switchMenusIceCream = () => {
    if (ShowIceCream === false) {
      setShowIceCream(true);
    }
  };
  const switchMenusSnacks = () => {
    if (ShowIceCream === true) setShowIceCream(false);
  };

  /* */

  const getMenus = async () => {
    const { data } = await axios.get('http://localhost:5000/menus');
    setMenus({
      iceCreamMenu: data.iceCreamMenu,
      snacksMenu: data.snacksMenu,
    });
  };

  useEffect(() => {
    getMenus();
  }, []);

  const menuIceCream = Menus.iceCreamMenu.map((product) => {
    return (
      <Product
        setOrders={props.setOrders}
        orders={props.orders}
        key={uuid()}
        name={product.name}
        price={product.price}
      />
    );
  });

  /* */
  /* */
  /* */
  const menuSnacks = Menus.snacksMenu.map((product) => {
    return (
      <Product
        setOrders={props.setOrders}
        orders={props.orders}
        key={uuid()}
        name={product.name}
        price={product.price}
      />
    );
  });

  return (
    <section className={styles.menusection}>
      <div className={styles.buttonsdiv}>
        <IceCreamBtn switchMenusIceCream={switchMenusIceCream} />
        <SnackButton switchMenusSnacks={switchMenusSnacks} />
      </div>
      <div className={styles.menuProducts}>
        {ShowIceCream ? menuIceCream : menuSnacks}
      </div>
      ;
    </section>
  );
};
export default MenuProducts;
