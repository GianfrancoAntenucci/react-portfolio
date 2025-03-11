import React from 'react';
import SkillCard from '../components/SkillCard';

const Skills = () => {
    const skills = [
        { id: 1, name: 'JavaScript', icon: '🟡' },
        { id: 2, name: 'React', icon: '🔵' },
        { id: 3, name: 'CSS', icon: '🟠' },
        { id: 4, name: 'Node.js', icon: '🟢' },
        // Add more skills as needed
    ];

    return (
        <div className="skills-page">
            <h1>My Skills</h1>
            <div className="skills-list">
                {skills.map(skill => (
                    <SkillCard key={skill.id} skill={skill} />
                ))}
            </div>
        </div>
    );
};

export default Skills;