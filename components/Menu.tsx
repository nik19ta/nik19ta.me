/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

import styles from '../styles/components/Menu.module.css'
import { Link, animateScroll as scroll } from "react-scroll";

import burger from "../images/mobile_menu/burger.svg";
import close from "../images/mobile_menu/close.svg";

const Menu: React.FC = () => {

  const [openedMenu, setOpenedMenu] = useState(false)

  const menuList = [
    { text: "О себе", id: "about" },
    { text: "Портфолио", id: "portfolio" },
    { text: "Услуги", id: "service" },
    { text: "Контакты", id: "concatcs" },
  ];

  return (
    <div className={styles.menu}>
      <div className={styles.menu__desktop}>
        <div className={`${styles.menu__item} ${styles.full_name}`}>
          НИКИТА <br />
          ХВАТОВ
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
          <span className={`${styles.language_switch__item} ${styles.active}`}>
            RU
          </span>
          <span
            className={`${styles.language_switch__item} ${styles.inactive}`}
          >
            EN
          </span>
        </div>
      </div>

      <div className={styles.menu__mobile}>
        {!openedMenu && (
          <img
            onClick={() => setOpenedMenu(true)}
            className={styles.menu__mobile_image}
            src={burger.src}
            alt=""
          />
        )}
        {openedMenu && (
          <img
            onClick={() => setOpenedMenu(false)}
            className={styles.menu__mobile_image}
            src={close.src}
            alt=""
          />
        )}

        <p className={styles.name}>Никита Хватов</p>

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

            <div
              className={`${styles.menu__item} ${styles.language_switch_mobile}`}
            >
              <span
                className={`${styles.language_switch__item} ${styles.active}`}
              >
                RU
              </span>
              <span
                className={`${styles.language_switch__item} ${styles.inactive}`}
              >
                EN
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Menu;