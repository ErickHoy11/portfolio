import styles from "./Footer.module.css"

import { Link } from 'react-router-dom';


function Footer(){

    return(

    <footer className={styles.footer}>
        <h2>This website was made with the React.js Library</h2>
        <p>To see projects built using PHP, MySQL, React, and WordPress: visit <Link to={"/Projects"}>Projects</Link></p>
        <p>To see a list of other software developement skills (Python, Java, OOP, etc): visit <Link to={"/Resume"}>Resume</Link></p>
        <p> <a href="https://leetcode.com/erickhoysale/" target="_blank">LeetCode</a>&nbsp;
            <a href="https://linkedin.com/in/erick-hoy-177b101a5" target="_blank">LinkedIn</a>&nbsp;
            <a href="https://github.com/ErickHoy11" target="_blank">GitHub</a></p>
        <br/>
    </footer>
    )
}

export default Footer