import Link from "next/link";
import styles from "./NavBar.module.css";
export default function NavBar() {

  const isLogin = true;
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

        </li>

      </ul>
    </nav>
  );
}
