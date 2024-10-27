import React from "react";
import { getImageurl } from "../../utils";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({
  project: { imageSrc, title, discription, skills, demo },
}) => {
  return (
    <div className={styles.container}>
      <img
        className={styles.image}
        src={getImageurl(imageSrc)}
        alt={`Image of ${title}`}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.discription}>{discription}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li className={styles.skill} key={id}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        <a className={styles.link} href={demo}>
          Demo
        </a>
      </div>
    </div>
  );
};
