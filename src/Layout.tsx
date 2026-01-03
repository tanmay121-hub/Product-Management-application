import { Link, Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();

  const linkStyle = (path: string): React.CSSProperties => ({
    textDecoration: "none",
    padding: "10px 14px",
    borderRadius: 10,
    fontWeight: 600,
    color: location.pathname === path ? "#fff" : "#111827",
    background: location.pathname === path ? "#2563eb" : "transparent",
    border: "1px solid",
    borderColor: location.pathname === path ? "#2563eb" : "#e5e7eb",
    transition: "all 0.15s ease",
  });

  return (
    <div style={{ minHeight: "100vh", background: "#f8fafc" }}>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 10,
          background: "white",
          borderBottom: "1px solid #e5e7eb",
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "14px 16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
          }}
        >
          <h1
            style={{
              margin: 0,
              fontSize: 20,
              fontWeight: 800,
              color: "#111827",
            }}
          >
            My App
          </h1>

          <nav>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                gap: 10,
                padding: 0,
                margin: 0,
                alignItems: "center",
              }}
            >
              <li>
                <Link to="/" style={linkStyle("/products")}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/add" style={linkStyle("/add")}>
                  Add Product
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main style={{ maxWidth: 1100, margin: "0 auto", padding: 16 }}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
