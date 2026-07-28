export type Project = {
  id: string;
  slug: string;
  title: string;
  category: string;
  subtitle: string;
  description: string;
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
    category: "Travel Booking Platform",
    subtitle:
      "Reservas, certificación de agentes y administración de viajes",
    description:
      "Plataforma de gestión y reservas de viajes que permite explorar paquetes, certificar agentes, administrar disponibilidades y gestionar reservaciones mediante un frontend web y una API REST.",
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
    category: "Pet Adoption Platform",
    subtitle:
      "Gestión integral de mascotas, adoptantes y solicitudes",
    description:
      "Aplicación web para gestionar mascotas disponibles, perfiles de adoptantes y solicitudes de adopción con seguridad basada en JWT y control de roles.",
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

];