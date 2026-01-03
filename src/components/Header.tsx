// Header.tsx
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { getAuthUser, logout } from "../utils/storage";

import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
const styles: Record<string, React.CSSProperties> = {
  header: {
    position: "sticky",
    top: 0,
    zIndex: 50,
    background: "rgba(255,255,255,0.85)",
    backdropFilter: "blur(10px)",
    borderBottom: "1px solid rgba(229,231,235,0.9)",
  },
  inner: {
    maxWidth: 1100,
    margin: "0 auto",
    padding: "12px 16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },
  brand: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    textDecoration: "none",
    color: "#111827",
    fontWeight: 900,
    letterSpacing: "-0.02em",
  },
  logo: {
    width: 36,
    height: 36,
    borderRadius: 12,
    background: "linear-gradient(135deg, #2563eb, #7c3aed)",
    boxShadow: "0 10px 24px rgba(37, 99, 235, 0.25)",
    flex: "0 0 auto",
  },
  brandText: { display: "flex", flexDirection: "column", lineHeight: 1.1 },
  title: { fontSize: 16, margin: 0 },
  subtitle: { fontSize: 12, margin: 0, color: "#6b7280", fontWeight: 600 },

  nav: { display: "flex", alignItems: "center", gap: 10 },

  pill: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px 12px",
    borderRadius: 999,
    textDecoration: "none",
    fontWeight: 700,
    fontSize: 14,
    border: "1px solid #e5e7eb",
    color: "#111827",
    background: "#fff",
    transition:
      "transform 0.12s ease, box-shadow 0.12s ease, background 0.12s ease",
  },
  pillActive: {
    border: "1px solid rgba(37,99,235,0.35)",
    background: "rgba(37,99,235,0.10)",
    color: "#1d4ed8",
    boxShadow: "0 8px 20px rgba(37,99,235,0.12)",
  },
  primary: {
    background: "linear-gradient(135deg, #2563eb, #4f46e5)",
    color: "#fff",
    border: "1px solid rgba(37,99,235,0.35)",
    boxShadow: "0 10px 24px rgba(37,99,235,0.22)",
  },
};

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState(getAuthUser());

  // treat edit page as part of "Products" section
  const isProductsActive =
    location.pathname === "/products" || location.pathname.startsWith("/edit/");

  const pillStyle = (active: boolean): React.CSSProperties => ({
    ...styles.pill,
    ...(active ? styles.pillActive : {}),
  });
  useEffect(() => {
    setUser(getAuthUser());
  }, [location.pathname]);
  const handleLogout = () => {
    logout();
    setUser(null);
    navigate("/login");
  };
  return (
    <header style={styles.header}>
      <div style={styles.inner}>
        <Link to="/products" style={styles.brand}>
          <span style={styles.brandText}>
            <p style={styles.title}>My App</p>
            <p style={styles.subtitle}>Product Manager</p>
          </span>
        </Link>

        <nav style={styles.nav}>
          <Link to="/products" style={pillStyle(isProductsActive)}>
            Products
          </Link>

          <Link
            to="/add"
            style={{
              ...pillStyle(location.pathname === "/add"),
              ...styles.primary,
            }}
          >
            + Add Product
          </Link>
          {user ? (
            <Button onClick={handleLogout} style={styles.pill}>
              Logout
            </Button>
          ) : (
            <Link to="/login" style={styles.pill}>
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
