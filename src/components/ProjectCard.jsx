import React from 'react';

const ProjectCard = ({ title, description, image, tech, link }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="tech-stack">
          {tech.map((item, index) => (
            <span key={index} className="tech-item">{item}</span>
          ))}
        </div>
        <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
      </div>
    </div>
  );
};

export default ProjectCard;