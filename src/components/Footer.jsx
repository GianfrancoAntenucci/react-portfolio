import React from 'react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Contact</h3>
                    <p>Email: gfa2001@gmail.com</p>
                    <p>Location: Berkshire, UK</p>
                </div>
                <div className="footer-section">
                    <h3>Social</h3>
                    <div className="social-links">
                        <a href="https://github.com/GianfrancoAntenucci" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href="https://www.linkedin.com/in/gianfranco-uk/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {currentYear} Gianfranco. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;