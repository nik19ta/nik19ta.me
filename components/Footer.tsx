/* eslint-disable @next/next/no-img-element */
import React from "react";

import styles from "../styles/components/Footer.module.css"

import footer_mail from "../images/footer/mail.svg"
import footer_instagram from "../images/footer/instagram.svg"
import footer_github from "../images/footer/github.svg"
import footer_telergamm from "../images/footer/telergamm.svg"

import { Link, animateScroll as scroll } from "react-scroll";

const Footer: React.FC = () => {
  return (
    <div id="concatcs" className={styles.footer} >
      <div className={styles.footer__top_line} >
        <p className={styles.footer_title} >Contacts</p>
        <div className={styles.footer__vartical_line}></div>
      </div>

      <div className={styles.footer__items} >
        <div className={`${styles.footer__item} ${styles.footer__item_about}`} >
          <h1 className={styles.footer__item_name} >Никита Хватов</h1>
          <p className={styles.footer__item_developer} >Middle full-stack Developer</p>
        </div>
        <div className={styles.footer__item} >
          <div>
            <img className={styles.footer__item_icon} src={footer_mail.src} alt="mail" />
            <p className={styles.footer__item_text} >hvatov@nik19ta.me</p>
          </div>
          <div>
            <img className={styles.footer__item_icon}  src={footer_instagram.src} alt="instagram" />
            <p className={styles.footer__item_text} >@nik19ta.me</p>
          </div>
          <div>
            <img className={styles.footer__item_icon} src={footer_github.src} alt="github" />
            <p className={styles.footer__item_text} >github.com/nik19ta</p>
          </div>
          <div>
            <img className={styles.footer__item_icon}  src={footer_telergamm.src} alt="telergamm" />
            <p className={styles.footer__item_text} >@nik19ta</p>
          </div>
        </div>
        <div className={styles.footer__item_menu} >
          <div className={styles.footer_menu_list} >
            <Link activeClass="active" to="prewiew" spy={true} smooth={true} offset={-100} duration={300} >
              <div className={styles.footer_menu_list_item} >Главная</div>
            </Link>
            <Link activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={300} >
              <div className={styles.footer_menu_list_item} >О себе</div>
            </Link>
            <Link activeClass="active" to="portfolio" spy={true} smooth={true} offset={-100} duration={300} >
              <div className={styles.footer_menu_list_item} >Портфолио</div>
            </Link>
            <Link activeClass="active" to="service" spy={true} smooth={true} offset={-100} duration={300} >
              <div className={styles.footer_menu_list_item} >Услуги</div>
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.footer__items_tablet}>
        <div className={styles.footer__items_tablet_left}>
          <p className={styles.footer__items_tablet_title} >НИКИТА ХВАТОВ</p>
          <p className={styles.footer__items_tablet_subtitle} >Middle full-stack Developer</p>


          <div className={styles.footer__items_tablet_menu}>
            <div className={styles.footer__items_tablet_menu_column}>
              <div className={styles.footer__items_tablet_menu_row}>ГЛАВНАЯ</div>
              <div className={styles.footer__items_tablet_menu_row}>О СЕБЕ</div>
            </div>
            <div className={styles.footer__items_tablet_menu_column}>
              <div className={styles.footer__items_tablet_menu_row}>ПОРТФОЛИО</div>
              <div className={styles.footer__items_tablet_menu_row}>УСЛУГИ</div>
            </div>
          </div>

        </div>

        <div className={styles.footer__items_tablet_right}>
          <div className={styles.footer__items_tablet_right_link} >
            <img className={styles.footer__item_icon} src={footer_mail.src} alt="mail" />
            <p className={styles.footer__item_text}>hvatov@nik19ta.me</p>
          </div>
          <div className={styles.footer__items_tablet_right_link} >
            <img className={styles.footer__item_icon} src={footer_instagram.src} alt="instagram" />
            <p className={styles.footer__item_text}>@nik19ta.me</p>
          </div>
          <div className={styles.footer__items_tablet_right_link} >
            <img className={styles.footer__item_icon} src={footer_github.src} alt="github" />
            <p className={styles.footer__item_text}>github.com/nik19ta</p>
          </div>
          <div className={styles.footer__items_tablet_right_link} >
            <img className={styles.footer__item_icon} src={footer_telergamm.src} alt="telergamm" />
            <p className={styles.footer__item_text}>@nik19ta</p>
          </div>
        </div>
      </div>

      <div className={styles.footer__items_mobile} >
        <p className={styles.footer_mobile__title} >Никита Хватов</p>
        <p className={styles.footer_mobile__sub_title} >Middle full-stack Developer</p>

        <div className={styles.footer_mobile__collumns} >
          <div className={styles.footer__item} >
            <div>
              <img className={styles.footer__item_icon} src={footer_mail.src} alt="mail" />
              <p className={styles.footer__item_text} >hvatov@nik19ta.me</p>
            </div>
            <div>
              <img className={styles.footer__item_icon}  src={footer_instagram.src} alt="instagram" />
              <p className={styles.footer__item_text} >@nik19ta.me</p>
            </div>
            <div>
              <img className={styles.footer__item_icon} src={footer_github.src} alt="github" />
              <p className={styles.footer__item_text} >github.com/nik19ta</p>
            </div>
            <div>
              <img className={styles.footer__item_icon}  src={footer_telergamm.src} alt="telergamm" />
              <p className={styles.footer__item_text} >@nik19ta</p>
            </div>
          </div>

          <div className={styles.footer_menu_list} >
            <Link activeClass="active" to="prewiew" spy={true} smooth={true} offset={-100} duration={300} >
              <div className={styles.footer_menu_list_item} >Главная</div>
            </Link>
            <Link activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={300} >
              <div className={styles.footer_menu_list_item} >О себе</div>
            </Link>
            <Link activeClass="active" to="portfolio" spy={true} smooth={true} offset={-100} duration={300} >
              <div className={styles.footer_menu_list_item} >Портфолио</div>
            </Link>
            <Link activeClass="active" to="service" spy={true} smooth={true} offset={-100} duration={300} >
              <div className={styles.footer_menu_list_item} >Услуги</div>
            </Link>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Footer;