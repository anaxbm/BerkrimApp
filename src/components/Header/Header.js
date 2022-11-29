import styles from './headerstyle.module.sass';
const Header = () => {
  return (
    <nav className={styles.navbar}>
      <img
        src="public\images\ice cream - Made with PosterMyWall.png"
        alt="berkrim-logo"
      ></img>
    </nav>
  );
};
export default Header;
