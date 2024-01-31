import { useState } from 'react';
function Contact() {

    return (
        <main>
            <section id="contact">
                <h2>Contact Me</h2>
                <form>
                    <label>Your Name:</label>
                    <input
                        value=""
                        name="userName"
                        onChange=""
                        type="text"
                        id="contact-name"
                        placeholder="John Doe"
                    />
                    <label>Your Email:</label>
                    <input
                        value=""
                        name="userEmail"
                        onChange=""
                        type="text"
                        id="contact-email"
                        placeholder="johndoe@email.com"
                    />
                    <label>Your Message:</label>
                    <textarea
                        value=""
                        name="message"
                        onChange=""
                        type="message"
                        id="contact-message"
                        placeholder="Your Message"
                    />
                    <button type='button' onClick="">Submit</button>
                </form>
            </section>
        </main>
    );
}
export default Contact;
