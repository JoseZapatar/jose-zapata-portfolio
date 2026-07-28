import { siteConfig } from "@/config/site";

export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteConfig.url}/#person`,
        name: siteConfig.name,
        url: siteConfig.url,
        email: `mailto:${siteConfig.email}`,
        jobTitle: "Backend & Full Stack Developer",
        description: siteConfig.description,
        nationality: {
          "@type": "Country",
          name: "Nicaragua",
        },
        knowsAbout: [
          "ASP.NET Core",
          "C#",
          "SQL Server",
          "REST APIs",
          "React",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Entity Framework Core",
          "Software Architecture",
        ],
        sameAs: [siteConfig.github],
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: `${siteConfig.name} Portfolio`,
        description: siteConfig.description,
        inLanguage: "es",
        author: {
          "@id": `${siteConfig.url}/#person`,
        },
      },
      {
        "@type": "ProfilePage",
        "@id": `${siteConfig.url}/#profile-page`,
        url: siteConfig.url,
        name: siteConfig.title,
        description: siteConfig.description,
        inLanguage: "es",
        mainEntity: {
          "@id": `${siteConfig.url}/#person`,
        },
        isPartOf: {
          "@id": `${siteConfig.url}/#website`,
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}