import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    git,
   apple,
   merieux,
   oreka,
    carrent,
    jobit,
    tripguide,
    threejs
  } from "../assets";


  
  export const navLinks = [
    {
      id: "about",
      title: "About",
      // icon: 
    },
    {
      id: "work",
      title: "Work",

    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    }
  ];
  
  const services = [
    {
      title: "Full Stack Developer",
      icon: web,
    },
    {
      title: "Salesforce Developer",
      icon: mobile,
    },
    {
      title: "ISO Auditor",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
      brandColor: "#E34F26", // Rojo de HTML5
    },
    {
      name: "CSS 3",
      icon: css,
      brandColor: "#1572B6",
    },
    {
      name: "JavaScript",
      icon: javascript,
      brandColor: "#F7DF1E", 
    },
    {
      name: "TypeScript",
      icon: typescript,
      brandColor: "#3178C6", 
    },
    {
      name: "React JS",
      icon: reactjs,
      brandColor: "#61DAFB", 
    },
    {
      name: "Redux",
      icon: redux,
      brandColor: "#764ABC", 
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
      brandColor: "#06B6D4", 
    },
    {
      name: "Node JS",
      icon: nodejs,
      brandColor: "#339933", 
    },
    {
      name: "Three JS",
      icon: threejs,
      brandColor: "#000000", 
    },
    {
      name: "Git",
      icon: git,
      brandColor: "#F05032", 
    },
    {
      name: "Salesforce",
      icon: mobile,
      brandColor: "#00A1E0", 
    },
  ];
  
  
  const experiencesEN = [
    {
      title: "Apple Repair Technician",
      company_name: "Iraxkorr S.L.",
      icon: apple,
      iconBg: "#E6DEDD",
      iconBorder: "#535353",
      date: "August 2016 - August 2018",
      points: [
        "Apple-certified technician for iOS devices, specializing in Apple iPhone.",
        "Developed training programs for customers on Apple iPhone and Mac operating systems.",
        "Provided commercial advice to customers for purchasing equipment.",
      ],
    },
    {
      title: "Laboratory Analyst",
      company_name: "Bromatological Laboratories Araba S.L. Bioemeriux Nutrisciences.",
      icon: merieux,
      iconBg: "#E6DEDD",
      iconBorder: "#2E8B57",
      date: "September 2018 - October 2023",
      points: [
        "Responsible for calibrations and verifications in the laboratory. Maintenance of the ISO documentation associated with equipment.",
        "Responsible for external calibration services.",
        "Microbiological analysis of water and food. Plating and isolations.",
        "Preparation of culture media and diluents."
      ]
    },
    {
      title: "Full Stack Developer",
      company_name: "Oreka IT",
      icon: oreka,
      iconBg: "#E6DEDD",
      iconBorder: "#84004f",
      date: "October 2023 - Present",
      points: [
        "Frontend solution development using React.js and compatible libraries.",
        "Backend solution development using Node.js and JavaScript/TypeScript.",
        "APEX code implementation for Salesforce integrations with PO.",
        "Internal auditor for ISO 9001, 27001, and 20000-1."
      ]
    }    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
export { services, technologies, experiencesEN, testimonials, projects };