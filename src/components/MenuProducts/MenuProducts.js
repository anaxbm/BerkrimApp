import styles from './menuproducts.module.sass';
import { v4 as uuid } from 'uuid';
const MenuProducts = (props) => {
  const menu = props.Menu.map((icecream) => {
    return (
      <li key={uuid()}>
        {' '}
        {icecream} <span>'$65'</span>
      </li>
    );
  });
  return (
    <div className={styles.menuProducts}>
      <ul> {menu}</ul>
    </div>
  );
};
export default MenuProducts;
