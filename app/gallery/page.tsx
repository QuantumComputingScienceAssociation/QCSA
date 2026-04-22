"use client";
import Navbar from "../components/Navbar";

export default function Gallery() {
  const images = Array(12).fill(null);

  return (
    <main style={{ minHeight: "100vh", background: "white", display: "flex", flexDirection: "column" }}>
      <Navbar />

      {/* Header */}
      <div style={{ textAlign: "center", paddingTop: "5rem", paddingBottom: "3rem" }}>
        <h1 style={{
          display: "flex",
          height: "40px",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "2rem",
          fontWeight: "bold",
          color: "#1a1a2e"
        }}>
          Gallery
        </h1>
        <p style={{
          display: "flex",
          width: "768px",
          height: "84px",
          padding: "0 6.273px 56px 6.727px",
          justifyContent: "center",
          alignItems: "center",
          color: "#6b7280",
          margin: "0 auto"
        }}>
          Description
        </p>
      </div>

      {/* Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 327px)",
        gap: "24px",
        justifyContent: "center",
        padding: "0 2rem 5rem"
      }}>
        {images.map((_, i) => (
          <div key={i} style={{
            width: "327px",
            height: "253px",
            borderRadius: "8px",
            background: "#D9D9D9"
          }} />
        ))}
      </div>

      {/* Footer */}
      <div style={{ marginTop: "auto", background: "#dce8f8", padding: "2rem", display: "flex", justifyContent: "center" }}>
        <img src="/QCSA-Logo-2.webp" alt="QCSA Logo" style={{ height: "80px" }} />
      </div>
    </main>
  );
}