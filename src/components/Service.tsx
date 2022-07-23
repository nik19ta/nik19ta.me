import React from "react";

import styles from "../styles/components/Service.module.css"

const Service = () => {

  const services = [
    {
      name: "Website development",
      subTitle: "",
    },
    {
      name: "Browser extensions",
      subTitle: "Chrome, Firefox",
    },
    {
      name: "Mobile development",
      subTitle: "ReactNative",
    },
    {
      name: "Back-end development",
      subTitle: "Node/Go",
    },
    {
      name: "Parsers",
      subTitle: "Go/Node/Python",
    },
    {
      name: "Web Aplication",
      subTitle: "Wpa, Spa, Ssr",
    },
  ];

  return (
    <div id="service" className={styles.service_screen} >
      <div className={styles.service_screen__items} >

        <div className={styles.service_screen__columns} >
          <div className={styles.service_screen__item} >
            <p className={styles.service_screen__item_title} >Website development</p>
          </div>
          <div className={styles.service_screen__item} >
            <p className={styles.service_screen__item_title} >Browser extensions</p>
            <p className={styles.service_screen__item_sub_title} >Chrome, Firefox</p>
          </div>
        </div>
 
        <div className={styles.service_screen__columns} >
          <div className={styles.service_screen__item} >
            <p className={styles.service_screen__item_title} >Mobile development</p>
            <p className={styles.service_screen__item_sub_title} >ReactNative</p>
          </div>
          <div className={styles.service_screen__item} >
            <p className={styles.service_screen__item_title} >Web Aplication</p>
            <p className={styles.service_screen__item_sub_title} >Wpa, Spa, Ssr</p>
          </div>
        </div>

        <div className={styles.service_screen__columns} >
          <div className={styles.service_screen__item} >
            <p className={styles.service_screen__item_title} >Back-end development</p>
            <p className={styles.service_screen__item_sub_title}>Node/Go</p>
          </div>
          <div className={styles.service_screen__item} >
            <p className={styles.service_screen__item_title} >Parsers</p>
            <p className={styles.service_screen__item_sub_title} >Go/Node/Python</p>
          </div>
        </div>
      </div>

      <div className={styles.service_screen__items_tablet} >
        <div className={styles.service_screen__columns} >
          <div className={styles.service_screen__item} >
            <p className={styles.service_screen__item_title} >Website development</p>
          </div>
            <div className={styles.service_screen__item} >
              <p className={styles.service_screen__item_title} >Browser extensions</p>
              <p className={styles.service_screen__item_sub_title} >Chrome, Firefox</p>
            </div>
          <div className={styles.service_screen__item}>
            <p className={styles.service_screen__item_title}>Mobile development</p>
            <p className={styles.service_screen__item_sub_title}>ReactNative</p>
          </div>
        </div>
        <div className={styles.service_screen__columns} >
          <div className={styles.service_screen__item} >
            <p className={styles.service_screen__item_title} >Back-end development</p>
            <p className={styles.service_screen__item_sub_title}>Node/Go</p>
          </div>
          <div className={styles.service_screen__item} >
            <p className={styles.service_screen__item_title} >Parsers</p>
            <p className={styles.service_screen__item_sub_title} >Go/Node/Python</p>
          </div>
          <div className={styles.service_screen__item}>
            <p className={styles.service_screen__item_title}>Web Aplication</p>
            <p className={styles.service_screen__item_sub_title}>Wpa, Spa, Ssr</p>
          </div>
        </div>
      </div>

      <div className={styles.service_screen__items_mobile} >
        <div className={styles.service_screen__item} >
          <p className={styles.service_screen__item_title} >Website development</p>
        </div>
          <div className={styles.service_screen__item} >
            <p className={styles.service_screen__item_title} >Browser extensions</p>
            <p className={styles.service_screen__item_sub_title} >Chrome, Firefox</p>
          </div>
        <div className={styles.service_screen__item}>
          <p className={styles.service_screen__item_title}>Mobile development</p>
          <p className={styles.service_screen__item_sub_title}>ReactNative</p>
        </div>
        <div className={styles.service_screen__item} >
          <p className={styles.service_screen__item_title} >Back-end development</p>
          <p className={styles.service_screen__item_sub_title}>Node/Go</p>
        </div>
        <div className={styles.service_screen__item} >
          <p className={styles.service_screen__item_title} >Parsers</p>
          <p className={styles.service_screen__item_sub_title} >Go/Node/Python</p>
        </div>
        <div className={styles.service_screen__item}>
          <p className={styles.service_screen__item_title}>Web Aplication</p>
          <p className={styles.service_screen__item_sub_title}>Wpa, Spa, Ssr</p>
        </div>
      </div>

      <div className={styles.services_title_container} >
        <div className={styles.services_line} ></div>
        <p className={styles.services_title} >Services</p>
      </div>

    </div>
  )
}

export default Service;