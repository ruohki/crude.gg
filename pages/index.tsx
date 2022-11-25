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
        <title>&lt;Crude&gt; Raiding guild on EU-Golemagg</title>
        <meta name="description" content="Guild landingpage" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className={styles.main}>
        <Logo />
        <div style={{ width: 200, marginTop: '2rem', display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
          <a href="https://de.classic.warcraftlogs.com/guild/eu/golemagg/crude">
            <Image src={wl} alt="Warcraft Logs" width={48} height={48}></Image>
          </a>
          <Link href="/discord">
            <Image src={discord} alt="Discord" width={48} ></Image>
          </Link>
        </div>
      </main>
    </div>
  )
}
