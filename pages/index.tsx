import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import wl from '../public/wl.png';
import discord from '../public/discord-mark-white.png'
import Logo from './components/logo'
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome to &lt;Crude&gt;</title>
        <meta name="description" content="Raiding guild on EU-Golemagg" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className={styles.main}>
        <Logo />
        <h1 className={styles.headline}>&lt;Raiding Guild on EU-Golemagg&gt;</h1>
        <div className={styles.buttons}>
          <a href="https://classic.warcraftlogs.com/guild/eu/golemagg/crude">
            <Image className={styles.button} src={wl} alt="Warcraft Logs" width={48} height={48}></Image>
          </a>
          <Link href="/discord">
            <Image className={styles.button} src={discord} alt="Discord" width={48} ></Image>
          </Link>
        </div>
      </main>
    </div>
  )
}
