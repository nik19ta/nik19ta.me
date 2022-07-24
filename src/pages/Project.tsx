import React, { FC } from "react";

import { useLocation } from "react-router-dom"
import { getProjectById } from "../utils/portfolio";

import styles from "../styles/Project.module.css"
import { useTranslation } from "react-i18next";

const Project: FC = () => {
  const {t} = useTranslation();
  const location = useLocation()

  const id = location.pathname.split("/")[2];

  const project = getProjectById(id);

  return (project && <div className={styles.main} >
    <div className={styles.description} >

      <div className={styles.header} >
        <h1>{project.title}</h1>
        <div className={styles.header__line} ></div>
      </div>

      <p className={styles.description_text} >{project.description}</p>

      <div className={styles.cards} >
        {project.cards && project.cards.map(card => (
          <div className={styles.card} >
            <p className={styles.card__title} >{card.title}</p>
            <p className={styles.card__subtitle} >{card.sub_title}</p>
          </div>
        ))}
      </div>

      <p className={styles.main_features} >{t('portfolio.main_features')}</p>

      <ul className={styles.main_features} >
        {project.main_features && project.main_features.map(item => (
          <li>— {item}</li>
          ))}
      </ul>
    </div>

    <div className={styles.photos} >
      {project.photos?.map((photo, i) => {
        return (
          <img src={photo} alt={`${i}`} />
        );
      })}
    </div>

  </div>)
}

export default Project;