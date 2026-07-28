import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "José Zapata | Portfolio",
    short_name: "José Zapata",
    description:
      "Portfolio profesional de José Zapata, Backend y Full Stack Developer.",
    start_url: "/",
    display: "standalone",
    background_color: "#05070b",
    theme_color: "#05070b",
    lang: "es",
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}