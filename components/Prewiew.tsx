/* eslint-disable @next/next/no-img-element */
import * as React from "react";

import styles from '../styles/components/Prewiew.module.css'

import Menu from '../components/Menu'

import github from  "../images/social_media/github.svg"
import linkedin from  "../images/social_media/linkedin.svg"
import vk from  "../images/social_media/vk.svg"
import instagram from  "../images/social_media/instagram.svg"
import telegramm from  "../images/social_media/telegramm.svg"


const Prewiew: React.FC = () => {
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

      <button className={styles.btn_to_portfolio} >Смотреть портфолио</button>

      <div className={styles.icons_social_media} >
        <div className={styles.icons__item} > <img src={github.src} alt="github" /> </div>
        <div className={styles.icons__item} > <img src={linkedin.src} alt="linkedin" /> </div>
        <div className={styles.icons__item} > <img src={vk.src} alt="vk" /> </div>
        <div className={styles.icons__item} > <img src={instagram.src} alt="instagram" /> </div>
        <div className={styles.icons__item} > <img src={telegramm.src} alt="telegramm" /> </div>
      </div>
    </div>
  )
}

export default Prewiew;