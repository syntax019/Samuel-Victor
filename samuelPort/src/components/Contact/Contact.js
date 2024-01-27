import React, { useRef } from "react";
import "./Contact.css";
import FacebookIcon from "../../assets/facebook-icon.png";
import TwitterIcon from "../../assets/twitter.png";
import Linkedin from "../../assets/linkedin.png";
import InstagramIcon from "../../assets/instagram.png";
import gitHub from "../../assets/github.png";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "syntax001",
        "template_vjn9zfg",
        form.current,
        "pzcMVZrDU1HVRs1TQ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="contact-section" id="contact">
      <h2>Contact Me</h2>
      <p>Let's Discuss work opportunities</p>

      <form className="contactForm" ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          className="name"
          placeholder="Your Name"
          name="from_name"
        />
        <input
          type="email"
          className="email"
          placeholder="Your Email"
          name="from_email"
        />
        <textarea
          name="message"
          id=""
          cols="30"
          rows="10"
          placeholder="Your Message"
          className="message"
        ></textarea>
        <button type="submit" value="Send" className="submitBtn">
          Send
        </button>
        <div className="links">
          <a href="https://www.linkedin.com/in/samuel-edubio-b6a11a2a2/">
            <img src={Linkedin} alt="" className="link" />
          </a>
          <a href="https://web.facebook.com/Sammie2591/">
            <img src={FacebookIcon} alt="" className="link" />
          </a>
          <a href="https://twitter.com/_syntax19">
            <img src={TwitterIcon} alt="" className="link" />
          </a>
          <a href="https://www.facebook.com">
            <img src={InstagramIcon} alt="" className="link" />
          </a>
          <a href="https://github.com/syntax019">
            <img src={gitHub} alt="" className="link" />
          </a>
        </div>
      </form>
    </section>
  );
}
