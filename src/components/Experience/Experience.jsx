import React from "react";
import Skills from "../../data/Skills.json";
import { getImageurl } from "../../utils";
import styles from "./Experience.module.css";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {Skills.map((Skills, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageurl(Skills.imageSrc)} alt={Skills.title} />
                </div>
                <p>{Skills.title}</p>
              </div>
            );
          })}
        </div>
        <ul></ul>
      </div>
    </section>
  );
};
