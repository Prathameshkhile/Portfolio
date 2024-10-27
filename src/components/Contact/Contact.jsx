import React from "react";
import { getImageurl } from "../../utils";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageurl("contact/emailIcon.png")} alt="" />
          <a href="mailto:pvkhile@gmail.com">pvkhile@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src={getImageurl("contact/linkedinIcon.png")} alt="" />
          <a href="https://www.linkedin.com/in/prathamesh-khile-941024268">
            linkedin.com/Prathamesh khile
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageurl("contact/githubIcon.png")} alt="" />
          <a href="https://github.com/Prathameshkhile">
            GitHub.com/Prathamesh Khile
          </a>
        </li>
      </ul>
    </footer>
  );
};
