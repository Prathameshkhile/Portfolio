import React from "react";
import styles from "./Navbar.module.css";
import { useState } from "react";
import { getImageurl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menubtn}
          src={
            menuOpen
              ? getImageurl("nav/closeIcon.png")
              : getImageurl("nav/menuIcon.png")
          }
          alt="hi"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          onClick={() => setMenuOpen(false)}
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
