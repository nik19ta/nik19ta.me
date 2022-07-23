/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";

import nikita_khvatov from "../images/nikita_khvatov_2.png"

import styles from "../styles/components/About.module.css"

import Anime, {anime} from 'react-anime';

const About = () => {
  // isScrollValueMoreThanHeaderHeight
  const [isvmthh, setIsvmthh] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsvmthh(window.scrollY > 200);
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll);
},[])
  
  const companies = ["Sber Service", "Croc", "Qiwi", "ItHub", "VkDevLab"]

  const skils = [
    { categoryName: "Front-end", names: "TypeScript, Redux/toolkit, React, ReactNative, Vue/Vuex, Ant.d", },
    { categoryName: "Back-end",  names: "PostgreSQL/MySql, MongoDB, Go/Gin/Gorm, Node/Express/Nest, Python/Flask", },
    { categoryName: "Tools",     names: "Nginx/Brotly, GitHub CI/CD, Git, Swagger" },
    { categoryName: "Test ing",  names: "Selenium, Mocha, jest", }
  ]

  return (
    <div id="about" className={styles.about_screen} >
        <div className={styles.about_screen__left} >
        <p className={styles.about_screen__text} > Hello! I'm Nikita, <br /> I'm a Middle full-stack developer. <br /> More than 4 years experience. </p>
          <div className={`${isvmthh && styles.about_screen__line}`}></div>
          <div className={styles.skils_table}>

          {isvmthh && <Anime delay={anime.stagger(180)} scale={[.8, .9]}>
            {skils.map((skil_item) => (
              <div key={skil_item.categoryName} className={styles.skils_table__column}>
                <span className={styles.skils_table__column_title}>{skil_item.categoryName}</span>
                {skil_item.names.split(",").map((name) => (
                  <span key={name} className={styles.skils_table__column_item}>{name}</span>
                ))}
              </div>
            ))}
          </Anime>}
          </div>

          <div className={styles.about_screen__skills_title} >Skills</div>
          <div className={`${isvmthh && styles.about_screen__line_down}`} ></div>
        </div>

        <div className={styles.about_screen__right}>

          <div className={styles.about_screen__photo} style={{backgroundImage: `url(${nikita_khvatov})`}} >
            <p className={styles.about_screen__photo_text} >
              {"Middle full-stack".split("").map((item, index) => (
                <span className={styles.half_color} key={`mid-fs-${item}-${index}`} id={item} >{item}</span>
              ))}
            </p>
          </div>

          <div className={styles.about_screen__company_list_tablet} >
            <span className={styles.about_screen__company_title_tablet}>Company</span>
            <span className={styles.about_screen__company_list__item}> Sber Service </span>
            <span className={styles.about_screen__company_list__item}> Croc </span>
            <span className={styles.about_screen__company_list__item}> Qiwi </span>
            <span className={styles.about_screen__company_list__item}> ItHub </span>
            <span className={styles.about_screen__company_list__item}> VkDevLab </span>

            <div className={styles.about_screen__company_list__last_item} >
              <div className={styles.about_screen__company_list__line} ></div>
              <div className={styles.about_screen__company_list__text} >Company</div>
            </div>
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