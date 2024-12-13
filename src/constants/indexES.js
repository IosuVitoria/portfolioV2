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
  

// Enlaces de navegación
export const navLinksES = [
    {
        id: "about",
        title: "Acerca de", // Título traducido
    },
    {
        id: "work",
        title: "Trabajo", // Título traducido
    },
    {
        id: "projects",
        title: "Proyectos", // Título traducido
    },
    {
        id: "contact",
        title: "Contacto", // Título traducido
    }
];

// Servicios ofrecidos
const services = [
    {
        title: "Desarrollador Full Stack", // Título traducido
        icon: web,
    },
    {
        title: "Desarrollador Salesforce", // Título traducido
        icon: mobile,
    },
    {
        title: "Auditor ISO", // Título traducido
        icon: backend,
    },
    {
        title: "Creador de Contenido", // Título traducido
        icon: creator,
    },
];

// Tecnologías
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

// Experiencias
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

// Testimonios
const testimonials = [
    {
        testimonial:
            "Pensé que era imposible hacer un sitio web tan bonito como nuestro producto, pero Rick me demostró lo contrario.", // Testimonio traducido
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "Nunca he conocido a un desarrollador web que realmente se preocupe por el éxito de sus clientes como lo hace Rick.", // Testimonio traducido
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "Después de que Rick optimizara nuestro sitio web, nuestro tráfico aumentó un 50%. ¡No podemos agradecérselo lo suficiente!", // Testimonio traducido
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

// Proyectos
const projects = [
    {
        name: "Alquiler de Autos", // Nombre del proyecto traducido
        description:
            "Plataforma web que permite a los usuarios buscar, reservar y gestionar alquileres de autos de diferentes proveedores, proporcionando una solución conveniente y eficiente para las necesidades de transporte.", // Descripción traducida
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
        name: "Job IT", // Nombre del proyecto traducido
        description:
            "Aplicación web que permite a los usuarios buscar ofertas de trabajo, ver rangos salariales estimados para los puestos, y localizar trabajos disponibles según su ubicación actual.", // Descripción traducida
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
        name: "Guía de Viajes", // Nombre del proyecto traducido
        description:
            "Plataforma integral de reservas de viajes que permite a los usuarios reservar vuelos, hoteles y autos de alquiler, además de ofrecer recomendaciones personalizadas para destinos populares.", // Descripción traducida
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

export { services, technologies, experiencesES, testimonials, projects };
