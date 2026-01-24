// src/stores/content.js
import { defineStore } from "pinia";

import JsTsIcon from "@/assets/skills/typescript.svg?component";
import VueIcon from "@/assets/skills/aws.svg?component";
import CursorIcon from "@/assets/skills/cursor.svg?component";
import NodeIcon from "@/assets/skills/nodedotjs.svg?component";
import PostgresIcon from "@/assets/skills/postgresql.svg?component";
import MongoIcon from "@/assets/skills/mongodb.svg?component";
import TailwindIcon from "@/assets/skills/tailwindcss.svg?component";
import VuetifyIcon from "@/assets/skills/vuetify.svg?component";
import VuedotjsIcon from "@/assets/skills/vuedotjs.svg?component";
import SwiftIcon from "@/assets/skills/swift.svg?component";
import ReactIcon from "@/assets/skills/react.svg?component";
import Postman from "@/assets/skills/postman.svg?component";
import FigmaIcon from "@/assets/skills/figma.svg?component";
import FireIcon from "@/assets/skills/firebase.svg?component";
import FlutterIcon from "@/assets/skills/flutter.svg?component";
import nativeReactIcon from "@/assets/skills/native.svg?component";

import AwsPdf from "@/assets/data/CC320-2025.pdf";
import HackathonPdf from "@/assets/data/Hackathon_2025_robotique_Lille.pdf";
import CVHaChernihina from "@/assets/data/CV_HANNA_CHERNIHINA_2026.pdf";

import logoBlock  from "@/assets/images/logo.png";


