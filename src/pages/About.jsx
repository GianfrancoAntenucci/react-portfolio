import React from 'react';

const About = () => {
  return (
    <div className="container">
      <h1 className="section-title">About Me</h1>
      <div className="about-content">
        <p>
          I am a full-stack developer passionate about creating efficient and 
          user-friendly web applications. With expertise in React, Node.js, 
          and modern web technologies, I focus on building scalable solutions.
        </p>
        <div className="skills-section">
          <h2>Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-item">React</div>
            <div className="skill-item">JavaScript</div>
            <div className="skill-item">Node.js</div>
            <div className="skill-item">HTML/CSS</div>
            <div className="skill-item">Git</div>
            <div className="skill-item">REST APIs</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;