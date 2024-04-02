import PropTypes from 'prop-types'
import styles from "./ProjectCategory.module.css"

function ProjectCategory(props){

    const categoryProjects = props.projects.map((project) =>(

        <div className={styles.project} key={project.description}>
        <h2><a href={project.link} target="_blank">{project.name}</a></h2>
        <div className={styles.project_left_right_organizer}>
            <div className={styles.project_left}>
                <ul>
                    {project.technologies.map((technology, index) => (
                        <li key={index}>{technology}</li>
                    ))}
                </ul>
            </div>
            <div className={styles.project_right} >
                    <img src={project.thumbnail} alt="" />
            </div>
        </div>
        <p className={styles.project_description}>{project.description}</p>
        </div>


    ))

    return(
        <>
            {/*project category*/}
            <h2 className={styles.project_category_title}>{props.category}</h2>

            {/*project*/}
            {categoryProjects}
        </>
    )
}

ProjectCategory.propTypes = {
    category: PropTypes.string,
    projects: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        description: PropTypes.string,
        technologies: PropTypes.arrayOf(PropTypes.string),
        thumbnail: PropTypes.string,
        link: PropTypes.string
    }))

}

export default ProjectCategory