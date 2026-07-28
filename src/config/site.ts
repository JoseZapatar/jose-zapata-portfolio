export const siteConfig = {
  name: "José Zapata",
  title: "José Zapata | Backend & Full Stack Developer",
  description:
    "Portfolio de José Zapata, desarrollador de software especializado en ASP.NET Core, SQL Server, React y Next.js. Proyectos, arquitectura, APIs REST y bases de datos.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "http://localhost:3000",
  locale: "es_NI",
  language: "es",
  email: "joseangelzapatarosales@gmail.com",
  github: "https://github.com/JoseZapatar",
  keywords: [
    "José Zapata",
    "desarrollador de software",
    "backend developer",
    "full stack developer",
    "ASP.NET Core",
    "C#",
    "SQL Server",
    "React",
    "Next.js",
    "TypeScript",
    "REST API",
    "Nicaragua",
  ],
} as const;