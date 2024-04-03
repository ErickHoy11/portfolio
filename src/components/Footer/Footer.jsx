import styles from "./Footer.module.css"
import {useContext} from 'react';
import { handleMainPageChangeContext } from "../../App";

function Footer(){

    const handleMainPageChange = useContext(handleMainPageChangeContext);
    return(

    <footer className={styles.footer}>
        <h2>This website was made with the React.js Library</h2>
        <p>To see projects built using PHP, MySQL, React, and WordPress: visit <a onClick={() => handleMainPageChange("projects")}>Projects</a></p>
        <p>To see a list of other software developement skills (Python, Java, OOP, etc): visit <a onClick={() => handleMainPageChange("resume")}>Resume</a></p>
        <p>For proof of 4.0 GPA: visit <a onClick={() => handleMainPageChange("transcript")}>Transcript</a></p>
        <p> <a href="https://leetcode.com/erickhoysale/" target="_blank">LeetCode</a>&nbsp;
            <a href="https://linkedin.com/in/erick-hoy-177b101a5" target="_blank">LinkedIn</a>&nbsp;
            <a href="https://github.com/ErickHoy11" target="_blank">GitHub</a></p>
        <br/>
    </footer>
    )
}

export default Footer