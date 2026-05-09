import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default async function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#1a120b",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width="22" height="22" viewBox="0 0 36 36">
          <g stroke="#f4ebd9" strokeWidth="2.4" fill="none" strokeLinecap="square">
            <path d="M 4 6 L 18 32" />
            <path d="M 32 6 L 18 32" />
            <line x1="4" y1="6" x2="32" y2="6" strokeWidth="2" />
          </g>
        </svg>
      </div>
    ),
    { ...size }
  );
}
