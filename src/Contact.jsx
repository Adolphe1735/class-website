function Contact({ goHome }) {
    const handleEmailClick = () => {
        alert('Thank you for your interest! You can also email us at info@rtbnyamata.ac.rw');
    };

    return (
        <section>
            <h2>Contact Us</h2>

            <h3>School Information</h3>
            <p><strong>School Name:</strong> RTB Nyamata TVET School</p>
            <p><strong>Location:</strong> Nyamata, Bugesera District, Eastern Province, Rwanda</p>

            <h3>Email</h3>
            <p>
                Contact us at:{' '}
                <a href="mailto:info@rtbnyamata.ac.rw">info@rtbnyamata.ac.rw</a>
            </p>

            <h3>More Actions</h3>
            <button onClick={handleEmailClick}>Send Us a Message</button>{' '}
            <button onClick={goHome}>Back to Home</button>
        </section>
    );
}

export default Contact;