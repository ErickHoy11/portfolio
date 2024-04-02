import styles from "./Footer.module.css"

function Footer(){
    return(

    <footer className={styles.footer}>
        <h2>This website was made with HTML, CSS and JavaScript</h2>
        <p>To see projects built using PHP, MySQL, React, Node.js, and WordPress: visit <a href="projects.html">Projects</a></p>
        <p>To see a list of other software developement skills and languages Python, Java, OOP, etc: visit <a href="resume.html">Resume</a></p>
        <p>For proof of 4.0 GPA: visit <a href="transcript.html">Transcript</a></p>
        <p> <a href="https://leetcode.com/erickhoysale/" target="_blank">LeetCode</a>&nbsp;
            <a href="https://linkedin.com/in/erick-hoy-177b101a5" target="_blank">LinkedIn</a>&nbsp;
            <a href="https://github.com/ErickHoy11" target="_blank">GitHub</a></p>
        <br/>
    </footer>
    )
}

export default Footer