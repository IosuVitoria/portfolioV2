import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const savedLanguage = localStorage.getItem('language') || 'en';

i18n
  .use(initReactI18next)
  .init({
    lng: savedLanguage,
    fallbackLng: 'es',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          welcome: "Welcome",
          navLinks: {
            about: "About",
            work: "Work",
            projects: "Projects",
            contact: "Contact"
          },
          services: {
            fullStack: "Full Stack Developer",
            salesforce: "Salesforce Developer",
            isoAuditor: "ISO Auditor",
            contentCreator: "Content Creator"
          },
          technologies: {
            html: "HTML 5",
            css: "CSS 3",
            javascript: "JavaScript",
            typescript: "TypeScript",
            react: "React JS",
            redux: "Redux",
            tailwind: "Tailwind CSS",
            node: "Node JS",
            threejs: "Three JS",
            git: "Git",
            salesforce: "Salesforce"
          },
          // Añadir las traducciones para el Hero
          hero: {
            title: "Hi, I am",
            subtitle: "My primary role is web development, but I also have experience in Salesforce development."
          },
          // Traducción para About
          introduction: "Introduction",
          overview: "Overview",
          aboutText: "I am a dedicated full-stack web developer with a background in biology and a strong connection to programming. My journey began with a master’s thesis in bioinformatics and later evolved through diverse experiences, including working in a laboratory and becoming an Apple-certified technician. These roles honed my analytical skills, adaptability, and understanding of the business world. Driven by a passion for technology and a desire to pursue my goals, I completed a rigorous bootcamp and transitioned into full-stack development. Every project I tackle is an opportunity to learn, grow, and bring innovative solutions to life.",
        },
      },
      es: {
        translation: {
          welcome: "Bienvenido",
          navLinks: {
            about: "Acerca de",
            work: "Trabajo",
            projects: "Proyectos",
            contact: "Contacto"
          },
          services: {
            fullStack: "Desarrollador Full Stack",
            salesforce: "Desarrollador Salesforce",
            isoAuditor: "Auditor ISO",
            contentCreator: "Creador de Contenido"
          },
          technologies: {
            html: "HTML 5",
            css: "CSS 3",
            javascript: "JavaScript",
            typescript: "TypeScript",
            react: "React JS",
            redux: "Redux",
            tailwind: "Tailwind CSS",
            node: "Node JS",
            threejs: "Three JS",
            git: "Git",
            salesforce: "Salesforce"
          },
          hero: {
            title: "Hola, soy",
            subtitle: "Mi rol principal es el desarrollo web, pero también tengo experiencia en desarrollo de Salesforce."
          },
          introduction: "Introducción",
          overview: "Motivaciones personales",
          aboutText: "Soy un desarrollador web full-stack con formación de biólogo y con una fuerte conexión con la programación desde el principio. Mi camino comenzó con una tesis de máster en bioinformática. Luego evolucioné a través de diversas experiencias laborales que incluyeron trabajar en un laboratorio y convertirme en técnico certificado de Apple. Estos roles perfeccionaron mis habilidades analíticas, adaptabilidad y comprensión del mundo empresarial. Impulsado por una pasión por la tecnología y el deseo de alcanzar mis metas, completé un bootcamp riguroso y hice la transición al desarrollo full-stack. Cada proyecto que emprendo es una oportunidad para aprender, crecer y hacer realidad soluciones innovadoras.",
        },
      },
    },
  });

export default i18n;
