import EWYS from "../images/portfolio/EWYS.jpg"
import EMIAS from "../images/portfolio/EMIAS.jpg"
import OWSUP from "../images/portfolio/OWSUP.jpg"
import BISUP from "../images/portfolio/BISUP.png"
import EPICHERISION from "../images/portfolio/EPICHERISION.jpg"
import just_portfolio from "../images/portfolio/just-portfolio.jpg"
import UBusiness from "../images/portfolio/UBusiness.jpg"
import SecretSanta from "../images/portfolio/SecretSanta.jpg"


// Business Up
import BusinessUp_1 from "../images/portfolio/business-up/1.jpg"
import BusinessUp_2 from "../images/portfolio/business-up/2.jpg"
import BusinessUp_3 from "../images/portfolio/business-up/3.jpg"

// Emias Photo
import Emias_1 from "../images/portfolio/emias/1.jpg"
import Emias_2 from "../images/portfolio/emias/2.jpg"
import Emias_3 from "../images/portfolio/emias/3.jpg"

// EPICHERISION Bot Photo
import epicherision_1 from "../images/portfolio/epicherision/1.jpg"
import epicherision_2 from "../images/portfolio/epicherision/2.jpg"
import epicherision_3 from "../images/portfolio/epicherision/3.jpg"

// Ewis Photo
import EWIS_1 from "../images/portfolio/ewys/1.jpg"
import EWIS_2 from "../images/portfolio/ewys/2.jpg"
import EWIS_3 from "../images/portfolio/ewys/3.jpg"

// Just Portfolio Photo
import JustPortfolio_1 from "../images/portfolio/just-portfolio/1.jpg"
import JustPortfolio_2 from "../images/portfolio/just-portfolio/2.jpg"
import JustPortfolio_3 from "../images/portfolio/just-portfolio/3.jpg"

// Just Portfolio Photo
import owsup_1 from "../images/portfolio/owsup/1.jpg"
import owsup_2 from "../images/portfolio/owsup/2.jpg"
import owsup_3 from "../images/portfolio/owsup/3.jpg"

// Secret Santa Photo
import secret_santa_1 from "../images/portfolio/secret-santa/1.jpg"
import secret_santa_2 from "../images/portfolio/secret-santa/2.jpg"
import secret_santa_3 from "../images/portfolio/secret-santa/3.jpg"

// U Business
import UBusiness_1 from "../images/portfolio/u-business/1.jpg"
import UBusiness_2 from "../images/portfolio/u-business/2.jpg"
import UBusiness_3 from "../images/portfolio/u-business/3.jpg"


export interface PortfolioItem {
  categories: number[]
  id: string
  url: any
  title: string
  sub_title: string
  description: string
  cards?: {
    title: string
    sub_title: string
  }[],
  main_features?: string[],
  photos?: any[]
}

export const portfolioData: PortfolioItem[] = [
  {
    categories: [ 4 ],
    id: "81ee526d-beb0-4a71-a192-e2b5a9886146",
    url: EWYS,
    title: "Ewys",
    sub_title: "On-screen menu with augmented reality for a restaurant",
    description: "Приложение для электронного меню с элементами дополненной реальности, для ресторанов.",
    cards: [{
      title: "Front-end",
      sub_title: "Vue.js"
    },
    {
      title: "Back-end",
      sub_title: "NodeJs, Express, Mysql"
    }],
    main_features: ["Просмотр меню ресторана", "Просмотр отдельных блюд и их описание, фото, время готовки, ингридиенты", "Просмотр 3d модели в дополненной реальности"],
    photos: [EWIS_1, EWIS_2, EWIS_3]
  },
  {
    categories: [ 2, 4 ],
    id: "0b1dc4ba-541c-49e2-8d67-46875a85ad9f",
    url: BISUP,
    title: "BUSINESS UP",
    sub_title: "The platform forms the skills of an entrepreneur with the help of online gaming solutions",
    description: "",
    photos: [BusinessUp_1, BusinessUp_2, BusinessUp_3]
  },
  {
    categories: [ 2 ],
    id: "8cbad396-598e-435a-a225-822ec541531a",
    url: OWSUP,
    title: "OWSUP",
    sub_title: "Service for selis for ozon and wb, wildberries",
    description: "",
    photos: [owsup_1, owsup_2, owsup_3]
  },
  {
    categories: [ 3 ],
    id: "aec0435f-9ffe-4eed-9f09-2922b70cae16",
    url: EPICHERISION,
    title: "EPICHERISION 2.0",
    sub_title: "Discord parser bot",
    description: "",
    photos: [epicherision_1, epicherision_2, epicherision_3]
  },
  {
    categories: [ 2 ],
    id: "57fe52eb-04d2-4d09-8d9d-29af4f916ef7",
    url: just_portfolio,
    title: "Just Portfolio",
    sub_title: "A highly focused portfolio content management system",
    description: "",
    photos: [JustPortfolio_1, JustPortfolio_2, JustPortfolio_3]
  },
  {
    categories: [ 2 ],
    id: "f259e99b-4722-4646-9c48-0de63e6beed4",
    url: EMIAS,
    title: "EMIAS ",
    sub_title: "web platform for EMIAS emploees",
    description: "",
    photos: [Emias_1, Emias_2, Emias_3]
  },
  {
    categories: [ 2 ],
    id: "cde03dbb-30ff-4704-91d7-20d8466159c1",
    url: UBusiness,
    title: "U.Business",
    sub_title: "UBusiness lending with multilang",
    description: "",
    photos: [UBusiness_1, UBusiness_2, UBusiness_3]
  },
  {
    categories: [ 2 ],
    id: "214d486e-0b5c-4f19-8a25-7399cf7bc18c",
    url: SecretSanta,
    title: "Secret Santa",
    sub_title: "Secret Santa for company croc",
    description: "",
    photos: [secret_santa_1, secret_santa_2, secret_santa_3]
  }
]

export const getProjectById = (id: string) => {
  for (let i = 0; i < portfolioData.length; i++) {
    const element = portfolioData[i];
    if (element.id === id) 
      return element
  }

  return null
}