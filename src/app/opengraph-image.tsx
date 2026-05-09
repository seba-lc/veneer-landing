import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Veneer — Carpintería a medida y colecciones. Yerba Buena, Tucumán.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background:
            "radial-gradient(ellipse 100% 70% at 18% 20%, rgba(168,85,78,0.22), transparent 55%), radial-gradient(ellipse 90% 70% at 86% 88%, rgba(60,42,32,0.42), transparent 60%), #1a120b",
          padding: 80,
          color: "#f4ebd9",
          fontFamily: "Georgia, serif",
          position: "relative",
        }}
      >
        {/* Top row: wordmark + tag */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
            <svg width="44" height="44" viewBox="0 0 36 36">
              <g stroke="#f4ebd9" strokeWidth="1.6" fill="none">
                <path d="M 4 6 L 18 32" />
                <path d="M 32 6 L 18 32" />
                <line x1="4" y1="6" x2="32" y2="6" strokeWidth="1.2" />
              </g>
            </svg>
            <span style={{ fontSize: 36, letterSpacing: "0.22em" }}>VENEER</span>
          </div>
          <span
            style={{
              fontFamily: "monospace",
              fontSize: 18,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#a8554e",
            }}
          >
            Yerba Buena · Tucumán
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            display: "flex",
            flex: 1,
            alignItems: "flex-end",
            marginTop: 40,
          }}
        >
          <h1
            style={{
              fontSize: 124,
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              margin: 0,
              maxWidth: 1020,
            }}
          >
            Carpintería{" "}
            <i style={{ color: "#a8554e", fontWeight: 400 }}>a medida</i>,
            co-creada.
          </h1>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginTop: 30,
            borderTop: "1px solid rgba(244,235,217,0.32)",
            paddingTop: 24,
          }}
        >
          <span style={{ fontSize: 26, color: "#f4ebd9", maxWidth: 820 }}>
            A medida + Colecciones · Cocinas · Placares · Oficinas · Bar · Living
          </span>
          <span
            style={{
              fontFamily: "monospace",
              fontSize: 18,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#a8554e",
            }}
          >
            veneer.com.ar
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
