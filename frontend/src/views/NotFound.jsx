import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #f8fafc 0%, #e0e7ef 100%)",
        fontFamily: "Segoe UI, Arial, sans-serif",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "3rem 2rem",
          borderRadius: "1.5rem",
          boxShadow: "0 8px 32px rgba(60,72,88,0.12)",
          textAlign: "center",
          maxWidth: "400px",
        }}
      >
        <h1
          style={{
            fontSize: "7rem",
            margin: "0 0 1rem 0",
            color: "#007bff",
            fontWeight: 800,
            letterSpacing: "2px",
            lineHeight: 1,
          }}
        >
          404
        </h1>
        <h2 style={{ margin: "0 0 1rem 0", color: "#222", fontWeight: 600 }}>
          Page Not Found
        </h2>
        <p style={{ color: "#555", marginBottom: "2rem" }}>
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          to="/"
          style={{
            display: "inline-block",
            padding: "0.75rem 2rem",
            background: "#007bff",
            color: "#fff",
            borderRadius: "2rem",
            textDecoration: "none",
            fontWeight: 600,
            boxShadow: "0 2px 8px rgba(0,123,255,0.08)",
            transition: "background 0.2s",
          }}
          onMouseOver={e => (e.currentTarget.style.background = "#0056b3")}
          onMouseOut={e => (e.currentTarget.style.background = "#007bff")}
        >
          Go back to Home
        </Link>
      </div>
    </div>
  );
}
