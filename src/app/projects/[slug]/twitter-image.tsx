import { ImageResponse } from "next/og";

import { projects } from "@/data/projects";

export const alt = "Caso de estudio de José Zapata";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

type ProjectTwitterImageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectTwitterImage({
  params,
}: ProjectTwitterImageProps) {
  const { slug } = await params;

  const project = projects.find(
    (currentProject) => currentProject.slug === slug,
  );

  const projectTitle = project?.title ?? "Proyecto no encontrado";
  const projectCategory = project?.category ?? "Caso de estudio";
  const projectSubtitle =
    project?.subtitle ??
    "Proyecto desarrollado por José Zapata.";

  const technologies = project?.technologies.slice(0, 5) ?? [];

  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          display: "flex",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          background: "#05070b",
          color: "#ffffff",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-250px",
            right: "-100px",
            width: "700px",
            height: "700px",
            borderRadius: "9999px",
            background: "rgba(37, 99, 235, 0.26)",
            filter: "blur(110px)",
          }}
        />

        <div
          style={{
            position: "absolute",
            bottom: "-320px",
            left: "-120px",
            width: "650px",
            height: "650px",
            borderRadius: "9999px",
            background: "rgba(8, 145, 178, 0.16)",
            filter: "blur(120px)",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.08,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />

        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            padding: "68px 82px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                color: "#60a5fa",
                fontSize: "22px",
                fontWeight: 600,
                letterSpacing: "4px",
                textTransform: "uppercase",
              }}
            >
              Caso de estudio
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "78px",
                height: "78px",
                borderRadius: "9999px",
                border: "1px solid rgba(96,165,250,0.35)",
                background: "rgba(37,99,235,0.12)",
                color: "#93c5fd",
                fontSize: "28px",
                fontWeight: 700,
              }}
            >
              JZ
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: "1000px",
            }}
          >
            <div
              style={{
                display: "flex",
                color: "#94a3b8",
                fontSize: "24px",
                fontWeight: 500,
              }}
            >
              {projectCategory}
            </div>

            <div
              style={{
                display: "flex",
                marginTop: "18px",
                fontSize: projectTitle.length > 18 ? "68px" : "82px",
                fontWeight: 700,
                lineHeight: 1,
                letterSpacing: "-4px",
              }}
            >
              {projectTitle}
            </div>

            <div
              style={{
                display: "flex",
                marginTop: "24px",
                maxWidth: "930px",
                color: "#cbd5e1",
                fontSize: "30px",
                lineHeight: 1.35,
              }}
            >
              {projectSubtitle}
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "12px",
                marginTop: "36px",
              }}
            >
              {technologies.map((technology) => (
                <div
                  key={technology}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    border: "1px solid rgba(255,255,255,0.13)",
                    borderRadius: "9999px",
                    background: "rgba(255,255,255,0.05)",
                    padding: "10px 17px",
                    color: "#cbd5e1",
                    fontSize: "18px",
                  }}
                >
                  {technology}
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: "24px",
              borderTop: "1px solid rgba(255,255,255,0.1)",
              color: "#64748b",
              fontSize: "18px",
            }}
          >
            <div style={{ display: "flex" }}>
              José Zapata · Backend & Full Stack Developer
            </div>

            <div
              style={{
                display: "flex",
                color: "#94a3b8",
              }}
            >
              Portfolio
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}