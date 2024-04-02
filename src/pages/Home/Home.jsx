import styles from "./Home.module.css"
import headshot from "../../assets/images/erick_hoy_headshot.png"

function Home(){

    function handleHireButton(){
        const heroBannerRight = document.querySelector(`.${styles.hero_banner_right}`);
        console.log(heroBannerRight)

        heroBannerRight.innerHTML = `
        <p>Unfortunately, I can't program how to hire myself at your company</p>
        <p>Instead, here is my contact information:</p>
        <h1>Erick Hoy</h1>
        <p>Phone: 570-377-0932</p>
        <p>Email: <a href="mailto:erickhoy11@gmail.com">erickhoy11@gmail.com</a></p>
        `;
    }

    return(
        <>
        <main className={styles.main}>
            <section className={styles.hero_banner}>
                <div className={styles.hero_banner_left}>
                    <img src={headshot} alt="Erick Hoy Lock Haven"/>
                </div>
                <div className={styles.hero_banner_right}>
                    <h1>Erick Hoy</h1>
                    <p>Aspiring Software Developer</p>
                    <p>December 2023 Commonwealth University Graduate</p>
                    <button onClick={handleHireButton}>Hire Now</button>
                </div>
            </section>
        </main>
        </>
    )
}

export default Home