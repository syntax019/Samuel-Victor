import React from "react";
import Navbar from "./components/NavBar/Navbar";
import Intro from "./components/Intro/Intro";
import Skill from "./components/Skills/Skill";
import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}
