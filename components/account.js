import {useEffect, useState} from "react";
import {useSupabaseClient, useUser} from "@supabase/auth-helpers-react";
import Image from "next/image";
import styles from "../styles/Account.module.css";

export default function Account({ session }) {
    const supabase = useSupabaseClient()
    const user = useUser()
    const [loading, setLoading] = useState(true)
    const [username, setUsername] = useState(null)
    const [avatar_url, setAvatarUrl] = useState(null)

    useEffect(() => {
        getProfile()
    }, [session])

    async function getProfile() {
        try{
            setLoading(true)

            let { data, error, status } = await supabase
                .from('profiles')
                .select(`username, avatar_url`)
                .eq('id', user.id)
                .single()

            if(error && status !== 406) {
                throw error
            }

            if(data) {
                setUsername(data.username)
                setAvatarUrl(data.avatar_url)
            }
        } catch (error) {
            alert("error loading user data!")
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    async function signOutPlease() {
        let { error } = await supabase.auth.signOut()
    }

    return (
        <div className={styles.main}>
            <p> this is the account page </p>
            <p>your username is {username}</p>
            <img id={styles.silly} src={avatar_url} />
            <p>i'm counting having all this as a success</p>
            <button className={styles.buttonsilly} onClick={signOutPlease}>sign me out!</button>
        </div>
    )
}