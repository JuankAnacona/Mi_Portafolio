import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const translations = {
  en: {
    nav: {
      projects: "Projects",
      tech: "Technologies",
      about: "About Me"
    },
    presentacion: {
      title: "Software Engineer & Technical Leader",
      subtitle: "Designing and leading complex systems in the Defense sector, ensuring high quality, solid architecture, and engineering best practices.",
      badge1: "Team Lead @ Indra",
      badge2: "European Project ACHILE",
      badge3: "PR Reviewer & Clean Code",
      btnExperience: "View experience",
      btnProjects: "View key projects"
    },
    tecnologias: {
      title: "Tech Stack",
      backendTitle: "Engineering & Backend",
      fullstackTitle: "Fullstack & Web",
      devopsTitle: "DevOps & Infrastructure",
      architecture: "Architecture",
      distributedSystems: "Distributed Systems"
    },
    sobreMi: {
      title: "About Me",
      p1: "I am a Software Engineer who leads and designs solutions in the ",
      p1Bold: "Defense sector",
      p1End: ", environments where complexity and critical reliability are the norm.",
      p2: "My work goes beyond writing code: I define software architecture, establish quality standards, and act as ",
      p2Bold: "PR Reviewer",
      p2End: " to guarantee that our systems are scalable, efficient, and sustainable.",
      p3: "I focus on delivering real value by ensuring system performance. I maintain a holistic view that allows me to adopt best practices and modern tools ",
      p3Highlight: "(such as internal tooling development and innovation)",
      p3End: " whenever they strategically solve real technical problems."
    },
    liderazgo: {
      title: "Leadership Pillars",
      pilar1Title: "Quality & Code Review",
      pilar1Desc: "Ensuring excellence through rigorous reviews and Clean Code standards, converting feedback into continuous learning.",
      pilar2Title: "Scalable Architecture",
      pilar2Desc: "Designing decoupled, resilient systems built to evolve and handle critical loads in demanding environments.",
      pilar3Title: "Mentorship & Guidance",
      pilar3Desc: "Fostering team growth by unblocking technical hurdles and encouraging a culture of autonomy and accountability.",
      quote: "\"Knowledge unshared is knowledge lost.\""
    },
    idiomas: {
      title: "Languages",
      spanish: "Spanish",
      spanishLevel: "- Native",
      english: "English",
      englishLevel: "- Intermediate (B1/B2)"
    },
    proyectos: {
      title: "Key Projects",
      sourceCode: "Source Code",
      viewDemo: "Live Demo",
      agapea: {
        title: "Agapea .NET Blazor",
        desc: "Single Page Application for an online bookstore. Built using Blazor WebAssembly with microservices architecture and modern design patterns.",
        tag1: "WebAssembly",
        tag2: "E-Commerce"
      },
      klv: {
        title: "Klv TypeScript Decoder",
        desc: "TypeScript library for decoding Klv binary data with support for Node.js and Angular. Enables real-time Klv decoding for web and desktop applications.",
        tag1: "Library",
        tag2: "npm"
      },
      odonto: {
        title: "Dental Clinic System",
        desc: "Comprehensive patient and consultation management system. Full Stack development featuring real-time synchronization and reactive architecture.",
        tag1: "FullStack",
        tag2: "HealthCare"
      },
      mcp: {
        title: "MCP + AI System",
        desc: "Integration of Model Context Protocol (MCP) to connect AI agents with internal REST services, optimizing productivity through real-time data orchestration.",
        tag1: "Custom Agents",
        tag2: "Node.js",
        tag3: "API REST",
        badge: "Enterprise Integration"
      },
      businessFinder: {
        title: "MCP Business Finder",
        desc: "Model Context Protocol (MCP) server that empowers AI agents to search and analyze business intelligence by geolocation efficiently.",
        tag1: "MCP",
        tag2: "API REST"
      }
    },
    formYexp: {
      academicTitle: "Academic Background",
      mediumGrade: "Vocational Education - Intermediate Degree",
      mediumGradeDesc: "Microcomputer Systems and Networks, 2020 - 2022 IES El Cañaveral",
      higherGrade: "Vocational Education - Higher Degree",
      higherGradeDesc: "Web Application Development, 2022 - 2024 IES Alonso de Avellaneda",
      experienceTitle: "Experience",
      present: "Present",
      roleLabel: "Role:",
      respLabel: "Resp:",
      contextLabel: "Context:",
      impactLabel: "Impact:",
      techLabel: "Tech:",
      indra: {
        title: "Indra",
        subtitle: "Software Engineer / Team Lead",
        date: "Jun 2024 - Present | Madrid",
        role: "Technical team leadership, PR Reviewer, and software quality guarantor.",
        resp: "Critical architecture design, system evolution, and integration testing execution in complex environments.",
        context: "International ACHILE project, Defense sector.",
        impact: "Workflow standardization and systematic increase in team productivity."
      },
      sstrategy: {
        title: "Sstrategy Fintech Company",
        subtitle: "FullStack Developer",
        date: "Apr 2024 - Jun 2024 | Madrid",
        role: "FullStack developer focused on building robust tooling for the banking sector.",
        resp: "Design of XML document viewers and end-to-end server testing using JUnit and SpringBootTesting.",
        tech: "Intensive use of React, Angular, and SpringBoot in scalable architectures."
      },
      accenture: {
        title: "Accenture",
        subtitle: "L2 Technical Support",
        date: "Apr 2022 - Jun 2022 | Madrid",
        role: "Advanced L2 technical support for complex ticket resolution and corporate infrastructure management.",
        resp: "Critical OS fault resolution and large-scale remote preventive maintenance."
      }
    },
    logros: {
      title: "Key Achievements",
      item1Title: "Internal Tooling Development & Automation",
      item1Line1: "Design of critical REST service integrations.",
      item1Line2: "Implementation of innovative solutions (Model Context Protocol, AI).",
      item1Impact: "Impact:",
      item1ImpactDesc: "Significant boost in functional capabilities and team productivity.",
      item2Title: "International Milestone in Germany",
      item2Line1: "Active participation in ACHILE project initiatives on-site.",
      item2Line2: "Multinational collaboration within the European Defence Fund (EDF) ecosystem.",
      item3Title: "Advanced Network Testing",
      item3Line1: "Setup and execution of complex integration test beds.",
      item3Line2: "Simulation of distributed and critical environments for the Defense sector."
    },
    howIWork: {
      title: "How I Work",
      card1Title: "I Think in Systems",
      card1Desc: "I don't build isolated features. I design scalable solutions that seamlessly fit into a robust global architecture.",
      card2Title: "Non-negotiable Quality",
      card2Desc: "Code must be maintainable and readable. As PR Reviewer, I ensure clean code standards are consistently met.",
      card3Title: "Technical Leadership",
      card3Desc: "Beyond coordination, I make structural decisions, mentor the team, and set a high baseline of engineering excellence.",
      card4Title: "Simplifying Complexity",
      card4Desc: "Even in critical Defense systems, my main goal is making architectures clear, resilient, and sustainable over time.",
      card5Title: "Purposeful Innovation",
      card5Desc: "Adopting new tech must deliver real value. I strategically integrate modern tools and optimize internal processes to solve technical challenges and streamline team workflows."
    }
  },
  es: {
    nav: {
      projects: "Mis Proyectos",
      tech: "Tecnologías",
      about: "Sobre mí"
    },
    presentacion: {
      title: "Software Engineer & Technical Leader",
      subtitle: "Diseño y lidero sistemas complejos en el sector Defensa, asegurando calidad, arquitectura y buenas prácticas.",
      badge1: "Team Lead @ Indra",
      badge2: "Proyecto europeo ACHILE",
      badge3: "PR Reviewer & Clean Code",
      btnExperience: "Ver experiencia",
      btnProjects: "Ver proyectos clave"
    },
    tecnologias: {
      title: "Stack Tecnológico",
      backendTitle: "Engineering & Backend",
      fullstackTitle: "Fullstack & Web",
      devopsTitle: "DevOps & Infrastructure",
      architecture: "Arquitectura",
      distributedSystems: "Sistemas Distribuidos"
    },
    sobreMi: {
      title: "Sobre mí",
      p1: "Soy un Ingeniero de Software que lidera y diseña soluciones en el ",
      p1Bold: "sector Defensa",
      p1End: ", entornos donde la complejidad y la criticidad son la norma.",
      p2: "Mi trabajo va más allá de escribir código: defino la arquitectura, establezco estándares de calidad y actúo como ",
      p2Bold: "PR Reviewer",
      p2End: " para garantizar que nuestros sistemas sean escalables, eficientes y sostenibles.",
      p3: "Me enfoco en aportar valor real asegurando el rendimiento de los sistemas. Mantengo una visión integral que me permite adoptar buenas prácticas y herramientas modernas ",
      p3Highlight: "(como el desarrollo de tooling interno e innovación)",
      p3End: " cuando resuelven problemas técnicos reales de forma estratégica."
    },
    liderazgo: {
      title: "Pilares de Liderazgo",
      pilar1Title: "Calidad & Code Review",
      pilar1Desc: "Garantizo la excelencia mediante revisiones exhaustivas y estándares de Clean Code, transformando el feedback en aprendizaje.",
      pilar2Title: "Arquitectura Escalable",
      pilar2Desc: "Diseño sistemas desacoplados y robustos, preparados para evolucionar y soportar cargas críticas en entornos exigentes.",
      pilar3Title: "Mentoría & Guía",
      pilar3Desc: "Facilito el crecimiento del equipo, eliminando bloqueos técnicos y fomentando una cultura de autonomía y responsabilidad.",
      quote: "\"El conocimiento sin compartir es conocimiento perdido.\""
    },
    idiomas: {
      title: "Idiomas",
      spanish: "Español",
      spanishLevel: "- Nativo",
      english: "Inglés",
      englishLevel: "- Intermedio (B1/B2)"
    },
    proyectos: {
      title: "Proyectos Clave",
      sourceCode: "Código Fuente",
      viewDemo: "Ver Demo",
      agapea: {
        title: "Agapea .NET Blazor",
        desc: "Single Page Application para una librería online. Implementación de Blazor WebAssembly con arquitectura de microservicios y patrones de diseño modernos.",
        tag1: "WebAssembly",
        tag2: "E-Commerce"
      },
      klv: {
        title: "Klv TypeScript Decoder",
        desc: "Librería para decodificar binarios Klv en TypeScript con soporte para Node.js y Angular. Permite la decodificación de datos Klv en tiempo real, facilitando la integración con aplicaciones web y de escritorio.",
        tag1: "Librería",
        tag2: "npm"
      },
      odonto: {
        title: "Consultorio Odontológico",
        desc: "Gestión integral de pacientes y consultas. Desarrollo Full Stack con sincronización en tiempo real y arquitectura reactiva.",
        tag1: "FullStack",
        tag2: "HealthCare"
      },
      mcp: {
        title: "MCP + AI System",
        desc: "Integración de un Model Context Protocol (MCP) para conectar IAs con servicios REST internos, optimizando la productividad mediante orquestación de datos en tiempo real.",
        tag1: "Agentes Custom",
        tag2: "Node.js",
        tag3: "API REST",
        badge: "Enterprise Integration"
      },
      businessFinder: {
        title: "MCP Business Finder",
        desc: "Model Context Protocol (MCP) para conectar IAs y dotarlas de herramientas para buscar y analizar información empresarial por geolocalización de manera eficiente.",
        tag1: "MCP",
        tag2: "API REST"
      }
    },
    formYexp: {
      academicTitle: "Formación Académica",
      mediumGrade: "FP Grado Medio",
      mediumGradeDesc: "Sistemas MicroInformáticos y redes, 2020 - 2022 IES El Cañaveral",
      higherGrade: "FP Grado Superior",
      higherGradeDesc: "Desarrollo de Aplicaciones Web, 2022 - 2024 IES Alonso de Avellaneda",
      experienceTitle: "Experiencia",
      present: "Actualidad",
      roleLabel: "Rol:",
      respLabel: "Resp:",
      contextLabel: "Contexto:",
      impactLabel: "Impacto:",
      techLabel: "Tech:",
      indra: {
        title: "Indra",
        subtitle: "Software Engineer / Team Lead",
        date: "Jun 2024 - Actualidad | Madrid",
        role: "Liderazgo técnico de equipo, PR Reviewer y garante de la calidad del software.",
        resp: "Diseño de arquitecturas críticas, evolución del sistema y ejecución de testing de integración en entornos complejos.",
        context: "Proyecto internacional ACHILE, sector Defensa.",
        impact: "Estandarización de flujos de trabajo e incremento sistemático en la productividad del equipo."
      },
      sstrategy: {
        title: "Sstrategy Fintech Company",
        subtitle: "FullStack Developer",
        date: "Abr 2024 - Jun 2024 | Madrid",
        role: "Desarrollador FullStack enfocado en la creación de herramientas robustas para el sector bancario.",
        resp: "Diseño de visores de documentos XML y testing integral del servidor con JUnit y SpringBootTesting.",
        tech: "Uso intensivo de React, Angular y SpringBoot en arquitecturas escalables."
      },
      accenture: {
        title: "Accenture",
        subtitle: "Soporte Técnico L2",
        date: "Abr 2022 - Jun 2022 | Madrid",
        role: "Soporte técnico avanzado L2 para la resolución de tickets complejos y gestión de infraestructuras corporativas.",
        resp: "Resolución de fallos críticos del sistema operativo y mantenimiento preventivo remoto a gran escala."
      }
    },
    logros: {
      title: "Logros Clave",
      item1Title: "Desarrollo de Internal Tooling & Automatización",
      item1Line1: "Diseño de integraciones críticas con servicios REST.",
      item1Line2: "Implementación de soluciones innovadoras (Model Context Protocol, IA).",
      item1Impact: "Impacto:",
      item1ImpactDesc: "Aumento significativo en las capacidades funcionales y productividad del equipo.",
      item2Title: "Hito internacional en Alemania",
      item2Line1: "Participación activa en iniciativas del proyecto ACHILE in-situ.",
      item2Line2: "Colaboración multinacional en el entorno del European Defence Fund (EDF).",
      item3Title: "Testing avanzado en redes",
      item3Line1: "Configuración y ejecución de pruebas de integración complejas.",
      item3Line2: "Simulación de entornos distribuidos y críticos para el sector Defensa."
    },
    howIWork: {
      title: "Cómo Trabajo",
      card1Title: "Pienso en sistemas",
      card1Desc: "No construyo funcionalidades aisladas. Diseño soluciones escalables que encajen dentro de una arquitectura global robusta.",
      card2Title: "Calidad innegociable",
      card2Desc: "El código debe ser mantenible y legible. Como PR Reviewer, aseguro que los estándares de clean code sean cumplidos siempre.",
      card3Title: "Lidero desde lo técnico",
      card3Desc: "Más allá de coordinar, tomo decisiones estructurales, guío al equipo y establezco una línea base de excelencia.",
      card4Title: "Simplifico lo complejo",
      card4Desc: "Incluso en los sistemas más críticos de Defensa, mi objetivo principal es hacerlos comprensibles, resilientes y sostenibles a largo plazo.",
      card5Title: "Innovo con propósito",
      card5Desc: "La adopción de nuevas tecnologías debe aportar valor real. Integro herramientas modernas y optimizo procesos internos estratégicamente para resolver problemas técnicos y mejorar el flujo de trabajo del equipo."
    }
  }
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('en');

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'es' : 'en'));
  };

  const t = translations[lang] || translations.en;

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
