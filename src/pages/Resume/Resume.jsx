import styles from "./Resume.module.css"

function Resume(){
    return(
    <>
        {/*resume*/}
        <h1 className={styles.main_title}>Resume</h1>

        <main className={styles.main}>

            {/* Resume */}
            <section className={styles.resume}>

                {/*contact info*/}
                <section className={styles.resume_contact}>
                    <h2>Frederick (Erick) Hoy</h2>
                    <h3>Cell Phone: 570-377-0932</h3>
                    <h3>erickhoy11@gmail.com</h3>
                    <h4>Mill Hall, PA 17751</h4>
                </section>

                <hr/>

                {/*objectve*/}
                <section>
                    <h2 className={styles.resume_section_title}>Objective</h2>
                    <p>I am seeking a position as a web developer to utilize my software development, testing and maintenance expertise.</p>
                </section>

                {/*education*/}
                <section>
                    <h2 className={styles.resume_section_title}>Education</h2>
                    <p>Lock Haven University; Lock Haven, PA</p>
                    <p>Bachelor of Science, Computer Science, Dec. 2023</p>
                    <p className={styles.gpa}>GPA 4.0</p>
                    <p>Minor in Business</p>
                </section>

                {/* <!--work experience--> */}
                <section className={styles.work_experience}>
                    <h2 className={styles.resume_section_title}>Work Experience</h2>
                    <p>Lock Haven University - Lock Haven, PA</p>
                    <div className={styles.work_experience_attributes}>
                        <p>IT Department</p>
                        <p>Student Technician</p>
                        <p className={styles.work_experience_date}>March 2021 - January 2024</p>
                    </div>
                    <hr/>
                    <ul>
                        <li>Communicate with faculty, staff, and students to troubleshoot technology issues</li>
                        <li>Remotely connect to computers through Microsoft quick assist to troubleshoot issues</li>
                        <li>Troubleshoot issues with laptops, desktops, virtual machines, and printers on campus</li>
                        <li>Hardware and software diagnostics and repair</li>
                    </ul>

                    <br/>

                    <p>First Quality Products - McElhatten, PA</p>
                    <div className={styles.work_experience_attributes}>
                        <p>IT Department</p>
                        <p>Intern Technician</p>
                        <p className={styles.work_experience_date}>August 2019 - March 2020</p>
                    </div>
                    <hr/>
                    <ul>
                        <li>Troubleshoot and resolve issues with various computer systems</li>
                        <li>Use a ticketing system to create and resolve work requests</li>
                    </ul>
                </section>

                {/*relevant skills*/}
                <section>
                    <h2 className={styles.resume_section_title}>Relevant Skills</h2>
                    <ul>
                        <li>Proficient in HTML and CSS</li>
                        <li>Proficient in JavaScript for dynamic website response</li>
                        <li>Experience with React.js</li>
                        <li>Knowledge of Typescript</li>
                        <li>Experience contacting JSON-based APIs to retrieve and display information</li>
                        <li>Experience with PHP for backend development</li>
                        <li>Proficient in relational database design and SQL</li>
                        <li>Proficient in WordPress with Elementor Page Builder</li>
                        <li>Proficient in Python programming language</li>
                        <li>Proficient in Java programming language</li>
                        <li>Proficient in Object-oriented programming concepts</li>
                        <li>Experience with Git/GitHub for version control</li>
                        <li>Experience in Search Engine Optimization</li>
                    </ul>
                </section>

                {/*projects*/}
                <section>
                    <h2 className={styles.resume_section_title}>Projects</h2>
                    <p><a href="https://erickhoy.com/projects.html">https://erickhoy.com/projects</a></p>
                    <p>Please visit this site to see a collection of my web development projects.</p>
                </section>

                {/*references*/}
                <section className={styles.resume_references}>
                    <h2 className={styles.resume_section_title}>References</h2>
                    <div className={styles.reference_flexbox}>
                        <p>Dr. Richa Sharma</p>
                        <p>Professor of Computer Science at LHU</p>
                    </div>
                    <div className={styles.reference_flexbox}>
                        <p>Phone: (570) 484-2493</p>
                        <p>Email: rxs24@commonwealthu.edu</p>
                    </div>

                    <br/>

                    <div className={styles.reference_flexbox}>
                        <p>Mrs. Joan Walker</p>
                        <p>Manager of IT Student Technicians</p>
                    </div>
                    <div className={styles.reference_flexbox}>
                        <p>Phone: (570) 484-2397</p>
                        <p>Email: jlwalker@commonwealthu.edu</p>
                    </div>

                    <br/>
                    
                    <div className={styles.reference_flexbox}>
                        <p>Mr. Jamie Walker</p>
                        <p>IT Distribution Systems Specialist at LHU</p>
                    </div>
                    <div className={styles.reference_flexbox}>
                        <p>Phone: (570) 484-3057</p>
                        <p>Email: jrwalker@commonwealthu.edu</p>
                    </div>
                </section>
            </section>

        </main>

    </>
    )
}

export default Resume