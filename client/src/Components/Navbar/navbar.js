import Styles from "./navbar.module.css";

function Navbar() {
  return (
    <nav className={Styles.navbar}>
      <a className={Styles.homebutton} href="#">
        Home
      </a>

      <a className={Styles.resourcesbutton} href="#">
        Resources
      </a>
    </nav>
  );
}

export default Navbar;
