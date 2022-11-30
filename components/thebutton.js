import Image from "next/image";
import styles from "../styles/TheButton.module.css";


export default function TheButton() {

    return(
        <div>
            <div className={styles.main}>
                <h2>i don't know what this button does, really...</h2>
                <button className={styles.thebutton}>
                    <Image src="/devancedico.ico" alt="the devanced ico" height={50} width={50} />
                </button>
            </div>
        </div>
    )
}