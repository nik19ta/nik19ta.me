/* eslint-disable @next/next/no-img-element */
import * as React from "react";

import styles from '../styles/components/Prewiew.module.css'

import Menu from '../components/Menu'

import github from  "../images/social_media/github.svg"
import linkedin from  "../images/social_media/linkedin.svg"
import instagram from  "../images/social_media/instagram.svg"
import telegramm from  "../images/social_media/telegramm.svg"
import { Link } from "react-scroll";


const Prewiew: React.FC = () => {

  const linkContactsWithMe = [
    {
      link: "https://github.com/nik19ta/",
      icon: github,
      alt: "github"
    },
    {
      link: "https://www.linkedin.com/in/nikita-khvatov-b9a780245/",
      icon: linkedin,
      alt: "linkedin"
    },
    {
      link: "https://www.instagram.com/nik19ta.me/",
      icon: instagram,
      alt: "instagram"
    },
    {
      link: "https://t.me/nik19ta",
      icon: telegramm,
      alt: "telergamm"
    },
  ]

  return (
    <div id="prewiew" className={styles.main_screen} >  
      <div className={`${styles.main_screen__line} ${styles.main_screen__line_left}`} ></div>
      <div className={`${styles.main_screen__line} ${styles.main_screen__line_top}`} ></div>
      <div className={`${styles.main_screen__line} ${styles.main_screen__line_right_top}`} ></div>
      <div className={`${styles.main_screen__line} ${styles.main_screen__line_right_bottom}`} ></div>

      <Menu />

      <div className={`${styles.flipped_over_text__desktop} ${styles.flipped_over_text}`} >
        <p className={styles.flipped_over_text__grey} >Middle <br /> 
          {"Developer".split("").map(item => (
            <span className={styles.half_color} key={item} id={item} >{item}</span>
          ))}
        </p>
      </div>

      <div className={`${styles.flipped_over_text__mobile} ${styles.flipped_over_text}`} >
        <p className={styles.flipped_over_text__grey} >
          {"Middle".split("").map(item => (
            <span className={styles.half_color} key={item} id={item} >{item}</span>
          ))}
          <br /> 
          Developer
        </p>
      </div>

      <div className={styles.image_back} ></div>

      <div className={styles.prewiew_text} >
        <p className={styles.prewiew_text__small} >Full-stack</p>
        <p className={styles.prewiew_text__large} > Developer </p>
      </div>

      <p className={styles.quote} > Моя цель – писать поддерживаемый, <br/> чистый и понятный код, чтобы процесс <br/> разработки был приятным.</p>

      <Link activeClass="active" to="portfolio" spy={true} smooth={true} offset={10} duration={300} >
        <button className={styles.btn_to_portfolio} >Смотреть портфолио</button>
      </Link>

      <div className={styles.icons_social_media} >
        {linkContactsWithMe.map(item => (
          <div key={item.alt} className={styles.icons__item} >
            <a href={item.link} >
              <img src={item.icon.src} alt={item.alt} />
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Prewiew;