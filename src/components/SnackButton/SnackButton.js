import styles from '../IceCreamButton/iceCreambtn.module.sass';
const SnackButton = (props) => {
  return (
    <button onClick={props.switchMenu} className={styles.menuButton}>
      Snacks
    </button>
  );
};
export default SnackButton;
