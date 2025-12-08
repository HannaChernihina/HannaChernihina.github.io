export const hero = {
  greeting: "Hi, I'm",
  name: 'Hanna CHERNIHINA',
  titleLead: "I'm a",
  titleHighlight: 'Full Stack Engineer',
  blurb:
    "I love creating and finding solutions with technology. I'm always enthusiastic about learning new things and improving my skills. With a positive attitude and a passion for building great solutions, I'm ready to take on new challenges and make a difference.",
  cta: {
    label: 'Check Resume',
    href: 'https://drive.google.com'
  },
  profile: '/Image.png'
};

export const skills = [
  { name: 'JavaScript / TypeScript', level: 'Expert' },
  { name: 'Vue 3 / Nuxt', level: 'Advanced' },
  { name: 'React / Next.js', level: 'Advanced' },
  { name: 'Node.js / Express', level: 'Advanced' },
  { name: 'PostgreSQL / MongoDB', level: 'Advanced' },
  { name: 'Tailwind CSS', level: 'Advanced' },
  { name: 'REST / GraphQL', level: 'Advanced' },
  { name: 'Docker & CI/CD', level: 'Intermediate' }
];

export const experiences = [
  {
    company: 'AMK CLIMATE SERVICE LTD',
    role: 'Full Stack Engineer',
    period: '2019 — 2022',
    summary:
      'Built web solutions and automation for a climate service company.',
    achievements: [
      'Collaborated with product owners to deliver features on time',
      'Optimized front-end performance and bundle sizes',
      'Improved deployment reliability with CI/CD pipelines'
    ]
  },
  {
    company: 'Freelance',
    role: 'Full Stack Developer',
    period: '2022 — Present',
    summary:
      'Delivering full-stack solutions and prototypes for startups and SMBs.',
    achievements: [
      'Designed reusable UI kits to speed up delivery',
      'Integrated third-party services and analytics',
      'Mentored juniors on modern frontend patterns'
    ]
  }
];

export const projects = [
  {
    name: 'Neobank Dashboard',
    description:
      'Responsive dashboard with real-time charts and secure auth flows.',
    stack: ['Vue 3', 'Pinia', 'Tailwind', 'Node.js'],
    link: '#'
  },
  {
    name: 'Logistics Planner',
    description: 'Route planning SPA with map overlays and offline support.',
    stack: ['Vue 3', 'Leaflet', 'Vite', 'Supabase'],
    link: '#'
  },
  {
    name: 'E-learning Platform',
    description: 'Content delivery and quiz engine with analytics.',
    stack: ['Nuxt', 'MongoDB', 'Tailwind', 'Vitest'],
    link: '#'
  }
];

export const education = [
  {
    school: 'BELARUSIAN NATIONAL TECHNICAL UNIVERSITY',
    degree: 'Automation Engineer',
    period: '2010 — 2015'
  }
];

export const certificates = [
  {
    name: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: '2023',
    credentialId: 'AWS-CSA-12345',
    link: 'https://www.credly.com',
    description: 'Demonstrates ability to architect and deploy secure applications on AWS.'
  },
  {
    name: 'Vue.js Mastery',
    issuer: 'Vue School',
    date: '2022',
    credentialId: 'VUE-MASTER-789',
    link: '#',
    description: 'Advanced Vue.js patterns, composition API, and enterprise architecture.'
  },
  {
    name: 'Node.js Backend Development',
    issuer: 'Udemy',
    date: '2021',
    credentialId: 'NODE-BACKEND-456',
    link: '#',
    description: 'RESTful APIs, authentication, database integration with MongoDB.'
  },
  {
    name: 'React & Redux Certification',
    issuer: 'FreeCodeCamp',
    date: '2020',
    credentialId: 'REACT-REDUX-321',
    link: '#',
    description: 'Building complex applications with React and state management.'
  }
];

