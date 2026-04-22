"use client";
import Navbar from "../components/Navbar";

export default function AboutUs() {
  return (
    <main style={{ minHeight: "100vh", background: "white", display: "flex", flexDirection: "column" }}>
      <Navbar />

      {/* About Us Section */}
      <section style={{
        width: "100%",
        padding: "6rem 2rem 4rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "60px"
      }}>
        <div style={{ width: "280px", flexShrink: 0 }}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#1a1a2e" }}>About Us</h1>
          <p style={{ color: "#6b7280", marginTop: "0.5rem" }}>Description</p>
        </div>
        <div style={{
          width: "380px",
          height: "340px",
          flexShrink: 0,
          background: "#FFF",
          boxShadow: "0px 1px 15.7px 4.486px #ADC8EF"
        }} />
      </section>

      {/* Get Involved Section */}
      <section style={{
        width: "100%",
        padding: "4rem 2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
        <h2 style={{ fontSize: "2rem", fontWeight: "bold", color: "#1a1a2e" }}>Get Involved</h2>
        <p style={{ color: "#6b7280", marginTop: "0.5rem", marginBottom: "2rem" }}>Description</p>
        <div style={{
          maxWidth: "1028px",
          width: "100%",
          height: "406px",
          background: "#D9D9D9",
          borderRadius: "8px"
        }} />
      </section>

      {/* Join the Quantum Revolution */}
      <section style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        padding: "5rem 2rem",
        width: "100%"
      }}>
        <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#1a1a2e" }}>
          Join the Quantum Revolution
        </h2>
        <p style={{ color: "#4b5563", marginTop: "1rem", maxWidth: "600px" }}>
          Whether you're a student, researcher, or quantum enthusiast, there's a place for you in QCSA
        </p>
        <button style={{
          display: "inline-flex",
          padding: "15.5px 56px 16.5px 56px",
          alignItems: "center",
          gap: "12px",
          borderRadius: "9999px",
          background: "#312C85",
          color: "white",
          border: "none",
          cursor: "pointer",
          marginTop: "2rem",
          fontSize: "1rem"
        }}>
          Learn More →
        </button>
      </section>

      {/* Footer */}
      <div style={{
        marginTop: "auto",
        background: "#dce8f8",
        padding: "2rem",
        display: "flex",
        justifyContent: "center"
      }}>
        <img src="/QCSA-Logo-2.webp" alt="QCSA Logo" style={{ height: "80px" }} />
      </div>

    </main>
  );
}