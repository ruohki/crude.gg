import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>&lt;Crude&gt; - Raiding guild on EU-Golemagg</title>
        <meta name="description" content="Guild landingpage" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          soon.
        </h1>
      </main>
    </div>
  )
}
