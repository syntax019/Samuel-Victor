import React from "react";
import "./Intro.css";
import bg from "../../assets/image2.png";
import resume from "../../assets/resume.pdf";

export default function Intro() {
  return (
    <section className="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm{" "}
          <span className="introName">
            Samuel Edubio, <br />
          </span>
          Front-End Developer
        </span>
        <p className="introPara">
          I am a skilled Front-end Web Developer who is passionate about
          creating and engaging user experience and interface design with my
          expertise in React and JavaScript.
        </p>
        <a href={resume} download="Resume">
          <button className="btn">Check Resume</button>
        </a>
      </div>
      <img src={bg} alt="profile" className="bg" />
    </section>
  );
}
