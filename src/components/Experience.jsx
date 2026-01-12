import React from 'react';

const experiences = [
  {
    period: '2024 - Present',
    title: 'Full Stack Developer (Academic & Freelance Projects)',
    company: 'DODOMA UNIVERSITY | Independent Projects',
    description:
      'Developed and deployed full-stack web applications using modern frameworks. Projects included inventory systems, e-commerce platforms, and university management tools.',
    skills: ['Laravel', 'React', 'Node.js', 'MySQL', 'MongoDB'],
    delay: '0.05s',
  },
  {
    period: '2023 - 2024',
    title: 'Mobile & Web App Developer',
    company: 'Independent',
    description:
      'Built Android apps using Java and developed full-stack web apps using Vue, Express, and Spring Boot. Applications ranged from task managers to blog platforms and REST APIs.',
    skills: ['Java (Android)', 'Spring Boot', 'Vue.js', 'Express.js', 'Servlets'],
    delay: '0.08s',
  },
  {
    period: '2022 - 2023',
    title: 'Software Engineer Intern',
    company: 'DODOMA UNIVERSITY | Software Engineering student',
    description:
      'Worked on integrating IoT devices with cloud-based dashboards. Developed APIs and real-time data visualization tools to monitor sensor networks.',
    skills: ['Node.js', 'React', 'MQTT', 'AWS IoT Core'],
    delay: '0.1s',
  },
  {
    period: '2021 - 2022',
    title: 'Embedded Systems Developer (Academic Projects)',
    company: 'Final Year in Arusha Technical College | Diploma in Electronics & Telecommunication',
    description:
      'Designed and built IoT prototypes such as smart home automation systems and real-time sensor networks. Programmed microcontrollers and implemented wireless communication protocols.',
    skills: ['Arduino', 'ESP32', 'C/C++', 'Bluetooth/Wi-Fi', 'IoT'],
    delay: '0.2s',
  },
  {
    period: '2020 - 2021',
    title: 'Junior Electronics Developer',
    company: 'Arusha Technical College - Embedded Lab',
    description:
      'Assisted in PCB design and embedded firmware development for low-power sensor devices. Conducted signal analysis and tested hardware components.',
    skills: ['PCB Design', 'Proteus', 'Keil uVision', 'UART', 'ADC'],
    delay: '0.3s',
  },
  {
    period: '2019 - 2020',
    title: 'Electronics & IoT Hobbyist',
    company: 'Arusha Technical College | Electronics lab 4',
    description:
      'Built DIY electronics projects including weather stations, automated irrigation systems, and Bluetooth-controlled robots. Shared project documentation and code on GitHub.',
    skills: ['Microcontrollers', 'Sensors', 'IoT', 'Python', 'Git'],
    delay: '0.4s',
  },
];




const Experience = () => (
  <section className="py-20 bg-opacity-30 bg-black" id="experience">
    <div className="container">
      <h2 className="section-title fade-in">My Experience</h2>
      <div className="timeline mt-12">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="timeline-item fade-in"
            style={{ animationDelay: exp.delay }}
          >
            <div className="mb-1" style={{ color: 'var(--accent1)' }}>
              {exp.period}
            </div>
            <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
            <h4 className="text-gray-300 mb-4">{exp.company}</h4>
            <p className="text-gray-400 mb-4">{exp.description}</p>
            <div className="flex flex-wrap gap-2">
              {exp.skills.map((skill, i) => (
                <span
                  key={i}
                  className="text-xs bg-opacity-10 bg-white text-gray-300 px-2 py-1 rounded"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;