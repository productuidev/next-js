import type { NextPage } from 'next'
// import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Menu from '../components/Menu'
import Banner from '../components/Banner'
import LectureGroup from '../components/lecture/LectureGroup'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Menu />
      <Banner />
      <LectureGroup />
      <Footer />
    </div>
  )
}

export default Home
