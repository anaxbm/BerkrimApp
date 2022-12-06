import styles from './iceCreambtn.module.sass';
const IceCreamBtn = (props) => {
  return (
    <button onClick={props.switchMenuSnacks} className={styles.menuButton}>
      {' '}
      Ice cream{' '}
    </button>
  );
};
export default IceCreamBtn;
