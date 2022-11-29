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
          view our progress <a href="https://github.com/koriome/devanced">here!</a>
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
