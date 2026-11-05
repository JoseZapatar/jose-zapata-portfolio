export type Project = {
  id: string;
  slug: string;
  title: string;
  category: string;
  subtitle: string;
  description: string;
  headline: string;
  narrative: {
    problem: string;
    decision: string;
    result: string;
  };
  role?: string;
  technologies: string[];
  status: "Live" | "Repository";
  demoUrl?: string;
  frontendUrl: string;
  backendUrl: string;
  accent: string;
  highlights: string[];
  image?: string;
  problem: string;
  solution: string;
};
export const projects: Project[] = [
  {
    id: "travel-booking",
    slug: "viajespro",
    title: "ViajesPro",
    category: "Plataforma de reservas de viajes",
    subtitle:
      "Reservas, certificación de agentes y administración de viajes",
    description:
      "Plataforma de gestión y reservas de viajes que permite explorar paquetes, certificar agentes, administrar disponibilidades y gestionar reservaciones mediante un frontend web y una API REST.",
    headline: "Sistema de reservas para agencias certificadas.",
    narrative: {
      problem: "Una agencia sin certificación no debía poder publicar viajes.",
      decision: "La validación debía protegerse desde la API y no depender del cliente.",
      result: "La regla permanece activa aunque cambie el frontend o se agregue una aplicación móvil.",
    },
    role:
      "Diseñé y desarrollé las APIs REST con ASP.NET Core, implementé autenticación JWT, autorización por roles y validaciones para agentes certificados, diseñé la base de datos en SQL Server e integré el frontend con la API.",
    technologies: [
      "ASP.NET Core",
      "Next.js",
      "SQL Server",
      "JWT",
      "REST API",
    ],
    status: "Live",
    demoUrl: "https://viajespro-frontend.vercel.app/",
    frontendUrl:
      "https://github.com/Eduardobarrera487/viajespro-frontend",
    backendUrl:
      "https://github.com/bradlygutierrez/ReservasViajesAPI.NET",
    accent: "from-blue-500/20 via-cyan-500/10 to-transparent",
    highlights: [
      "Certificación y validación de agentes",
      "Gestión de paquetes, destinos y disponibilidades",
      "Reservas, pasajeros y control de estados",
    ],
    image: "/images/projects/viajespro/hero.png",
    problem:
      "La gestión de paquetes turísticos, fechas disponibles, reservas y clientes puede convertirse en un proceso fragmentado cuando se utilizan registros manuales o herramientas separadas. Esto dificulta consultar disponibilidad, controlar el estado de las reservas y mantener la información actualizada.",

    solution:
      "ViajesPro centraliza la publicación de paquetes, la consulta de disponibilidad y el proceso de reserva en una aplicación web. El frontend consume una API REST encargada de aplicar las reglas de negocio, validar las operaciones y persistir la información en SQL Server.",
  },
  {
    id: "pet-adoption",
    slug: "pet-adopt",
    title: "Pet Adopt",
    category: "Plataforma de adopción de mascotas",
    subtitle:
      "Gestión integral de mascotas, adoptantes y solicitudes",
    description:
      "Aplicación web para gestionar mascotas disponibles, perfiles de adoptantes y solicitudes de adopción con seguridad basada en JWT y control de roles.",
    headline: "Una plataforma para organizar procesos de adopción.",
    narrative: {
      problem: "Adoptantes, mascotas y solicitudes necesitaban convivir sin perder control de permisos.",
      decision: "Separar responsabilidades mediante roles, JWT y endpoints especializados.",
      result: "El flujo de adopción quedó más claro para usuarios y administradores.",
    },
    role:
      "Desarrollé las APIs REST y el flujo de solicitudes de adopción con aprobación administrativa, implementé autenticación JWT, roles y protección con API Key, e integré React Query para consumir la API.",
    technologies: [
      "ASP.NET Core",
      "React",
      "SQL Server",
      "React Query",
      "JWT",
    ],
    status: "Live",
    demoUrl: "https://pet-adopt-tawny.vercel.app/",
    frontendUrl:
      "https://github.com/JoseZapatar/PetAdoptFrontend",
    backendUrl:
      "https://github.com/JoseZapatar/AdopcionDbAPI",
    accent: "from-violet-500/20 via-fuchsia-500/10 to-transparent",
    highlights: [
      "Gestión de mascotas y perfiles de adoptantes",
      "Aprobación y rechazo de solicitudes",
      "Seguridad mediante JWT, roles y API Key",
    ],
    image: "/images/projects/pet-adopt/hero.png",
    problem:
      "Los procesos de adopción requieren organizar mascotas, perfiles de adoptantes y solicitudes, además de controlar quién puede aprobar o rechazar cada operación.",

    solution:
      "Pet Adopt reúne estos procesos en una plataforma web con autenticación JWT, gestión de roles y una API REST conectada a una base de datos relacional.",
  },
  {
    id: "lumora-health-staff",
    slug: "lumora",
    title: "Lumora Health Staff",
    category: "Plataforma de salud · Hackathon",
    subtitle:
      "Agenda, expediente clínico y recetas para profesionales de salud",
    description:
      "Aplicación móvil para que el personal de salud gestione citas, expedientes, consultas, diagnósticos y recetas mediante una API REST con FastAPI y PostgreSQL.",
    headline: "Una app móvil para que el personal de salud atienda con contexto.",
    narrative: {
      problem:
        "Tener el rol de profesional de salud no debía bastar para ver o modificar cualquier expediente.",
      decision:
        "Exigir desde el backend una relación real entre profesional y paciente, por una cita o consulta previa.",
      result:
        "La regla se aplica en todo el historial clínico y está cubierta por pruebas de regresión.",
    },
    role:
      "En un hackathon con un equipo de 3, desarrollé de forma individual el módulo completo de Health Staff, backend y frontend, mientras mis compañeros construían la app de pacientes y cuidadores y el portal web.",
    technologies: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "React Native",
      "Expo",
      "TypeScript",
    ],
    status: "Repository",
    frontendUrl:
      "https://github.com/bradlygutierrez/Lumora-Hackathon-salud-para-todos/tree/develop/Frontend/lumora-health-staff",
    backendUrl:
      "https://github.com/bradlygutierrez/Lumora-Hackathon-salud-para-todos/tree/develop/Backend",
    accent: "from-sky-500/20 via-cyan-500/10 to-transparent",
    highlights: [
      "Agenda, citas y expediente clínico",
      "Consultas, diagnósticos y recetas",
      "Autorización basada en la relación profesional-paciente",
    ],
    image: "/images/projects/lumora/hero.png",
    problem:
      "Un profesional de salud necesita consultar la agenda, el expediente, los diagnósticos y las recetas de cada paciente en un solo lugar. Al tratarse de datos clínicos, esa información solo debe estar disponible para quien realmente atiende a ese paciente.",

    solution:
      "Lumora Health Staff reúne esos flujos en una app Expo conectada a una API con FastAPI y PostgreSQL. El backend valida la relación entre profesional y paciente, limita la edición de diagnósticos y recetas a 48 horas y permite un registro de emergencia con solo nombre y apellido.",
  },

];