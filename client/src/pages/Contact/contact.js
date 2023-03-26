import React, { useState } from "react";
import '../Contact/contact.css';

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);
  };

  return (
    <div className="main-container p-5">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h4 className="text text-center">Get in Touch</h4>
          <div className="mb-3">
            <label htmlFor="name" className="form-label text">Name</label>
            <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label text">Email address</label>
            <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label text">Message</label>
            <textarea className="form-control" id="message" rows="5" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
          </div>
          <button type="submit" className="btn btn-primary bgBtn">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;

