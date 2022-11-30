import { useState, useEffect } from 'react';
import styles from './menustyle.module.sass';
import IceCreamBtn from '../IceCreamButton/IceCreambtn';
import MenuProducts from '../MenuProducts/MenuProducts';
import SnackButton from '../SnackButton/SnackButton';
import Menus from '../../mockData';
const Menu = () => {
  const { snacks, iceCreamMenu } = Menus;
  const [Menu, setMenu] = useState(iceCreamMenu);
  const switchMenu = () => {
    console.log(Menu);
    if (Menu === snacks) {
      console.log('cambiando a ice cream');
      setMenu(iceCreamMenu);
    } else if (Menu === iceCreamMenu) {
      console.log('cambiando snacks');
      setMenu(snacks);
    }
  };
  return (
    <section className={styles.menusection}>
      <div className={styles.buttonsdiv}>
        <IceCreamBtn switchMenu={switchMenu} />
        <SnackButton switchMenu={switchMenu} />
      </div>
      <MenuProducts Menu={Menu} />
    </section>
  );
};
export default Menu;
