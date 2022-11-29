import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Devanced</title>
        <meta name="description" content="under construction !?" />
        <link rel="icon" href="/devancedico.ico" />
      </Head>

      <main className={styles.main}>
        <Image
        src="/devancedtemp.png"
        height={116}
        width={915}
        alt="A temporary Devanced logo" />

        <p className={styles.title}>is under construction!</p>

        <p className={styles.description}>
          view our progress <a
            href="https://github.com/koriome/devanced"
            target="_blank"
            rel="noopener noreferrer"
        >here!
        </a>
        </p>
      </main>

    </div>
  )
}
