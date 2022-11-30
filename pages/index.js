import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useSession, useSupabaseClient} from "@supabase/auth-helpers-react";
import Account from "../components/account";
import TheButton from "../components/thebutton";


export default function Home() {
    const session = useSession()
    const supabase = useSupabaseClient()

    /**
     * as you would probably expect, this function signs you in with twitch using supabase magic.
     */
    async function signInWithTwitch() {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'twitch',
            options: {
                redirectTo: window.location.origin
            },
        })
    }

  return (
    <div className={styles.container}>
      <Head>
        <title>Devanced</title>
        <meta name="description" content="under construction !?" />
        <link rel="icon" href="/devancedico.ico" />
      </Head>

      <main className={styles.main}>
          {!session ? (
              <button onClick={signInWithTwitch}>sign in with twitch... NOW!</button>
          ) : (
              <div>
              <Account />
              <TheButton />
              </div>
          )}
      </main>

    </div>
  )
}
