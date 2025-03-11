import React from 'react';

const SkillCard = ({ skill, icon }) => {
    return (
        <div className="skill-card">
            <img src={icon} alt={`${skill} icon`} className="skill-icon" />
            <h3 className="skill-title">{skill}</h3>
        </div>
    );
};

export default SkillCard;