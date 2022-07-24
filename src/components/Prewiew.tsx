import * as React from "react";
import styles from '../styles/components/Prewiew.module.css'

import Menu from '../components/Menu'

import github from  "../images/social_media/github.svg"
import linkedin from  "../images/social_media/linkedin.svg"
import instagram from  "../images/social_media/instagram.svg"
import telegramm from  "../images/social_media/telegramm.svg"
import { Link } from "react-scroll";

import anime from "animejs"
import { useTranslation } from "react-i18next";
import { useState } from "react";

// import Typewriter from 'typewriter-effect/dist/core';

const Prewiew: React.FC = () => {
  const {t, i18n} = useTranslation();

  const [lang, setLang] = useState('EN');

  const chengeLang = (lang: 'en' | 'ru') => {
    console.log(lang);

    i18n.changeLanguage(lang);
    setLang(lang);
  };

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

  React.useEffect(() => {
    setTimeout(() => {
      anime({
          targets: `.${styles.icons__item}`,
          translateX: -298,
          delay: anime.stagger(100, {direction: 'normal'})
        })
    }, 1300)
  }, []);

  return (
    <div id="prewiew" className={styles.main_screen} >  
      <div className={`${styles.main_screen__line} ${styles.main_screen__line_left}`} ></div>
      <div className={`${styles.main_screen__line} ${styles.main_screen__line_top}`} ></div>
      <div className={`${styles.main_screen__line} ${styles.main_screen__line_right_top}`} ></div>
      <div className={`${styles.main_screen__line} ${styles.main_screen__line_right_bottom}`} ></div>

      <Menu chengeLang={chengeLang} lang={lang} />

      <div className={`${styles.flipped_over_text__desktop} ${styles.flipped_over_text}`} >
        <p className={styles.flipped_over_text__grey} >Middle <br /> 
          {"Developer".split("").map((item, index) => (
            <span className={styles.half_color} key={`dev-${item}-${index}`} id={item} >{item}</span>
          ))}
        </p>
      </div>

      <div className={`${styles.flipped_over_text__mobile} ${styles.flipped_over_text}`} >
        <p className={styles.flipped_over_text__grey} >
          {"Middle".split("").map((item, index) => (
            <span className={styles.half_color} key={`mid-${item}-${index}`} id={item} >{item}</span>
          ))}
          <br /> 
          Developer
        </p>
      </div>

      <div className={styles.image_back} ></div>

      <div className={styles.prewiew_text} >
        <p className={`${styles.prewiew_text__small} ${styles.line_1} ${styles.anim_typewriter}`} id="typewriter_fullstack" >Full-stack</p>
        <p className={`${styles.prewiew_text__large} ${styles.line_2} ${styles.anim_typewriter_2}`} id="typewriter_developer" >Developer</p>
      </div>

      <div className={styles.quote} > {t('quote')} </div>

      <Link activeClass="active" to="portfolio" spy={true} smooth={true} offset={10} duration={300} >
        <button className={styles.btn_to_portfolio} >{t('prewiew.view_portfolio')}</button>
      </Link>

      <div id="logo" className={styles.icons_social_media} >
        {linkContactsWithMe.map(item => (
          <div key={item.alt} className={styles.icons__item} >
            <a href={item.link} >
              <img src={item.icon} alt={item.alt} />
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Prewiew;