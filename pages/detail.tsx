import type { NextPage } from 'next'
// import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Menu from '../components/Menu'
import Banner from '../components/Banner'
import LectureList from '../components/lecture/LectureList'
import Footer from '../components/Footer'

const Detail: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Menu />
      <Banner />
      <LectureList />
      <Footer />
    </div>
  )
}

export default Detail
