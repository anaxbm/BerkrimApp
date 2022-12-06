import styles from '../IceCreamButton/iceCreambtn.module.sass';
const SnackButton = (props) => {
  return (
    <button onClick={props.switchMenuIceCream} className={styles.menuButton}>
      Snacks
    </button>
  );
};
export default SnackButton;
