'use client'
import Link from "next/link";
import styles from "./NavBar.module.css";
import { useEffect, useState } from "react";
export default function NavBar() {

  const [theme,setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme',savedTheme);
  },[]);

  const ToggleEvent = () => {
    const savedTheme = theme === 'light' ? 'dark' :'light';
    setTheme(savedTheme);
    localStorage.setItem('theme',savedTheme);
    document.documentElement.setAttribute('data-theme',savedTheme);

  }
  
  return (
    <nav className={styles.navContainer}>

      <ul className={styles.nav}>
        <li className={styles.navHeadings}>SkillSync</li>
      </ul>

      <ul className={styles.navActions}>
        <li className={styles.navSearch}>
          <input type="text" placeholder="Search ..."></input>
          <i className="fas fa-search"></i> 
        </li>
        
        <li className={styles.userProfile}>
          <div>hfg</div>
        </li>

        <button onClick={ToggleEvent}>{theme === 'light' ? <i className="fas fa-adjust"></i> : <i className="fas fa-adjust"></i>}</button>

      </ul>
    </nav>
  );
}
