import React from "react";
import { getImageurl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h1 className={styles.title}>ABOUT</h1>
      <div className={styles.content}>
        <img
          className={styles.pic}
          src={getImageurl("about/aboutImage2.png")}
          alt=""
        />
        <ul className={styles.aboutMenu}>
          <li className={styles.aboutItem}>
            <img src={getImageurl("about/cursorIcon.png")} alt="" />
            <div className={styles.aboutItemText}>
              <h3>Front-End Development</h3>
              <p>
                I have Expierence building reponsive and optimised sites using
                React, Js, Html and css.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageurl("about/uiIcon.png")} alt="" />
            <div className={styles.aboutItemText}>
              <h3>Back-End Development</h3>
              <p>
                I have Expierence developing fast and optimised backened API
                systems using Nodejs, express.js
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageurl("about/serverIcon.png")} alt="" />
            <div className={styles.aboutItemText}>
              <h1>Back-End Database</h1>
              <p>I can also maintain and manage the database using Mysql.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
