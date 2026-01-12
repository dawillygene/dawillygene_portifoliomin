import React from 'react';

const skillList = [
  { icon: 'fab fa-react', name: 'React' },
  { icon: 'fab fa-node', name: 'Node.js' },
  { icon: 'fab fa-js', name: 'JavaScript' },
  { icon: 'fab fa-java', name: 'Java' },
  { icon: 'fab fa-php', name: 'PHP' },
  { icon: 'fab fa-laravel', name: 'Laravel' },
  { icon: 'fab fa-android', name: 'Android' },
  { icon: 'fab fa-html5', name: 'HTML5' },
  { icon: 'fab fa-css3-alt', name: 'CSS3' },
  { icon: 'fab fa-react', name: 'Next.js' },
  { icon: 'fas fa-database', name: 'SQL' },
  { icon: 'fas fa-server', name: 'Spring' },
  { icon: 'fas fa-microchip', name: 'IoT' },
  { icon: 'fas fa-cog', name: 'Embedded Systems' },
];

const Skills = () => (
  <div className="skills-scroll">
    <div className="skills-scroll-content">
      {skillList.map((skill, idx) => (
        <div className="skill-item" key={idx}>
          <i className={skill.icon}></i> {skill.name}
        </div>
      ))}
    </div>
    <div className="skills-scroll-content" aria-hidden="true">
      {skillList.map((skill, idx) => (
        <div className="skill-item" key={idx}>
          <i className={skill.icon}></i> {skill.name}
        </div>
      ))}
    </div>
  </div>
);

export default Skills;