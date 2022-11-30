import styles from './headerstyle.module.sass';
const Header = () => {
  return (
    <nav className={styles.navbar}>
      <img
        id={styles.logo}
        src="/images/icecreamlogo.png"
        alt="berkrim-logo"
      ></img>
    </nav>
  );
};
export default Header;
