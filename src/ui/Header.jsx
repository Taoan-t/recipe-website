import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/">Home Page</Link>
      <p>User name</p>
    </header>
  );
}

export default Header;
