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
  

export const navLinksES = [
    {
        id: "about",
        title: "Acerca de", 
    },
    {
        id: "work",
        title: "Trabajo", 
    },
    {
        id: "projects",
        title: "Proyectos",
    },
    {
        id: "contact",
        title: "Contacto", 
    }
];

const services = [
    {
        title: "Desarrollador Full Stack", 
        icon: web,
    },
    {
        title: "Desarrollador Salesforce", 
        icon: mobile,
    },
    {
        title: "Auditor ISO", 
        icon: backend,
    },
    {
        title: "Creador de Contenido", 
        icon: creator,
    },
];


const technologies = [
    {
        name: "HTML 5",
        icon: html,
        brandColor: "#E34F26", 
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

const experiencesES = [
    {
        title: "Técnico de Reparación Apple", 
        company_name: "Iraxkorr S.L.",
        icon: apple,
        iconBg: "#E6DEDD",
        iconBorder: "#535353",
        date: "Agosto 2016 - Agosto 2018", 
        points: [
            "Técnico certificado por Apple para dispositivos iOS, especializado en Apple iPhone.",
            "Desarrollé programas de capacitación para clientes sobre los sistemas operativos Apple iPhone y Mac.",
            "Asesoramiento comercial para clientes en la compra de equipos.",
        ],
    },
    {
        title: "Analista de Laboratorio", 
        company_name: "Laboratorios Bromatológicos Araba S.L. Bioemeriux Nutrisciences.",
        icon: merieux,
        iconBg: "#E6DEDD",
        iconBorder: "#2E8B57",
        date: "Septiembre 2018 - Octubre 2023",
        points: [
            "Responsable de calibraciones y verificaciones en el laboratorio. Mantenimiento de la documentación ISO asociada a equipos.",
            "Responsable de los servicios de calibración externos.",
            "Análisis microbiológicos de agua y alimentos. Placas y aislamientos.",
            "Preparación de medios de cultivo y diluyentes."
        ]
    },
    {
        title: "Desarrollador Full Stack", 
        company_name: "Oreka IT",
        icon: oreka,
        iconBg: "#E6DEDD",
        iconBorder: "#84004f",
        date: "Octubre 2023 - Presente", 
        points: [
            "Desarrollo de soluciones frontend utilizando React.js y bibliotecas compatibles.",
            "Desarrollo de soluciones backend utilizando Node.js y JavaScript/TypeScript.",
            "Implementación de código APEX para integraciones de Salesforce con PO.",
            "Auditor interno para ISO 9001, 27001 y 20000-1."
        ]
    }    
];


// Proyectos
const projectsES = [
    {
        name: "Herramientas bioinformática.", 
        description:
            "Cuando empecé a trabajar con programación decidí a probar una pequeña mezcla de mi campo profesional de origen y mi campo destino. Estoy orgulloso pero queda mucho por hacer.",
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
        year:2023,
        vercel: "https://prueba-tecnicas-arc6l0x6g-iosuvitoria.vercel.app/",
        source_code_link: "https://github.com/IosuVitoria/PruebaTecnicas/tree/master/Iosu/Prueba12",
    },
    {
        name: "Paleta de colores", 
        description:
            "Cuando empecé a hacer proyectos para ensayar quise hacer algo diferente. Este fue el primer proyecto que alguien me dijo que iba a utilizar para si mismo.",
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
        year:2023,
        vercel: "https://paleta-de-colores-psi.vercel.app/",
        source_code_link: "https://github.com/IosuVitoria/potential-meme/tree/master/Day19",
    },
    {
        name: "Pokedex", 
        description:
            "Pokedex hecha en React.JS. Señalar el primer pokemon y recorrer datos mientras aprendes con este reto típico de desarrollador full stack.",
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

export { services, technologies, experiencesES, projectsES };
