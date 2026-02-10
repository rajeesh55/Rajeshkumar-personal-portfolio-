import React from "react";
import "./About.css";

const codeText = `const developer = {
  name: 'Rajeshkumar S',
  role: 'Computer Science Student',
  passion: 'Expanding skills and discovering new ways to innovate'
};`;

const About =() => {
  return (
    <section id="about" className="about-section">
      <h2 className="about-title">About Me</h2>
      <span className="about-underline"></span>

      <div className="about-wrapper">
        {/* LEFT CONTENT */}
        <div className="about-left">
          <p className="about-text">
            I'm Rajeshkumar S, an Computer Science student exploring diverse
            fields of technology — from software and web development to artificial
            intelligence solutions. My goal is to continuously grow my skills and
            expand my horizons.
          </p>

          <h3 className="skills-title">Skills & Technologies</h3>

          <div className="skills-container">
            <span className="skill-pill">Java</span>
            <span className="skill-pill">Spring Boot</span>
            <span className="skill-pill">JDBC</span>
            <span className="skill-pill">Hibernate</span>
            <span className="skill-pill">SQL</span>
            <span className="skill-pill">HTML5</span>
            <span className="skill-pill">CSS3</span>
            <span className="skill-pill">JavaScript</span>
            <span className="skill-pill">React</span>
            <span className="skill-pill">Node.js</span>
            <span className="skill-pill">Git</span>
            <span className="skill-pill">Responsive Design</span>
            <span className="skill-pill">UI/UX</span>
          </div>
        </div>

        {/* RIGHT CODE CARD */}
        <div className="code-card">
          <pre>
            <code>{codeText}</code>
          </pre>
        </div>
      </div>
    </section>
  );
};

export default About;
