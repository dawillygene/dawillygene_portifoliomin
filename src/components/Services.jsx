import React from 'react';

const services = [
  {
    number: '01',
    icon: 'fas fa-laptop-code',
    iconColor: 'var(--accent1)',
    title: 'Web Development',
    desc: 'Creating responsive, performant websites and web applications using modern frameworks and technologies.',
    skills: [
      { name: 'React', bg: 'bg-blue-500', text: 'text-blue-300' },
      { name: 'Next.js', bg: 'bg-blue-500', text: 'text-blue-300' },
      { name: 'Node.js', bg: 'bg-blue-500', text: 'text-blue-300' },
    ],
    delay: '0.1s',
  },
  {
    number: '02',
    icon: 'fas fa-mobile-alt',
    iconColor: 'var(--secondary)',
    title: 'Mobile Development',
    desc: 'Building native and cross-platform mobile applications with seamless user experiences.',
    skills: [
      { name: 'Android', bg: 'bg-green-500', text: 'text-green-300' },
      { name: 'Java', bg: 'bg-green-500', text: 'text-green-300' },
      { name: 'React Native', bg: 'bg-green-500', text: 'text-green-300' },
    ],
    delay: '0.2s',
  },
  {
    number: '03',
    icon: 'fas fa-server',
    iconColor: 'var(--accent2)',
    title: 'Backend Development',
    desc: 'Designing robust, scalable server-side solutions with secure APIs and database architectures.',
    skills: [
      { name: 'Node.js', bg: 'bg-yellow-500', text: 'text-yellow-300' },
      { name: 'Spring', bg: 'bg-yellow-500', text: 'text-yellow-300' },
      { name: 'Laravel', bg: 'bg-yellow-500', text: 'text-yellow-300' },
    ],
    delay: '0.3s',
  },
  {
    number: '04',
    icon: 'fas fa-paint-brush',
    iconColor: 'var(--primary)',
    title: 'UI/UX Design',
    desc: 'Creating intuitive, user-centered designs and interfaces that elevate the user experience.',
    skills: [
      { name: 'Figma', bg: 'bg-purple-500', text: 'text-purple-300' },
      { name: 'Adobe XD', bg: 'bg-purple-500', text: 'text-purple-300' },
      { name: 'User Testing', bg: 'bg-purple-500', text: 'text-purple-300' },
    ],
    delay: '0.4s',
  },
  {
    number: '05',
    icon: 'fas fa-microchip',
    iconColor: 'var(--accent4)',
    title: 'IoT & Embedded Systems',
    desc: 'Developing smart, connected solutions with hardware integration and real-time data processing.',
    skills: [
      { name: 'Arduino', bg: 'bg-red-500', text: 'text-red-300' },
      { name: 'Raspberry Pi', bg: 'bg-red-500', text: 'text-red-300' },
      { name: 'Sensors', bg: 'bg-red-500', text: 'text-red-300' },
    ],
    delay: '0.5s',
  },
  {
    number: '06',
    icon: 'fas fa-code-branch',
    iconColor: 'var(--accent5)',
    title: 'DevOps & Deployment',
    desc: 'Setting up CI/CD pipelines, containerization, and cloud infrastructure for seamless deployment.',
    skills: [
      { name: 'Docker', bg: 'bg-indigo-500', text: 'text-indigo-300' },
      { name: 'AWS', bg: 'bg-indigo-500', text: 'text-indigo-300' },
      { name: 'Git', bg: 'bg-indigo-500', text: 'text-indigo-300' },
    ],
    delay: '0.6s',
  },
  {
    number: '07',
    icon: 'fas fa-vial',
    iconColor: 'var(--accent6)',
    title: 'Software Testing',
    desc: 'Ensuring application reliability through structured unit tests, integration testing, and debugging best practices.',
    skills: [
      { name: 'JUnit', bg: 'bg-teal-500', text: 'text-teal-300' },
      { name: 'Postman', bg: 'bg-teal-500', text: 'text-teal-300' },
      { name: 'Mocha/Chai', bg: 'bg-teal-500', text: 'text-teal-300' },
    ],
    delay: '0.7s',
  }
  
];

const Services = () => (
  <section className="py-20" id="services">
    <div className="container">
      <h2 className="section-title fade-in">My Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {services.map((service, idx) => (
          <div
            className="service-card relative fade-in"
            style={{ animationDelay: service.delay }}
            key={idx}
          >
            <div className="service-number">{service.number}</div>
            <i className={`${service.icon} text-3xl mb-4`} style={{ color: service.iconColor }}></i>
            <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
            <p className="text-gray-400">{service.desc}</p>
            <div className="mt-4 text-sm">
              {service.skills.map((skill, i) => (
                <span
                  key={i}
                  className={`inline-block bg-opacity-20 ${skill.bg} ${skill.text} px-2 py-1 rounded mr-2 mb-2`}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;