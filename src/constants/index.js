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
    proyecto1,
    proyecto2,
    proyecto3,
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
  
  
  const projects = [
    {
        name: "Bioinformatics Tools", 
        description:
            "When I started working with programming, I decided to try a small blend of my original professional field and my target field. I'm proud of it, but there’s still much to do.",
        tags: [
            {
                name: "html5",
                color: "blue-text-gradient",
            },
            {
                name: "CSS3",
                color: "green-text-gradient",
            },
            {
                name: "Javascript",
                color: "pink-text-gradient",
            },
        ],
        image: proyecto1,
        year: 2023,
        vercel: "https://prueba-tecnicas-arc6l0x6g-iosuvitoria.vercel.app/",
        source_code_link: "https://github.com/IosuVitoria/PruebaTecnicas/tree/master/Iosu/Prueba12",
    },
    {
        name: "Color Palette", 
        description:
            "When I started creating projects to practice, I wanted to try something different. This was the first project that someone told me they would use for themselves.",
        tags: [
            {
                name: "html5",
                color: "blue-text-gradient",
            },
            {
                name: "CSS3",
                color: "green-text-gradient",
            },
            {
                name: "Javascript",
                color: "pink-text-gradient",
            },
        ],
        image: proyecto2,
        year: 2023,
        vercel: "https://paleta-de-colores-psi.vercel.app/",
        source_code_link: "https://github.com/IosuVitoria/potential-meme/tree/master/Day19",
    },
    {
        name: "Pokedex", 
        description:
            "Pokedex built with React.JS. Select your first Pokémon and browse data while learning with this classic full-stack developer challenge.",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "CSS3",
                color: "green-text-gradient",
            }
        ],
        image: proyecto3,
        year: 2023,
        vercel: "https://pokedex-wine-ten.vercel.app/",
        source_code_link: "https://github.com/IosuVitoria/portfolioprojects/tree/master/proyecto3",
    },
];

  
export { services, technologies, experiencesEN, projects };