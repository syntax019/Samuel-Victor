import React from "react";
import "./Project.css";
import tipCal from "../../assets/tipCalutor.jpg";
import RandomAdvice from "../../assets/adviceApp.jpg";
import newLetter from "../../assets/newsletter.jpg";
import travelTodo from "../../assets/react22i.png";
import shortly from "../../assets/shortly.png";
import opay from "../../assets/opay.png";

export default function Project() {
  return (
    <section className="project-section">
      <h2>Projects</h2>
      <p>
        I have worked on different range of projects, Here are some of my
        projects
      </p>
      <div className="project" id="project">
        <div className="projectDone project1">
          <img src={shortly} alt="" />
          <h3>
            <a
              href="https://tip-calculator-o6gz.vercel.app"
              className="projectTitle"
            >
              Shortly- Link Shortener
            </a>
          </h3>
          <div className="projectDescription">
            A simple and easy to use web application that helps to shorten the
            size of customs long links generated from social media apps and blog
            sites. Implemented rapid API and other technologies
          </div>
        </div>
        <div className="projectDone project2">
          <img src={opay} alt="" />
          <h3>
            <a href="https://opay-jade.vercel.app/" className="projectTitle">
              Opay(CLONED)- Banking app
            </a>{" "}
          </h3>
          <div className="projectDescription">
            A Simple landing page for the web app showing a cloned features that
            is been used by the real app in real-time.Written in HTML, CSS and
            JavaScript.{" "}
          </div>
        </div>
        <div className="projectDone project3">
          <img src={tipCal} alt="" />
          <h3>
            <a
              href="https://tip-calculator-o6gz.vercel.app"
              className="projectTitle"
            >
              Tip Calculator
            </a>
          </h3>
          <div className="projectDescription">
            <p>
              A web application used for double checking the accuracy of tip
              charges. Designed the user-interface for seamles work using HTML
              and CSS with user-interactions using JavaScript
            </p>
          </div>
        </div>
        <div className="projectDone project4">
          <img src={RandomAdvice} alt="" />
          <h3>
            <a
              href="https://advice-generator-eight-brown.vercel.app/"
              className="projectTitle"
            >
              Random Advice Generator{" "}
            </a>
          </h3>
          <div className="projectDescription">
            This program helps display a randomly selected advice each time the
            user clicks a button. It helps you generate a random advice for you
            to use in your daily life.
          </div>
        </div>
        <div className="projectDone project5">
          <img src={newLetter} alt="" />
          <h3>
            <a
              href="https://new-letter-5wsh.vercel.app"
              className="projectTitle"
            >
              Newsletter Sign-up Form{" "}
            </a>
          </h3>
          <div className="projectDescription">
            A simple project that includes form structure, validation and
            submission. It shows a success message when inputed a valid Email.
          </div>
        </div>
        <div className="projectDone project6">
          <img src={travelTodo} alt="" />
          <h3>
            <a
              href="https://travel-todo-list-ivory.vercel.app"
              className="projectTitle"
            >
              Travel Todo List
            </a>
          </h3>
          <div className="projectDescription">
            An application that allows user especially travelers input items
            that needed to be packed for travel and allows them mark and delete
            items that has been packed.
          </div>
        </div>
      </div>
      <a href="https://github.com/syntax019">
        <button className="seeAll">See All</button>
      </a>
    </section>
  );
}
