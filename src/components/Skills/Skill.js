import React from "react";
import "./Skill.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

export default function Skill() {
  return (
    <section className="skills-section" id="skill">
      <h2>Skills</h2>
      <p>
        Here are some of my skills on which I have been working on for the past
        months
      </p>
      <div className="skills">
        <div className="frontendSkills">
          <h3 className="skillsHead">Frontend Development</h3>
          <div className="gridSkills">
            <article>
              <BsFillPatchCheckFill className="tickedIcon"></BsFillPatchCheckFill>
              <div>
                <h4>HTML</h4>
              </div>
            </article>
            <article>
              <BsFillPatchCheckFill className="tickedIcon"></BsFillPatchCheckFill>
              <div>
                <h4>CSS</h4>
              </div>
            </article>
            <article>
              <BsFillPatchCheckFill className="tickedIcon"></BsFillPatchCheckFill>
              <div>
                <h4>JavaScript</h4>
              </div>
            </article>
            <article>
              <BsFillPatchCheckFill className="tickedIcon"></BsFillPatchCheckFill>
              <div>
                <h4>React</h4>
              </div>
            </article>
            <article>
              <BsFillPatchCheckFill className="tickedIcon"></BsFillPatchCheckFill>
              <div>
                <h4>WordPress</h4>
              </div>
            </article>
            <article>
              <BsFillPatchCheckFill className="tickedIcon"></BsFillPatchCheckFill>
              <div>
                <h4>Figma</h4>
              </div>
            </article>
          </div>
        </div>
        <div className="otherSkills">
          <h3 className="skillsHead">Other Skills</h3>
          <div className="gridSkills">
            <article>
              <BsFillPatchCheckFill className="tickedIcon"></BsFillPatchCheckFill>
              <div>
                <h4>Website Design</h4>
              </div>
            </article>
            <article>
              <BsFillPatchCheckFill className="tickedIcon"></BsFillPatchCheckFill>
              <div>
                <h4>Video Editor</h4>
              </div>
            </article>
            <article>
              <BsFillPatchCheckFill className="tickedIcon"></BsFillPatchCheckFill>
              <div>
                <h4>Content Creator</h4>
              </div>
            </article>
            <article>
              <BsFillPatchCheckFill className="tickedIcon"></BsFillPatchCheckFill>
              <div>
                <h4>Solar and inverter Installation</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
