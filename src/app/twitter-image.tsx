import { ImageResponse } from "next/og";

export const alt = "José Zapata | Backend & Full Stack Developer";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#05070b",
          color: "#ffffff",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            color: "#60a5fa",
            textTransform: "uppercase",
            letterSpacing: 4,
          }}
        >
          Software Developer
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 30,
            fontSize: 82,
            fontWeight: 700,
          }}
        >
          José Zapata
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 20,
            fontSize: 42,
            color: "#cbd5e1",
          }}
        >
          Backend & Full Stack Developer
        </div>
      </div>
    ),
    size,
  );
}