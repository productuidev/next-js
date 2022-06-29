import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Detail: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fastcampus</title>
        <meta name="description" content="Next.js 활용한 Fastcampus Site 구현" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav aria-label="fastcampus">fastcampus</nav>

      <div role="banner"></div>

      <div title="lectureList">
        <h1>강의목록</h1>
      </div>

      <footer className={styles.footer}>
        footer
      </footer>
    </div>
  )
}

export default Detail
