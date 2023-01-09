import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
function Contact() {
  return (
    <div>
      <section id="contact">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <MdOutlineEmail className="contact__option-icon" />
              <h4>Email</h4>
              <h5>hiitechz07@gmail.com</h5>
              <a href="mailto:hiitechz07@gmail.com">Send a message</a>
            </article>
            <article className="contact__option">
              <RiMessengerLine className="contact__option-icon" />
              <h4>Messanger</h4>
              <h5>RjSonuKd</h5>
              <a href="https://m.me//rjsonu.kd">Send a message</a>
            </article>
            <article className="contact__option">
              <BsWhatsapp className="contact__option-icon" />
              <h4>Whatsapp</h4>
              <h5>9170412775</h5>
              <a href="https://api.whatsapp.com/send?Phone+9179412775">
                Send a message
              </a>
            </article>
          </div>
          {/**END OF THE  CONTACT OPTIONS */}
          <form action="">
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              required
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email "
              required
            />
            <textarea
              placeholder="Send a message"
              name="message "
              id="message "
              rows="7"
            ></textarea>
            <button type=" submit" className="btn btn-primary ">
              Send a messag
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
