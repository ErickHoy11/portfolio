import styles from "./Projects.module.css"
import ProjectCategory from "./ProjectCategory/ProjectCategory"

import calcultorThumbnail from "../../assets/images/project_thumbnails/calculator_thumbnail.jpg"
import secondsAliveThumbnail from "../../assets/images/project_thumbnails/seconds_alive_thumbnail.jpg"
import pokedexThumbnail from "../../assets/images/project_thumbnails/pokedex_thumbnail.jpg"
import cwuGradTrackerThumbnail from "../../assets/images/project_thumbnails/cwugradtracker_thumbnail.jpg"
import primeManagementLLCThumbnail from "../../assets/images/project_thumbnails/prime_management_llc_thumbnail.jpg"
import counterThumbnail from "../../assets/images/project_thumbnails/counter_thumbnail.jpg"
import valentineThumbnail from "../../assets/images/project_thumbnails/valentine_thumbnail.jpg"
import toDoThumbnail from "../../assets/images/project_thumbnails/to_do_list_thumbnail.jpg"


function Projects(){

    const htmlProjects = [
        {
          name: "Calculator",
          description:"Basic calculator. Demonstrates dynamic response with javascript.",
          technologies:["HTML, CSS","JavaScript"],
          thumbnail: calcultorThumbnail,
          link: "https://erickhoy.com/projects/calculator/index.html",
        },
        {
          name: "Seconds Alive",
          description:"Javascript updates on a one second time interval. Calculates user age in seconds. Displays user's time left to live.",
          technologies:["HTML, CSS","JavaScript", "Time Intervals", "Browser Date/Time"],
          thumbnail: secondsAliveThumbnail,
          link: "https://erickhoy.com/projects/seconds_alive/index.html",
        },
        {
          name:"Pokedex",
          description:"Demonstrates fetching and displaying data from a third party REST API.",
          technologies:["HTML, CSS","JavaScript", "Asycronous Code", "Async Await", "REST API", "JSON"],
          thumbnail: pokedexThumbnail,
          link: "https://erickhoy.com/projects/pokedex/index.html",
        }
    ];

    const phpProjects = [
        {
          name:"Commonwealth University Graduation Tracker",
          description:"A half-semester project that allows students from Commonwealth University to track their courses and graduation progress. User sign-up, login, and course-selector functionality demonstrate live communication between the relational database and the end user. Feel free to try sign up and couse selection.",
          technologies:["HTML, CSS","JavaScript","PHP Backend","SQL","MySQL Database", "Web Hosting"],
          thumbnail: cwuGradTrackerThumbnail,
          link: "https://cwugradtracker.website/COMP475-Graduation-Tracker/web-pages/index.php",
        }
    ];

    const wordPressProjects = [
        {
          name:"Prime Management LLC",
          description:"Paid work experience. Created and hosted a website for Prime Management LLC (Apartment Rental Agency) with 3 apartment complexes. Main request from clients was to incorporate a gallery of pictures and walkthrough video for each complex. Best SEO practices used.",
          technologies:["WordPress","Elementor","Wordfence Security","Yoast SEO", "Mobile-First Developement"],
          thumbnail: primeManagementLLCThumbnail,
          link: "https://primemanagementllcstatecollege.com/",
        }
    ];

    const reactProjects = [
        {
            name:"Counter",
            description:"A super simple counter project made with react.",
            technologies:["HTML, CSS", "JavaScript", "React"],
            thumbnail: counterThumbnail,
            link: "https://erickhoy.com/projects/react_counter/index.html",
        },
        {
            name:"Valentine",
            description:"A penguin asks you to be his Valentine! You should say no...",
            technologies:["HTML, CSS", "JavaScript", "React", "useState Hook"],
            thumbnail: valentineThumbnail,
            link: "https://erickhoy.com/projects/valentine/index.html",
        },
        {
            name:"To Do",
            description:"To Do list with React State Hook",
            technologies:["HTML, CSS", "JavaScript", "React", "useState Hook"],
            thumbnail: toDoThumbnail,
            link: "https://erickhoy.com/projects/to_do_list/index.html",
        },
    ];

    return(
    <main className={styles.main}>
        {/*title*/}
        <h1 className={styles.main_title}>Projects</h1>

        {/*projects*/}
        <section>
            <ProjectCategory category="HTML, CSS, JavaScript" projects={htmlProjects}/>
            <ProjectCategory category="Fullstack (PHP, MySQL)" projects={phpProjects}/>
            <ProjectCategory category="Wordpress" projects={wordPressProjects}/>
            <ProjectCategory category="React" projects={reactProjects}/>
        </section>

    </main>
    )

}

export default Projects