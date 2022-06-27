/* eslint-disable @next/next/no-img-element */
import React from "react";

import nikita_khvatov from "../images/nikita_khvatov_2.png"

import styles from "../styles/components/About.module.css"

const About = () => {
  const companies = ["Sber Service", "Croc", "Qiwi", "ItHub", "VkDevLab"]

  const skils = [
    {
      categoryName: "Front-end",
      names: [
        "TypeScript",
        "Redux/toolkit",
        "React",
        "ReactNative",
        "Vue/Vuex",
        "Ant.d",
      ]
    },
    {
      categoryName: "Back-end",
      names: [
        "PostgreSQL/MySql",
        "MongoDB",
        "Go/Gin/Gorm",
        "Node/Express/Nest",
        "Python/Flask",
      ]
    },
    {
      categoryName: "Tools",
      names: [
        "Nginx/Brotly",
        "GitHub CI/CD",
        "Git",
        "Swagger",
      ]
    },
    {
      categoryName: "Testing",
      names: [
        "Selenium",
        "Mocha",
        "jest",
      ]
    }
  ]

  return (
    <div id="about" className={styles.about_screen} >
        <div className={styles.about_screen__left} >
          <p className={styles.about_screen__text} > Привет! Меня зовут Никита, <br /> и я Middle full-stack developer. <br /> В этой сфере я уже более 4 лет. </p>
          <div className={styles.about_screen__line}></div>
          <div className={styles.skils_table}>

            {skils.map((skil_item) => (
              <div key={skil_item.categoryName} className={styles.skils_table__column}>
                <span className={styles.skils_table__column_title}>{skil_item.categoryName}</span>
                {skil_item.names.map((name) => (
                  <span key={name} className={styles.skils_table__column_item}>{name}</span>
                ))}
              </div>
            ))}
          </div>

          <div className={styles.about_screen__skills_title} >Skills</div>
          <div className={styles.about_screen__line_down} ></div>
        </div>

        <div className={styles.about_screen__right}>
          <div className={styles.about_screen__photo} style={{backgroundImage: `url(${nikita_khvatov.src})`}} ></div>

          <div className={styles.about_screen__company_list_tablet} >
            <span className={styles.about_screen__company_title_tablet}>Company</span>
            <span className={styles.about_screen__company_list__item}> Sber Service </span>
            <span className={styles.about_screen__company_list__item}> Croc </span>
            <span className={styles.about_screen__company_list__item}> Qiwi </span>
            <span className={styles.about_screen__company_list__item}> ItHub </span>
            <span className={styles.about_screen__company_list__item}> VkDevLab </span>
          </div>
        </div>


        <div className={styles.about_screen__company_list} >
          {companies.map((item) => <span key={item} className={styles.about_screen__company_list__item} >{item}</span>)}
          <span className={styles.about_screen__company_title} >Company</span>
        </div>
      </div>
  )
}

export default About;