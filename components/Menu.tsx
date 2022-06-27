import React from "react";

import styles from '../styles/components/Menu.module.css'
import { Link, animateScroll as scroll } from "react-scroll";

const Menu: React.FC = () => {
  return (
    <div className={styles.menu} >
      <div className={`${styles.menu__item} ${styles.full_name}`}>НИКИТА <br />ХВАТОВ</div>
      <Link
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        offset={0}
        duration={300} >
        <div className={styles.menu__item}>О себе</div>
      </Link>
      <Link
        activeClass="active"
        to="portfolio"
        spy={true}
        smooth={true}
        offset={-100}
        duration={300} >
        <div className={styles.menu__item}>Портфолио</div>
      </Link>
      <Link
        activeClass="active"
        to="service"
        spy={true}
        smooth={true}
        offset={-100}
        duration={300} >
        <div className={styles.menu__item}>Услуги</div>
      </Link>
      <Link
        activeClass="active"
        to="concatcs"
        spy={true}
        smooth={true}
        offset={-100}
        duration={300} >
        <div className={styles.menu__item}>Контакты</div>
      </Link>
      
      <div className={`${styles.menu__item} ${styles.language_switch}`} >
        <span className={styles.active} >RU</span>
        <span className={styles.inactive} >EN</span>
      </div>
    </div>
  )
}

export default Menu;