// Run once from admin to seed initial data into Firestore
import { setDocument, addDocument, COLLECTIONS } from '@/lib/firestore';

export async function seedDefaultData() {
  // Company / Hero
  await setDocument(COLLECTIONS.COMPANY, 'main', {
    name: 'Genelabs Software Tz',
    founder: 'Dawilly Gene',
    founderReal: 'Elia William Mariki',
    tagline: 'I engineer systems that scale, last, and matter.',
    subTagline:
      'Software Engineer & Full-Stack Developer based in Dodoma, Tanzania.',
    description:
      'Genelabs Software Tz is a Tanzanian software development firm delivering end-to-end solutions from concept to deployment.',
    established: 2024,
    email: 'dawillygene@gmail.com',
    phone: '+255 753 225 961',
    location: 'Dodoma, Tanzania',
    website: 'dawillygene.com',
    availability: 'Open to freelance & full-time',
    stats: [
      { value: '5+', label: 'Years Building' },
      { value: '30+', label: 'Projects Shipped' },
      { value: '100%', label: 'Client Satisfaction' },
    ],
    social: {
      github: 'https://github.com/dawillygene',
      linkedin: 'https://www.linkedin.com/in/elia-william-mariki/',
      instagram: '@dawillygene',
      youtube: '@dawillygene',
    },
  });

  // Default services
  const services = [
    { order: 1, title: 'Web Development', icon: 'fas fa-laptop-code', iconColor: '#38bdf8', description: 'Creating responsive, performant websites and web applications using modern frameworks.', tags: ['React', 'Next.js', 'Node.js', 'TypeScript'], published: true },
    { order: 2, title: 'Mobile Development', icon: 'fas fa-mobile-alt', iconColor: '#34d399', description: 'Building native and cross-platform mobile applications with seamless user experiences.', tags: ['Android', 'Java', 'React Native', 'Kotlin'], published: true },
    { order: 3, title: 'Backend Engineering', icon: 'fas fa-server', iconColor: '#fbbf24', description: 'Designing robust, scalable server-side solutions with secure APIs and optimized databases.', tags: ['Node.js', 'Spring Boot', 'Laravel', 'GraphQL'], published: true },
    { order: 4, title: 'UI/UX Design', icon: 'fas fa-paint-brush', iconColor: '#a855f7', description: 'Creating intuitive, user-centered designs through thoughtful interaction patterns.', tags: ['Figma', 'Adobe XD', 'Prototyping', 'User Testing'], published: true },
    { order: 5, title: 'IoT & Embedded Systems', icon: 'fas fa-microchip', iconColor: '#f43f5e', description: 'Developing smart, connected solutions with hardware integration and sensor networks.', tags: ['Arduino', 'Raspberry Pi', 'ESP32', 'MQTT'], published: true },
    { order: 6, title: 'DevOps & Cloud', icon: 'fas fa-code-branch', iconColor: '#6366f1', description: 'Setting up CI/CD pipelines, containerization, and cloud-native architectures.', tags: ['Docker', 'AWS', 'Git', 'CI/CD'], published: true },
    { order: 7, title: 'Software Testing', icon: 'fas fa-vial', iconColor: '#14b8a6', description: 'Ensuring application reliability through structured unit and integration testing.', tags: ['JUnit', 'Postman', 'Mocha', 'Cypress'], published: true },
  ];
  for (const svc of services) await addDocument(COLLECTIONS.SERVICES, svc);

  // Default team (Dawilly as founder)
  await addDocument(COLLECTIONS.TEAM, {
    name: 'Dawilly Gene',
    realName: 'Elia William Mariki',
    role: 'Founder & Lead Software Engineer',
    email: 'dawillygene@gmail.com',
    phone: '+255 753 225 961',
    location: 'Dodoma, Tanzania',
    bio: 'Founder of Genelabs Software Tz. Full-stack developer and IoT specialist with 5+ years building production-grade systems.',
    skills: ['React', 'Next.js', 'Node.js', 'Java', 'Python', 'IoT', 'Laravel', 'AWS'],
    isFounder: true,
    order: 0,
    social: {
      github: 'https://github.com/dawillygene',
      linkedin: 'https://www.linkedin.com/in/elia-william-mariki/',
      instagram: '@dawillygene',
    },
    published: true,
  });

  console.log('[OK] Default data seeded successfully.');
}
