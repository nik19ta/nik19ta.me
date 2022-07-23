import React from 'react'

import styles from '../styles/Home.module.css'

import Footer from '../components/Footer'
import Service from '../components/Service'
import Portfolio from '../components/Portfolio'
import About from '../components/About'
import Prewiew from '../components/Prewiew'


const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Prewiew />
      <About />
      <Portfolio />
      <Service />
      <Footer />
    </div>
  )
}

export default Home;
