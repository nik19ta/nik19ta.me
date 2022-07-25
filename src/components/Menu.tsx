import React, { useState } from "react";

import styles from '../styles/components/Menu.module.css'
import { Link, animateScroll as scroll } from "react-scroll";

import burger from "../images/mobile_menu/burger.svg";
import close from "../images/mobile_menu/close.svg";
import { useTranslation } from "react-i18next";

interface IMenu {
  chengeLang: Function
  lang: string
}

const Menu: React.FC<IMenu> = ({chengeLang, lang}) => {
  const {t} = useTranslation();

  const [openedMenu, setOpenedMenu] = useState(false)

  const menuList = [
    { text: t('menu.about'), id: "about" },
    { text: t('menu.portfolio'), id: "portfolio" },
    { text: t('menu.services'), id: "service" },
    { text: t('menu.contacts'), id: "concatcs" },
  ];

  return (
    <div className={styles.menu}>
      <div className={styles.menu__desktop}>
        <div className={`${styles.menu__item} ${styles.full_name}`}>
          {t("fullname")}
        </div>

        <div className={styles.menu__list}>
          {menuList.map((menuItem, index) => (
            <Link
              key={menuItem.id}
              activeClass="active"
              to={menuItem.id}
              spy={true}
              smooth={true}
              offset={index === 0 ? 0 : 100}
              duration={300}
            >
              <div className={styles.menu__item}>{menuItem.text}</div>
            </Link>
          ))}
        </div>

        <div className={`${styles.menu__item} ${styles.language_switch}`}>
          <span onClick={() => chengeLang("en")} className={`${styles.language_switch__item} ${lang === "en" ? styles.active : styles.inactive}`} >
            EN
          </span>
          <span onClick={() => chengeLang("ru")} className={`${styles.language_switch__item} ${lang === "ru" ? styles.active : styles.inactive}`} >
            RU
          </span>
        </div>
      </div>

      <div className={styles.menu__mobile}>
        {!openedMenu && (
          <img
            onClick={() => setOpenedMenu(true)}
            className={styles.menu__mobile_image}
            src={burger}
            alt=""
          />
        )}
        {openedMenu && (
          <img
            onClick={() => setOpenedMenu(false)}
            className={styles.menu__mobile_image}
            src={close}
            alt=""
          />
        )}

        <p className={styles.name}>NIKITA KHVATOV</p>

        {openedMenu && (
          <div className={styles.menu__mobile_list}>
            {menuList.map((menuItem, index) => (
              <Link
                key={menuItem.id}
                activeClass="active"
                to={menuItem.id}
                spy={true}
                smooth={true}
                offset={index === 0 ? 0 : 100}
                duration={300}
              >
                <div className={styles.menu__mobile_item}>{menuItem.text}</div>
              </Link>
            ))}

            <div className={`${styles.menu__item} ${styles.language_switch_mobile}`} >
              <span onClick={() => chengeLang("en")} className={`${styles.language_switch__item} ${lang === "en" ? styles.active : styles.inactive}`} >
                EN
              </span>
              <span onClick={() => chengeLang("ru")} className={`${styles.language_switch__item} ${lang === "ru" ? styles.active : styles.inactive}`} >
                RU
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Menu;