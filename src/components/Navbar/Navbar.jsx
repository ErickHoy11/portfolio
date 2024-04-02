import styles from "./Navbar.module.css"

function Navbar(){
    return(    
    <header>
        <nav className={styles.navbar}>
            <a href="index.html">Home</a>
            <a href="resume.html">Resume</a>
            <a href="projects.html">Projects</a>
            <a href="transcript.html">Transcript</a>
        </nav>
    </header>
    )
}

export default Navbar