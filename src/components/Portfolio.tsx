import React, { useEffect, useState } from "react"

import styles from "../styles/components/Portfolio.module.css"

import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { portfolioData } from "../utils/portfolio"
import { useTranslation } from "react-i18next"

interface PortfolioItem {
  id: string
  url: any
  title: string
  sub_title: string
  categories: number[]
}

interface CategoryItem {
  id: number
  title: string
}

const Portfolio: React.FC = () => {
  const {t} = useTranslation();
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 1.5
      }
    }
  }
  
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  }
  
  const [activeTab, setActiveTab] = useState(-1)

  const portfolio = portfolioData
  const categories = [
    { id: 1, title: t("portfolio.all_projects") },
    { id: 2, title: "WEB" },
    { id: 4, title: "MOBILE" },
    { id: 3, title: "BOT" },
  ]

  const [limit, setLimit] = useState(4)

  useEffect(() => {
    setActiveTab(1)
  }, [])

  return (
    <div id="portfolio" className={styles.portfolio_screen}>
      <div className={styles.portfolio_screen__title_container}>
        <h2 className={styles.portfolio_screen__title}>Portfolio</h2>
      </div>

      <div className={styles.portfolio_screen__tabs}>
        {categories.map((item) => (
          <div key={item.id} onClick={() => {
            setActiveTab(item.id)
            setLimit(4)
          }}
            className={`${styles.portfolio_screen__tabs_item} ${item.id == activeTab && styles.tabs_item_active}`} >
            {item.title}
          </div>
        ))}
      </div>

      <motion.ul viewport={{ once: true }} className={styles.portfolio_cards} variants={container} initial="hidden" animate="show" >
      {portfolio.length > 0 &&
        portfolio.filter(item => ((item.categories.includes(activeTab) || activeTab === 1))).map((element, index) => (
          index < limit && <motion.li variants={item} key={element.id} className={styles.portfolio_cards__item} >
              <Link to={`/project/${element.id}`} >
                <img src={element.url} className={styles.portfolio_cards__item_photo} alt="" />
                <p className={styles.portfolio_cards__item_title}>{element.title}</p>
                <p className={styles.portfolio_cards__item_subtitle}>{element.sub_title}</p>
              </Link>
            </motion.li>
        ))}
      </motion.ul>

      <div className={styles.portfolio_screen__show_more_container}>
        {limit == 4 && <button className={styles.portfolio_screen__show_more} onClick={() => setLimit(10)} > {t('portfolio.show_more')} </button>}
        {limit > 4 && <button className={styles.portfolio_screen__show_more} onClick={() => setLimit(4)} > {t('portfolio.show_less')} </button>}
      </div>
    </div>
  );
}

export default Portfolio;