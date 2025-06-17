import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef(); // ✅ Declare useRef inside the component

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_xj74ggc",
      "template_792vkuo",
      form.current,
      "p6OR3xZ0afJ3-rpu1"
    )
    .then(
      (result) => {
        alert("Message sent successfully!");
        form.current.reset(); // ✅ Clear form after success
      },
      (error) => {
        alert("Message failed. Please try again.");
        console.error(error.text);
      }
    );
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <button className="contact-badge">● contact form</button>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="form-row">
            <input type="text" name="name" placeholder="Name" className="contact-input" required />
            <input type="email" name="email" placeholder="Email" className="contact-input" required />
          </div>
          <textarea name="message" placeholder="Message" className="contact-textarea" required />
          <button type="submit" className="contact-send">Send</button>
        </form>
      </div>
    </section>
    
  );
};

export default Contact;
