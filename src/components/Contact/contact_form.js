import React from "react";
import emailjs from "emailjs-com";

export const ContactForm = () => {
  const sendMessage = (e) => {
    e.preventDefault();

    emailjs.sendForm("set_national_gmail", "template_vjd74wMr", e.target, "user_n6VXM67qmVMaCewsRmJT8")
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        }).then(() => {
      document.getElementById("contact-form").reset();
    });
  }

  return (
      <form id="contact-form" onSubmit={sendMessage}>
        <div className="row">
          <div className="col-12 col-md-6">
            <input type="text" className="input-text" name="from_name" required/>
            <span className="floating-label">Your name</span>
          </div>
          <div className="col-12 col-md-6">
            <input type="email" className="input-text" name="reply_to" required/>
            <span className="floating-label">Your email</span>
          </div>
          <div className="col-12">
            <textarea className="input-textarea" placeholder="Your message" rows="6" name="message_html" required />
          </div>
          <div className="col-12 d-flex justify-content-end">
            <input type="submit" className="submit-button button" value="Send Message" />
          </div>
        </div>
      </form>
  );
}
