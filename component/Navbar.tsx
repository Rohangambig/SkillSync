import Link from "next/link";
import styles from "./NavBar.module.css";
export default function NavBar() {
  return (
    <nav className={styles.navContainer}>
      <ul className={styles.nav}>
        <li className={styles.navHeadings}>SkillSync</li>
      </ul>

      <ul className={styles.navActions}>
        <li className={styles.navSearch}>
          <i className="fas fa-search"></i>
          <p>Search</p>
        </li>
        <li>
          <button>Login</button>
        </li>
        <li>
          <button>Employer Sign-up</button>
        </li>
      </ul>
    </nav>
  );
}
