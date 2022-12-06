import styles from './menuproducts.module.sass';
import { v4 as uuid } from 'uuid';
import Product from '../ProductList/Product';
import Menu from '../Menu/Menu';

const MenuProducts = (props) => {
  const menu = props.Menu.map((product) => {
    return <Product key={uuid()} name={product.name} price={product.price} />;
  });
  return <div className={styles.menuProducts}>{menu}</div>;
};
export default MenuProducts;
