import type { NextPage } from 'next'
import Head from 'next/head'

import styles from '../styles/Home.module.css'

import Footer from '../components/Footer'
import Service from '../components/Service'
import Portfolio from '../components/Portfolio'
import About from '../components/About'
import Prewiew from '../components/Prewiew'


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>nik19ta.me</title>
        <meta name="description" content="nik19ta's website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Prewiew />
      <About />
      {/* <Portfolio /> */}
      {/* <Service /> */}
      {/* <Footer /> */}
    </div>
  )
}

export default Home;
