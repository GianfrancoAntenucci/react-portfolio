import React from 'react';
import useGitHubRepos from '../hooks/useGitHubRepos';

const Projects = () => {
    const { repos, loading, error } = useGitHubRepos('GianfrancoAntenucci');

    if (loading) return (
        <div className="container">
            <div className="loading">Loading projects...</div>
        </div>
    );

    if (error) return (
        <div className="container">
            <div className="error">Error: {error}</div>
        </div>
    );

    return (
        <div className="container">
            <h1 className="section-title">My Projects</h1>
            <div className="grid">
                {repos.map((project) => (
                    <div key={project.id} className="project-card">
                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="tech-stack">
                                {project.tech.map((tech, index) => (
                                    <span key={index} className="skill-item">{tech}</span>
                                ))}
                            </div>
                            <div className="project-meta">
                                <span>⭐ {project.stars}</span>
                                <span>Updated: {project.updated}</span>
                            </div>
                            <a 
                                href={project.link} 
                                className="btn" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                View on GitHub
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;