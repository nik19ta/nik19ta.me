import React, { useEffect, useState } from "react"

import styles from "../styles/components/Portfolio.module.css"

import portfolio_image from "../images/portfolio/owsup.png"

interface PortfolioItem {
  id: string
  url: any
  title: string
  sub_title: string
}

interface CategoryItem {
  id: string
  title: string
}

const Portfolio: React.FC = () => {

  const [activeTab, setActiveTab] = useState("")
  const [categories, setCategories] = useState([] as CategoryItem[])
  const [portfolio, setPortfolio] = useState([] as PortfolioItem[])

  useEffect(() => {
    setCategories([
      { id: "1", title: "Web" },
      { id: "2", title: "Bots" },
      { id: "3", title: "Back-end" },
      { id: "4", title: "Front-end" },
    ])

    setPortfolio([{
        id: "1",
        url: portfolio_image,
        title: "OWSUP",
        sub_title: "Сервис для продавцов на ozon, wildberries"
      },
      {
        id: "2",
        url: portfolio_image ,
        title: "OWSUP",
        sub_title: "Сервис для продавцов на ozon, wildberries"
      },
      {
        id: "3",
        url: portfolio_image,
        title: "OWSUP",
        sub_title: "Сервис для продавцов на ozon, wildberries"
      },
      {
        id: "4",
        url: portfolio_image,
        title: "OWSUP",
        sub_title: "Сервис для продавцов на ozon, wildberries"
      }
    ])
    setActiveTab("1")
  }, [])

  return (
    <div id="portfolio" className={styles.portfolio_screen} >
      <div className={styles.portfolio_screen__title_container} >
        <h2 className={styles.portfolio_screen__title} >Portfolio</h2>
      </div>

      <div className={styles.portfolio_screen__tabs} >
        {categories.map(item => (
          <div key={item.id} 
            onClick={() => setActiveTab(item.id)}
            className={`${styles.portfolio_screen__tabs_item} ${item.id == activeTab && styles.tabs_item_active}`} >    
              {item.title}
          </div>  
        ))}
      </div> 

      <div className={styles.portfolio_cards} >
        {portfolio.length > 0 && portfolio.map((element) => (
          <div key={element.id} className={styles.portfolio_cards__item} >
            <div className={styles.portfolio_cards__item_photo} style={{backgroundImage: `url(${element.url.src})`}} ></div>
            <p className={styles.portfolio_cards__item_title} >{element.title}</p>
            <p className={styles.portfolio_cards__item_subtitle} >{element.sub_title}</p>
          </div>
        ))}
      </div>

      <div className={styles.portfolio_screen__show_more_container} >
        <button className={styles.portfolio_screen__show_more} >Показать еще</button>
      </div>

    </div>
  )
}

export default Portfolio;