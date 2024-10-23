import React from "react";
import aboutImg from "../assets/img/about_image.jpg";

function About() {
  return (
    <div className="lg:px-64 flex gap-7 pt-20">
      <div className="flex flex-col gap-4 lg:basis-2/3">
        <section className="about-section">
          <h2 className="section-title">About Me</h2>
          <p className="section-content">
            Hi, I’m Fredi, a Front-End Developer with a unique background in
            Lighting Design. After several years of creating lighting design, I
            decided to transition into the world of web development. I
            discovered that crafting digital experiences requires similar
            skillsets, creativity, and problem-solving skills that I honed in
            the lighting industry.
          </p>
        </section>
        <section className="about-section">
          <h2 className="section-title">Skills</h2>
          <ul className="list-inside skill-list">
            <li>HTML5 & CSS3</li>
            <li>Javascript (ES6+)</li>
            <li>React</li>
            <li>React Router DOM</li>
            <li>Figma</li>
            <li>Tailwind CSS</li>
          </ul>
        </section>
        <section className="about-section">
          <h2 className="section-title">Work Experience</h2>
          <ul className="work-list">
            <li>
              <h3>3D Pre-visualization Specialist and Lighting designer</h3>
              <h4>Tallinn City Theatre, Tallinn (2023-present)</h4>
              <ul className="task-list">
                <li>
                  Programming lighting cues and sequences involving over 200
                  lighting fixtures
                </li>
                <li>Managed project timelines and adapted designs</li>
                <li>
                  Produced comprehensive technical documentation and manuals for
                  lighting systems
                </li>
              </ul>
            </li>
            <li>
              <h3>Lighting designer</h3>
              <h4>Ugala Theatre, Viljandi (2021-2023)</h4>
              <ul className="task-list">
                <li>
                  Programming lighting cues and sequences involving over 200
                  lighting fixtures
                </li>
                <li>Managed project timelines and adapted designs</li>
                <li>
                  Produced comprehensive technical documentation and manuals for
                  lighting systems
                </li>
              </ul>
            </li>
            <li>
              <h3>Technical Coordinator</h3>
              <h4>Estonian National Broadcasting, Tallinn - 2019-2020</h4>
              <ul className="task-list">
                <li>
                  Oversaw daily tv news show team gathering and production
                  process
                </li>
                <li>Reviewed scripts, segments for quality control</li>
                <li>
                  Ensured content is accurate and follows organization standards
                  and guidelines
                </li>
                <li>Prevented copyright infringement</li>
              </ul>
            </li>
          </ul>
        </section>
        <section className="about-section">
          <h2 className="section-title">Education</h2>
          <ul className="education-list">
            <li>
              <h3>Software Development</h3>
              <h4>Front-end web development</h4>
              <ul className="education-topics">
                <li>HTML, CSS, JS frameworks (React), CMS, Dev tools</li>
              </ul>
            </li>
            <li>
              <h3>University of Tartu</h3>
              <h4>Bachelor of Arts - BA, AV & Creative Technologies</h4>
              <h4>Grade: cum laude</h4>
              <ul className="education-topics">
                <li>Arduino programming</li>
                <li>Notch and TouchDesigner</li>
                <li>Visual programming (Max 8)</li>
              </ul>
            </li>
          </ul>
        </section>
      </div>
      <div className="md:basis-1/3 lg:mt-20">
        <img
          src={aboutImg}
          alt="about-image"
          className="w-full max-h-full hidden lg:block"
        />
      </div>
    </div>
  );
}

export default About;
