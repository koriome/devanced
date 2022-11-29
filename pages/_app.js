import '../styles/globals.css'
import {createBrowserSupabaseClient} from "@supabase/auth-helpers-nextjs";
import {SessionContextProvider} from "@supabase/auth-helpers-react";
import {useState} from "react";

function MyApp({ Component, pageProps }) {
  /**
   * useState is a variable that allows components to remember the state of *something*.
   * apparently it helps with rendering and stuff idk :P
   * In this case, we're assigning variable supabase to use the state of a brand-
   * spankin' new supabase client so that components can track whether a user is logged in and-
   * present data to the user accordingly.
   */
  const [supabase] = useState(
      /* i really can't tell you why but you need an arrow function here or it won't work
      * i don't know why it is the way that it is */
      () => createBrowserSupabaseClient()
  )

  return (
      /**
       * i cannot explain what SessionContextProvider does but it helps with something
       * i THINK that it provides the context of the current user so it's available in every component
       * and so on
       * that would make sense
       * but this shit likes to not make sense
       */
      <SessionContextProvider supabaseClient={supabase} initialSession={pageProps.initialSession}>
      <Component {...pageProps} />
      </SessionContextProvider>
  )
}

export default MyApp
