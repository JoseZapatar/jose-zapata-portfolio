export const siteConfig = {
  name: "José Zapata",
  title: "José Zapata — Backend & Full Stack Developer",
  description:
    "Portfolio de José Zapata, desarrollador backend y full stack especializado en ASP.NET Core, APIs REST, SQL Server, React y Next.js.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://jose-zapata-portfolio.vercel.app",
  locale: "es_NI",
  language: "es",
  email: "joseangelzapatarosales@gmail.com",
  github: "https://github.com/JoseZapatar",
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL?.trim() || "",
  resume: "/cv.pdf",
  keywords: [
    "José Zapata",
    "desarrollador backend",
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
