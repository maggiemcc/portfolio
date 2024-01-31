import { useState } from 'react';

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const validateEmail = (email) => {
        return String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
      };

    const handleInput = (event) => {
        const { target } = event;
        const formInput = target.name;
        const inputValue = target.value;

        if (formInput === "name") {
            setName(inputValue);
        } else if (formInput === "email") {
            setEmail(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (!name) {
            setErrorMessage("Please enter a name");
            return;
        }
        if (!validateEmail(email)) {
            setErrorMessage("Email is invalid");
            return
        }
        if (!message) {
            setErrorMessage("Please enter a message");
            return;
        }
        setName("");
        setEmail("");
        setMessage("");
        setErrorMessage("");
    };

    return (
        <main>
            <section id="contact">
                <h2>Contact Me</h2>
                <form>
                    <label>Your Name:</label>
                    <input
                        value={name}
                        name="name"
                        onChange={handleInput}
                        type="text"
                        id="contact-name"
                        placeholder="John Doe"
                    />
                    <label>Your Email:</label>
                    <input
                        value={email}
                        name="email"
                        onChange={handleInput}
                        type="text"
                        id="contact-email"
                        placeholder="johndoe@email.com"
                    />
                    <label>Your Message:</label>
                    <textarea
                        value={message}
                        name="message"
                        onChange={handleInput}
                        type="message"
                        id="contact-message"
                        placeholder="Your Message"
                    />
                    <button type='button' onClick={handleFormSubmit}>Submit</button>
                    {errorMessage && <div className='errorMessage'><p>** {errorMessage} **</p></div>}
                </form>
            </section>
        </main>
    );
}
export default Contact;
