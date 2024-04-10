import styles from "./Navbar.module.css"

import { Link } from 'react-router-dom';

export default function Navbar(){

    return(    
        <header>
            <nav className={styles.navbar}>
                <Link to={""}>Home</Link>
                <Link to={"/Resume"}>Resume</Link>
                <Link to={"/Projects"}>Projects</Link>
                <Link to={"/Transcript"}>Transcript</Link>
            </nav>
        </header>
    )
}