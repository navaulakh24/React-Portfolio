import React from "react";

function Contact() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(`Name: ${name}`);
  //   console.log(`Email: ${email}`);
  //   console.log(`Message: ${message}`);
  // };

  return (
    <section id="contact" class="contact">
    <div class="container" data-aos="fade-up">

      <div class="section-title">
        <h2>Contact</h2>
      </div>

      <div class="row mt-5">
        <div class="col-lg-4">
          <div class="info">
            <div class="address">
              <i class="bi bi-geo-alt"></i>
              <h4>Location:</h4>
              <p>Stoney Creek, Ontario, Canada</p>
            </div>

            <div class="email">
              <i class="bi bi-envelope"></i>
              <h4>Email:</h4>
              <p>navdeep_aulakh24@hotmail.com</p>
            </div>

            <div class="phone">
              <i class="bi bi-phone"></i>
              <h4>Call:</h4>
              <p>+1 1234 56789 00</p>
            </div>

          </div>

        </div>

        <div class="col-lg-8 mt-5 mt-lg-0">

          <form action="forms/contact.php" method="post" role="form" class="php-email-form">
            <div class="row">
              <div class="col-md-6 form-group">
                <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required />
              </div>
              <div class="col-md-6 form-group mt-3 mt-md-0">
                <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required />
              </div>
            </div>
            <div class="form-group mt-3">
              <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required />
            </div>
            <div class="form-group mt-3">
              <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
            </div>
            <div class="my-3">
              <div class="loading">Loading</div>
              <div class="error-message"></div>
              <div class="sent-message">Your message has been sent. Thank you!</div>
            </div>
            <div class="text-center"><button type="submit">Send Message</button></div>
          </form>

        </div>

      </div>

    </div>
  </section>

    // <div className="main-container p-5">
    //   <div className="container">
    //     <form onSubmit={handleSubmit}>
    //       <h4 className="text text-center">Get in Touch</h4>
    //       <div className="mb-3">
    //         <label htmlFor="name" className="form-label text">Name</label>
    //         <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
    //       </div>
    //       <div className="mb-3">
    //         <label htmlFor="email" className="form-label text">Email address</label>
    //         <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
    //       </div>
    //       <div className="mb-3">
    //         <label htmlFor="message" className="form-label text">Message</label>
    //         <textarea className="form-control" id="message" rows="5" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
    //       </div>
    //       <button type="submit" className="btn btn-primary bgBtn">Send</button>
    //     </form>
    //   </div>
    // </div>
  );
}

export default Contact;

