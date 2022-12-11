import styles from './sendbutton.module.sass';
const SendButton = () => {
  return (
    <div className={styles.containerButton}>
      <button className={styles.buttonStyle}> Send Order</button>
    </div>
  );
};
export default SendButton;
