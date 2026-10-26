function About({ goHome }) {
    return (
        <section>
            <h2>About This Website</h2>
            <p>
                The purpose of this class website is to showcase our class, present
                our students, and share information about the Software Development
                trade with visitors, parents, and future students.
            </p>

            <h3>About the Software Development Trade</h3>
            <p>
                Software Development is a trade that trains students to design, build,
                test, and deploy software applications. Students learn to work with
                modern programming languages, frameworks, and tools used in the
                industry, including ReactJS, JavaScript, and version control with Git.
            </p>

            <h3>Subjects and Skills Learned</h3>
            <ul>
                <li>Front-End Web Development (HTML, JavaScript, ReactJS)</li>
                <li>Back-End Programming and Databases</li>
                <li>Version Control with Git and GitHub</li>
                <li>UI/UX Design Principles</li>
                <li>Deployment and DevOps Basics (Vercel, CI/CD)</li>
            </ul>

            <button onClick={goHome}>Back to Home</button>
        </section>
    );
}

export default About;