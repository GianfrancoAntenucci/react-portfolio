import React from 'react';

const Home = () => {
    return (
        <div className="container">
            <header className="home-header">
                <h1 className="section-title">Welcome to My Portfolio</h1>
                <p className="home-intro">Hi, I'm Gianfranco, a passionate developer showcasing my skills and accomplishments.</p>
            </header>
            <section className="social-links">
                <h2>Connect with Me</h2>
                <ul>
                    <li><a href="https://github.com/GianfrancoAntenucci" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                    <li><a href="https://linkedin.com/in/gianfranco-uk" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    <li><a href="https://x.com/ciaffo2011" target="_blank" rel="noopener noreferrer">X</a></li>
                </ul>
            </section>
        </div>
    );
};

export default Home;