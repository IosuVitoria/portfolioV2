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
          }
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
          // Traducción para el Hero
          hero: {
            title: "Hola, soy",
            subtitle: "Mi rol principal es el desarrollo web, pero también tengo experiencia en desarrollo de Salesforce."
          }
        },
      },
    },
  });

export default i18n;

