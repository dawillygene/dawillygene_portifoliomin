import React from 'react';

const technicalSkills = [
  { name: 'JavaScript/TypeScript', percent: 95 },
  { name: 'React/Next.js', percent: 90 },
  { name: 'Node.js/Express', percent: 85 },
  { name: 'PHP/Laravel', percent: 80 },
  { name: 'Java/Spring', percent: 85 },
  { name: 'Android Development', percent: 75 },
];

const additionalSkills = [
  { name: 'UI/UX Design', percent: 80 },
  { name: 'Database Design', percent: 90 },
  { name: 'IoT & Embedded Systems', percent: 75 },
  { name: 'DevOps/CI-CD', percent: 70 },
  { name: 'Project Management', percent: 85 },
  { name: 'Problem Solving', percent: 95 },
];

const getBarStyle = (percent, type = 'tech') => {
  const gradient =
    type === 'tech'
      ? 'linear-gradient(90deg, var(--secondary), var(--accent1))'
      : 'linear-gradient(90deg, var(--accent2), var(--accent5))';
  return {
    width: `${percent}%`,
    background: gradient,
  };
};

const SkillsScroll = () => (
  <section className="py-20 bg-opacity-30 bg-black" id="skills">
    <div className="container">
      <h2 className="section-title fade-in">My Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-12">
        <div className="fade-in" style={{ animationDelay: '0.1s' }}>
          <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
          {technicalSkills.map((skill, idx) => (
            <div className="mb-4" key={idx}>
              <div className="flex justify-between mb-2">
                <span>{skill.name}</span>
                <span>{skill.percent}%</span>
              </div>
              <div className="skill-progress">
                <div
                  className="skill-progress-bar"
                  style={getBarStyle(skill.percent, 'tech')}
                ></div>
              </div>
            </div>
          ))}
        </div>
        <div className="fade-in" style={{ animationDelay: '0.3s' }}>
          <h3 className="text-xl font-semibold mb-6">Additional Skills</h3>
          {additionalSkills.map((skill, idx) => (
            <div className="mb-4" key={idx}>
              <div className="flex justify-between mb-2">
                <span>{skill.name}</span>
                <span>{skill.percent}%</span>
              </div>
              <div className="skill-progress">
                <div
                  className="skill-progress-bar"
                  style={getBarStyle(skill.percent, 'add')}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default SkillsScroll;