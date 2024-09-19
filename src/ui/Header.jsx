import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { HomeIcon } from "@heroicons/react/24/outline";
import avata from "../assets/user-img.jpg";

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.link}>
        <HomeIcon className={styles.icon} />
        <span>Home Page</span>
      </Link>
      <div className={styles.user}>
        <img src={avata} alt="user avata" className={styles["user-img"]} />
        <span className={styles["user-name"]}>Qian Tang</span>
      </div>
    </header>
  );
}

export default Header;
