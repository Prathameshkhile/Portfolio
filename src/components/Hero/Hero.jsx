import React from "react";
import { getImageurl } from "../../utils";
import styles from "./Hero.module.css";
export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Prathamesh khile</h1>
        <p className={styles.description}>
          I'm a fresher, I have been using React, Javascript, Nodejs, Mysql for
          Full stack development. Reach out if you like to learn more!
        </p>
        <a className={styles.contactBtn} href="mailto:pvkhile@gmail.com">
          Contact Me
        </a>
      </div>
      <img
        className={styles.heroImg}
        src={getImageurl("hero/heroImage2.png")}
        alt=""
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
