import styles from "./Transcript.module.css"
import pdf from "../../assets/pdf/transcript.pdf"

function Transcript(){
    return (
        <main>
        {/*title*/}
        <h1 className={styles.main_title}>Transcript</h1>

        {/*transript*/}
        <section className={styles.pdf}>
            <iframe src={pdf} className={styles.iframe}></iframe>
        </section>
    </main>
    )
}

export default Transcript