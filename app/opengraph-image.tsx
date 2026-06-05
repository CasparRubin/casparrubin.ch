import { ImageResponse } from "next/og";

import { getOgEmployerLine, JOB_TITLE, SITE_NAME } from "@/lib/site";

export const runtime = "edge";
export const alt = `${SITE_NAME}, ${JOB_TITLE}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  const employerLine = getOgEmployerLine();

  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        width: "100%",
        height: "100%",
        padding: "80px",
        backgroundColor: "#09090b",
        color: "#fafafa",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          width: 48,
          height: 48,
          borderRadius: 8,
          backgroundColor: "#ec003f",
          marginBottom: 40,
        }}
      />
      <div
        style={{
          fontSize: 56,
          fontWeight: 700,
          lineHeight: 1.15,
          letterSpacing: "-0.02em",
          marginBottom: 16,
        }}
      >
        {SITE_NAME}
      </div>
      <div
        style={{
          fontSize: 28,
          fontWeight: 500,
          color: "#ec003f",
          marginBottom: 12,
        }}
      >
        {JOB_TITLE}
      </div>
      <div
        style={{
          fontSize: 22,
          color: "#a1a1aa",
        }}
      >
        {employerLine}
      </div>
      <div
        style={{
          display: "flex",
          position: "absolute",
          bottom: 80,
          left: 80,
          fontSize: 18,
          color: "#71717a",
        }}
      >
        casparrubin.ch
      </div>
    </div>,
    { ...size }
  );
}
