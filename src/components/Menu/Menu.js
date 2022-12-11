import { useState, useEffect } from 'react';
import styles from './menustyle.module.sass';
import IceCreamBtn from '../IceCreamButton/IceCreambtn';
import MenuProducts from '../MenuProducts/MenuProducts';
import SnackButton from '../SnackButton/SnackButton';
import Menus from '../../mockData';
const Menu = (props) => {
  const { snacks, iceCreamMenu } = Menus;
  const [Menu, setMenu] = useState(iceCreamMenu);

  const switchMenuIceCream = () => {
    if (Menu === iceCreamMenu) {
      setMenu(snacks);
    }
  };

  const switchMenuSnacks = () => {
    if (Menu === snacks) {
      setMenu(iceCreamMenu);
    }
  };
  return (
    <section className={styles.menusection}>
      <div className={styles.buttonsdiv}>
        <IceCreamBtn switchMenuSnacks={switchMenuSnacks} />
        <SnackButton switchMenuIceCream={switchMenuIceCream} />
      </div>
      <MenuProducts
        setOrders={props.setOrders}
        Menu={Menu}
        orders={props.orders}
      />
    </section>
  );
};
export default Menu;
