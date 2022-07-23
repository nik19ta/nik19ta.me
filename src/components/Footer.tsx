import React from "react";

import styles from "../styles/components/Footer.module.css"

import footer_mail from "../images/footer/mail.svg"
import footer_instagram from "../images/footer/instagram.svg"
import footer_github from "../images/footer/github.svg"
import footer_telergamm from "../images/footer/telergamm.svg"

import { Link, animateScroll as scroll } from "react-scroll";

const Footer: React.FC = () => {

  const linkContactsWithMe = [
    {
      link: "mailto:nik19ta.me@gmail.com",
      text: "nik19ta.me@gmail.com",
      icon: footer_mail,
      alt: "mail"
    },
    {
      link: "https://www.instagram.com/nik19ta.me/",
      text: "@nik19ta.me",
      icon: footer_instagram,
      alt: "instagram"
    },
    {
      link: "https://github.com/nik19ta/",
      text: "github.com/nik19ta",
      icon: footer_github,
      alt: "github"
    },
    {
      link: "https://t.me/nik19ta",
      text: "@nik19ta",
      icon: footer_telergamm,
      alt: "telergamm"
    },
  ]

  return (
    <div id="concatcs" className={styles.footer} >
      <div className={styles.footer__top_line} >
        <p className={styles.footer_title} >Contacts</p>
        <div className={styles.footer__vartical_line}></div>
      </div>

      <div className={styles.footer__items} >
        <div className={`${styles.footer__item} ${styles.footer__item_about}`} >
          <h1 className={styles.footer__item_name} >Nikita Khvatov</h1>
          <p className={styles.footer__item_developer} >Middle full-stack Developer</p>
        </div>
        <div className={`${styles.footer__item} ${styles.contact_with_me_list}`} >
          {linkContactsWithMe.map(item => (
            <div key={item.alt} >
              <img className={styles.footer__item_icon} src={item.icon} alt={item.alt} />
              <a className={styles.footer__item_text} href={item.link} >{item.text}</a>
            </div>
          ))}
        </div>
        <div className={styles.footer__item_menu} >
          <div className={styles.footer_menu_list} >
            <Link activeClass="active" to="prewiew" spy={true} smooth={true} offset={-100} duration={300} >
              <div className={styles.footer_menu_list_item} >Main</div>
            </Link>
            <Link activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={300} >
              <div className={styles.footer_menu_list_item} >About</div>
            </Link>
            <Link activeClass="active" to="portfolio" spy={true} smooth={true} offset={-100} duration={300} >
              <div className={styles.footer_menu_list_item} >Portfolio</div>
            </Link>
            <Link activeClass="active" to="service" spy={true} smooth={true} offset={-100} duration={300} >
              <div className={styles.footer_menu_list_item} >Services</div>
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.footer__items_tablet}>
        <div className={styles.footer__items_tablet_left}>
          <p className={styles.footer__items_tablet_title} >NIKITA KHVATOV</p>
          <p className={styles.footer__items_tablet_subtitle} >Middle full-stack Developer</p>


          <div className={styles.footer__items_tablet_menu}>
            <div className={styles.footer__items_tablet_menu_column}>
              <Link activeClass="active" to="prewiew" spy={true} smooth={true} offset={-100} duration={300} >
                <div className={styles.footer__items_tablet_menu_row}>MAIN</div>
              </Link>
              <Link activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={300} >
                <div className={styles.footer__items_tablet_menu_row}>ABOUT</div>
              </Link>
            </div>
            <div className={styles.footer__items_tablet_menu_column}>
              <Link activeClass="active" to="portfolio" spy={true} smooth={true} offset={-100} duration={300} >
                <div className={styles.footer__items_tablet_menu_row}>PORTFOLIO</div>
              </Link>
              <Link activeClass="active" to="service" spy={true} smooth={true} offset={-100} duration={300} >
                <div className={styles.footer__items_tablet_menu_row}>SERVICES</div>
              </Link>
            </div>
          </div>

        </div>

        <div className={styles.footer__items_tablet_right}>
        {linkContactsWithMe.map(item => (
            <div key={item.alt} className={styles.footer__items_tablet_right_link} >
              <img className={styles.footer__item_icon} src={item.icon} alt={item.alt} />
              <a href={item.link} className={styles.footer__item_text}>{item.text}</a>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.footer__items_mobile} >
        <p className={styles.footer_mobile__title} >Nikita Khvatov</p>
        <p className={styles.footer_mobile__sub_title} >Middle full-stack Developer</p>

        <div className={styles.footer_mobile__collumns} >
          <div className={styles.footer__item} >
          {linkContactsWithMe.map(item => (
            <div key={item.alt} >
              <img className={styles.footer__item_icon} src={item.icon} alt={item.alt} />
              <a href={item.link} className={styles.footer__item_text} >{item.text}</a>
            </div>
          ))}
          </div>

          <div className={styles.footer_menu_list} >
            <Link activeClass="active" to="prewiew" spy={true} smooth={true} offset={-100} duration={300} >
              <div className={styles.footer_menu_list_item} >MAIN</div>
            </Link>
            <Link activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={300} >
              <div className={styles.footer_menu_list_item} >ABOUT</div>
            </Link>
            <Link activeClass="active" to="portfolio" spy={true} smooth={true} offset={-100} duration={300} >
              <div className={styles.footer_menu_list_item} >Portfolio</div>
            </Link>
            <Link activeClass="active" to="service" spy={true} smooth={true} offset={-100} duration={300} >
              <div className={styles.footer_menu_list_item} >Services</div>
            </Link>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Footer;