export const useContentStore = defineStore("content", {
  state: () => ({
    hero: {
      greeting: "Hi, I'm",
      name: "Hanna CHERNIHINA",
      titleLead: "I'm a",
      titleHighlight: "Software Engineer",
      blurb:
        "I love creating and finding solutions with technology. I'm always enthusiastic about learning new things and improving my skills. With a positive attitude and a passion for building great solutions, I'm ready to take on new challenges and make a difference.",
      cta: {
        label: "Check Resume",
        href: CVHaChernihina,
      },
      profile: logoBlock,
    },
    skills: [
      {
        name: "TypeScript",
        icon: JsTsIcon,
        hoverClass: "group-hover:text-blue-500",
      },
      {
        name: "Vuetify",
        level: "Advanced",
        icon: VuetifyIcon,
        hoverClass: "group-hover:text-blue-300",
      },
      {
        name: "Vue.js",
        level: "Advanced",
        icon: VuedotjsIcon,
        hoverClass: "group-hover:text-green-400",
      },
      {
        name: "AWS",
        level: "Advanced",
        icon: VueIcon,
        hoverClass: "group-hover:text-yellow-500",
      },
      {
        name: "Node.js",
        level: "Advanced",
        icon: NodeIcon,
        hoverClass: "group-hover:text-green-600",
      },
      {
        name: "PostgreSQL",
        level: "Advanced",
        icon: PostgresIcon,
        hoverClass: "group-hover:text-blue-700",
      },
      {
        name: "MongoDB",
        level: "Advanced",
        icon: MongoIcon,
        hoverClass: "group-hover:text-green-700",
      },
      {
        name: "Firebase",
        level: "Intermediate",
        icon: FireIcon,
        hoverClass: "group-hover:text-yellow-400",
      },
      {
        name: "Tailwind CSS",
        level: "Advanced",
        icon: TailwindIcon,
        hoverClass: "group-hover:text-teal-400",
      },
      {
        name: "Swift",
        level: "Intermediate",
        icon: SwiftIcon,
        hoverClass: "group-hover:text-orange-400",
      },
      {
        name: "React",
        level: "Intermediate",
        icon: ReactIcon,
        hoverClass: "group-hover:text-blue-600",
      },
      {
        name: "Cursor",
        level: "Advanced",
        icon: CursorIcon,
        hoverClass: "group-hover:text-gray-500",
      },
      {
        name: "Postman",
        level: "Advanced",
        icon: Postman,
        hoverClass: "group-hover:text-orange-600",
      },
      {
        name: "Figma",
        level: "Advanced",
        icon: FigmaIcon,
        hoverClass: "group-hover:text-pink-500",
      },
      {
        name: "React Native",
        level: "Intermediate",
        icon: nativeReactIcon,
        hoverClass: "group-hover:text-blue-500",
      },
      {
        name: "Flutter",
        level: "Intermediate",
        icon: FlutterIcon,
        hoverClass: "group-hover:text-blue-500",
      },
    ],
    navLinks: [
      { id: "home", label: "About" },
      { id: "skills", label: "Skills" },
      { id: "experience", label: "Experience" },
      { id: "projects", label: "Projects" },
      { id: "education", label: "Education" },
      { id: "certificates", label: "Certificates" },
    ],
    experiences: [
      {
        company: "Flunch",
        role: "Full Stack Engineer",
        period: "2023 — 2026",
        summary:
          "Build, develop, and maintain scalable web applications using Node.js for backend and Vue for frontend. Ensure code quality through reviews, and continuous integration.",
        achievements: [
          "Collaborated with product owners to deliver features on time",
          "Participated in Agile ceremonies such as sprint planning and retrospectives",
          "Improved deployment reliability with CI/CD pipelines",
        ],
      },
      {
        company: "AGAPES Services",
        role: "Front-End Developer",
        period: "2022 — 2023",
        summary:
          "Participation au développement front-end d’applications web basées sur Vue.js dans un environnement agile.",
        achievements: [
          "Développement d’une application de scan de codes-barres pour les tickets restaurants",
          "Mise en place d’un Storybook pour l’un des projets afin de créer des composants réutilisables et documentés",
          "Participation au projet de création de cartes de fidélité virtuelles",
          "Évolutions et maintenance d’applications internes existantes développées en Vue 2 et Vuetify",
        ],
      },
      {
        company: "Acc Aweb",
        role: "Web Development Domain Lead",
        period: "2018 — 2022",
        summary:
          "Animation de la charge de travail. Suivi de l’avancement des projets et gestion des priorités.",
        achievements: [
          "Encadrement d’une équipe de développeurs et accompagnement technique.",
          "Création de SPA et amélioration de la structure front-end.",
          "Mentorat sur html/css et les bonnes pratiques de développement.",
        ],
      },
      {
        company: "Acc Aweb",
        role: "Markup Developer",
        period: "2018 — 2018",
        summary:
          "Création et intégration de pages pour des landing pages. Intégration de maquettes (Figma, PSD) sur WordPress et OpenCart.",
        achievements: [
          "Personnalisation de thèmes et modèles en fonction des besoins client.",
          "Optimisation des pages pour une meilleure performance et SEO.",
          "Collaboration avec les équipes de conception et de développement pour assurer la cohérence du design.",
        ],
      },
    ],
    projects: [
      {
        name: "AMK climate",
        description:
          "E-commerce platform for climate control systems with real-time monitoring.",
        stack: ["OpenCart", "js", "css", "php"],
        date: "2021",
        link: "https://amk-climate.com.ua",
      },
     
      // {
      //   name: "E-learning Platform",
      //   description: "Content delivery and quiz engine with analytics.",
      //   stack: ["Nuxt", "MongoDB", "Tailwind", "Vitest"],
      //   link: "#",
      // },
        // {
      //   name: "E-learning Platform",
      //   description: "Content delivery and quiz engine with analytics.",
      //   stack: ["Nuxt", "MongoDB", "Tailwind", "Vitest"],
      //   link: "#",
      // },
    ],
    education: [
      {
        school:
          "Kharkiv Institute of Finance (National University of Trade and Economics)",
        degree: "Bachelor’s degree (Bac+3) in Accounting and Auditing",
        period: "2013 — 2017",
      },
    ],
    certificates: [
      {
        type: "Certificate",
        name: "Certificate of Participation in the Hackathon",
        issuer: "CITC-EuraRFID",
        date: "2025",
        // credentialId: "AWS-CSA-12345",
        link: HackathonPdf,
        description:
          "A decarbonized wildfire monitoring model based on animal tracking and behavioral analysis. Ecological wildfire surveillance leveraging animal movement analysis and low-carbon tracking technologies. We use Python and artificial intelligence models to analyze the movements of animals equipped with tracking devices (GPS, LoRa, RFID) and to detect early anomalies associated with wildfire outbreaks.",
      },
      {
        type: "Formation",
        name: "Amazon Web Services (AWS) - Développement (CC320)",
        issuer: "ib Cegos",
        date: "2025",
        link: AwsPdf,
        description:
          'la formation "Amazon Web Services (AWS) - Développement (CC320)" qui aura lieu du 26 au 28 mai 2025',
      },
    ],
  }),
  getters: {
    // Add any getters you might need
  },
  actions: {
    // Add any actions you might need
  },
});
