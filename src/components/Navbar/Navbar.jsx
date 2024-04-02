import styles from "./Navbar.module.css"
import {useContext} from 'react';
import { handleMainPageChangeContext } from "../../App";

function Navbar(){

    const handleMainPageChange = useContext(handleMainPageChangeContext);

    return(    
    <header>
        <nav className={styles.navbar}>
            <a onClick={() => handleMainPageChange("home")}>Home</a>
            <a onClick={() => handleMainPageChange("resume")}>Resume</a>
            <a onClick={() => handleMainPageChange("projects")}>Projects</a>
            <a onClick={() => handleMainPageChange("transcript")}>Transcript</a>
        </nav>
    </header>
    )
}

export default Navbar