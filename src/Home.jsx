import { useState } from 'react';

function Home({ schoolName, className, goTo }) {
    const [clicks, setClicks] = useState(0);

    return (
        <section>
            <h2>Welcome to {schoolName}</h2>
            <h3>Class: {className}</h3>
            <p>
                Welcome to our class website! We are a group of passionate students
                learning Software Development at {schoolName}. This website presents
                who we are, what we study, and how to reach us.
            </p>
            <p>
                Our class focuses on front-end and back-end development, teamwork, and
                real-world problem solving using modern technologies such as ReactJS.
            </p>

            <h3>Navigation</h3>
            <ul>
                <li><button onClick={() => goTo('about')}>Go to About</button></li>
                <li><button onClick={() => goTo('students')}>View Students</button></li>
                <li><button onClick={() => goTo('contact')}>Contact Us</button></li>
            </ul>

            <h3>Interactive Counter (useState Demo)</h3>
            <p>You have clicked the button {clicks} time(s).</p>
            <button onClick={() => setClicks(clicks + 1)}>Click Me</button>
            <button onClick={() => setClicks(0)}>Reset</button>
        </section>
    );
}

export default Home;