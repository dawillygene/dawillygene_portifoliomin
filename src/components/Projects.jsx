import React from 'react';

const projects = [
  {
    icon: 'fas fa-mobile-alt',
    iconColor: 'var(--accent1)',
    badge: { text: 'Mobile App', bg: 'rgba(253, 202, 64, 0.2)', color: 'var(--accent1)' },
    title: 'Smart Home Controller',
    description: 'A mobile application that allows users to control IoT devices in their home with voice commands and scheduling.',
    skills: ['Android', 'Java', 'IoT'],
    link: '#',
    delay: '0.1s',
  },
  {
    icon: 'fas fa-store',
    iconColor: 'var(--secondary)',
    badge: { text: 'Web App', bg: 'rgba(33, 118, 255, 0.2)', color: 'var(--secondary)' },
    title: 'Inventory Management System',
    description: 'A web application built with Laravel and MySQL to manage product stock, track orders, and generate inventory reports.',
    skills: ['Laravel', 'PHP', 'MySQL'],
    link: '#',
    delay: '0.15s',
  },
  {
    icon: 'fas fa-project-diagram',
    iconColor: 'var(--accent2)',
    badge: { text: 'Web App', bg: 'rgba(247, 152, 36, 0.2)', color: 'var(--accent2)' },
    title: 'Task Management Tool',
    description: 'Built a full-stack MERN application for assigning, tracking, and managing project tasks with real-time notifications.',
    skills: ['React', 'Node.js', 'MongoDB'],
    link: '#',
    delay: '0.2s',
  },
  {
    icon: 'fas fa-lock',
    iconColor: 'var(--accent3)',
    badge: { text: 'Web App', bg: 'rgba(0, 102, 204, 0.2)', color: 'var(--accent3)' },
    title: 'User Authentication System',
    description: 'Developed a secure app using Java Servlets and Spring Boot with JWT-based authentication.',
    skills: ['Java', 'Spring Boot', 'Servlets'],
    link: '#',
    delay: '0.25s',
  },
  {
    icon: 'fas fa-shopping-cart',
    iconColor: 'var(--secondary)',
    badge: { text: 'Web App', bg: 'rgba(253, 202, 64, 0.2)', color: 'var(--accent1)' },
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce solution with integrated payment gateways, inventory management, and analytics.',
    skills: ['React', 'Node.js', 'MongoDB'],
    link: '#',
    delay: '0.3s',
  },
  {
    icon: 'fas fa-book',
    iconColor: 'var(--accent4)',
    badge: { text: 'Web App', bg: 'rgba(255, 173, 3, 0.2)', color: 'var(--accent4)' },
    title: 'Learning Management System',
    description: 'An LMS for creating, managing, and delivering educational content with instructor/student dashboards.',
    skills: ['Vue.js', 'Laravel', 'MySQL'],
    link: '#',
    delay: '0.35s',
  },
  {
    icon: 'fas fa-robot',
    iconColor: 'var(--accent5)',
    badge: { text: 'IoT Project', bg: 'rgba(253, 145, 72, 0.2)', color: 'var(--accent5)' },
    title: 'Smart Agriculture System',
    description: 'Monitors temperature, humidity, and soil moisture. Automates irrigation using IoT sensors and relays.',
    skills: ['Arduino', 'Raspberry Pi', 'Python'],
    link: '#',
    delay: '0.4s',
  },
  {
    icon: 'fas fa-puzzle-piece',
    iconColor: 'var(--accent6)',
    badge: { text: 'Mobile App', bg: 'rgba(106, 90, 205, 0.2)', color: 'var(--accent6)' },
    title: 'Android Quiz App',
    description: 'A simple, offline Android app built with Java that quizzes users on various topics with score tracking.',
    skills: ['Android', 'Java', 'SQLite'],
    link: '#',
    delay: '0.45s',
  }
];


const Projects = () => (
  <section className="py-20" id="projects">
    <div className="container">
      <h2 className="section-title fade-in">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {projects.map((project, idx) => (
          <div
            className="project-card fade-in"
            style={{ animationDelay: project.delay }}
            key={idx}
          >
            <div className="bg-gray-800 h-48 flex items-center justify-center">
              <i className={`${project.icon} text-6xl`} style={{ color: project.iconColor }}></i>
            </div>
            <div className="p-6">
              <span
                className="text-xs px-2 py-1 rounded-full"
                style={{
                  backgroundColor: project.badge.bg,
                  color: project.badge.color,
                }}
              >
                {project.badge.text}
              </span>
              <h3 className="text-xl font-semibold mt-3 mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-xs bg-opacity-10 bg-white text-gray-300 px-2 py-1 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="text-secondary hover:text-accent1 transition-colors text-sm flex items-center"
              >
                View Details <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-12 fade-in">
        <a href="#" className="btn-outline">View All Projects</a>
      </div>
    </div>
  </section>
);

export default Projects;